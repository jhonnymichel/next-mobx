import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

export default inject('store')(
  observer(({ store }) => (
    <>
      <h1>About page</h1>
      <p>You clicked the other page button: {store.clickCount} times</p>
      <button type="button" onClick={store.raiseClickCount}>
        Click me
      </button>
    </>
  ))
);
