import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'mobx-react';
import getStore from 'store';
import 'styles/index.css';

class MobxPoweredApp extends App {
  static async getInitialProps(appContext) {
    // this is executed at server side only.
    // We need to instance the store here. The thing is:
    // The store will be static on server side. keep that in mind.
    const store = getStore();

    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      store
    };
  }

  constructor(props) {
    super(props);

    // On constructor, we have to check if we are on the server or not.
    // If not, we need to reinstance the store to make it dynamic.
    const isServer = typeof window === 'undefined';
    if (isServer) {
      this.store = this.props.store;
    } else {
      this.store = getStore();
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
