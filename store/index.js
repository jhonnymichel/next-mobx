import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

let store = null;

class Store {
  @observable clickCount = 55;

  @action raiseClickCount = () => {
    this.clickCount++
  }
}

export default function getStore() {
  if (isServer) {
    return new Store();
  } else if (!store) {
    store = new Store();
  }
  return store;
}