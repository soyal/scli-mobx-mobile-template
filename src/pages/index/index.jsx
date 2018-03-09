import React, { Component } from 'react'
import { Button } from 'antd-mobile'

import './index.less'

class Index extends Component {
  render() {
    return (
      <div>
        <h2>index</h2>
        <Button type="primary" size="large" loading className='button'>测试按钮</Button>
        <div className="box"></div>
      </div>
    )
  }
}

export default Index