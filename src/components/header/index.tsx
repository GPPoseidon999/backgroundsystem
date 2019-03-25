import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from './../../utils';
import Request from '../../common/request';

export default class Header extends Component {
    state = {
        userName: null,
        sysTime: null,
        weather: null
    };
    componentWillMount() {
        this.setState({
            userName: '123'
        });
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            });
        }, 1000);
        this.getWeatherData();
    }
    getWeatherData() {
        let city = '110105';
        Request.jsonp({
            url: `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=a9f864424662b808dbad960150f93f93`
        })
            .then((res: any) => {
                const weatherInfo = res.lives[0];
                const weather = `${weatherInfo.weather} ${weatherInfo.temperature}度 ${
                    weatherInfo.winddirection
                }风 ${weatherInfo.windpower}级`;
                this.setState({ weather });
            })
            .catch(e => {
                console.log(e);
            });
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
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
