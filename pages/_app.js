import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'mobx-react';
import getStore from 'store';
import 'styles/index.css';

class MobxPoweredApp extends App {
  static async getInitialProps(appContext) {
    // this is executed at server side only.
    // We need to instance the store here.
    const store = getStore();
    const { router } = appContext;
    if (router.query.count) {
      try {
        // this is an example of altering the initial store state in the server side.
        // in this case, I'm using url query parameters to do so.
        store.clickCount = Number(router.query.count);
      } catch (e) {
        store.clickCount = 0;
      }
    }

    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      store
    };
  }

  constructor(props) {
    super(props);

    // On constructor, we have to check if we are on the server or not.
    const isServer = typeof window === 'undefined';
    if (isServer) {
      // if we are on the server, simply set store to be this.props.store - this is the instance we just setup
      // at the async getInitialProps function.
      this.store = this.props.store;
    } else {
      // if we're in the client, we must create a new instance of the store.
      // this is because the server side mobx store is static. let's reinstance it to make it dynamic.
      // but we can't simply ignore this.props.store:
      // it's important to make the initial client side store state synced with the
      // initial state we set in the server side (at the async getInitialProps function).
      // In my implementation, the getStore function accepts the initial state as argument.
      // check ../store.js to see how I use this argument.
      this.store = getStore(this.props.store);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MobxPoweredApp;
