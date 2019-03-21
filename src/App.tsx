import React, { Component } from 'react';
import { Button, Slider, Switch } from 'antd';
import './App.less';
import Admin from './admin';

class App extends Component {
    state = {
        disabled: false
    };

    handleDisabledChange = (disabled: any) => {
        this.setState({ disabled });
    };
    render() {
        const { disabled } = this.state;
        return (
            <div className="App">
                <Admin/>
            </div>
        );
    }
}

export default App;
