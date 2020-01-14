import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

class Store {
  @observable clickCount = 0;

  constructor(initialState = {}) {
    if (initialState.clickCount) {
      this.clickCount = initialState.clickCount;
    }
  }

  @action raiseClickCount = () => {
    this.clickCount += 1;
  };
}

export default function getStore(initialState) {
  if (isServer) {
    return new Store(initialState);
  }

  if (!store) {
    store = new Store(initialState);
  }

  return store;
}
