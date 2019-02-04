import React from 'react';
import { observable } from 'mobx';
import { observer, useStaticRendering, inject } from 'mobx-react';
import Link from 'next/link'

@inject('store')
@observer
class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, you clicked the button {this.props.store.clickCount} times</p>
        <button onClick={this.props.store.raiseClickCount}>Click here</button>
        <Link href="/about"><a>About me</a></Link>
      </div>
    )
  }
}

export default Index;
