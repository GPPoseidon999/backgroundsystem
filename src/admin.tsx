import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/header'
import Footer from './components/footer'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col span="3">Left</Col>
            <Col span="21">
                <Header></Header>
                <Row>这是中间内容</Row>
                <Footer></Footer>
            </Col>
        </Row>
      </div>
    )
  }
}

