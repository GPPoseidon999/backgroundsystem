import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from './../../utils'

export default class Header extends Component {
    state = {
        userName: null,
        sysTime: null
    };
    componentWillMount() {
        this.setState({
            userName: '123'
        });
        setInterval(()=>{
          let sysTime = Util.formateDate(new Date().getTime());
          this.setState({
              sysTime
          })
        },1000)
    } 
    render() {
        return (
            <div>
                <Row className="header-top ">
                    <Col span={24}>
                        <span>欢迎,{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="header-info">
                    <Col span={4} className="header-info-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
