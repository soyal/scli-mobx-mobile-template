/**
 * 最顶层组件
 */
import React, { Component } from 'react'
import Routers from './routers'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Routers history={this.props.history} />
        </div>
      </div>
    )
  }
}
