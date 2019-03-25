import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import NavLeft from './components/nav-left';
import './style/common.less';
import Home from './pages/home'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={21} className="main">
                        <Header />
                        <Row className="content">
                            <Home/>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}
