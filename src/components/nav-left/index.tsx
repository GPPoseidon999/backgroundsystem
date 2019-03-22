import React, { Component } from 'react';
import './index.less';
import { Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import menuList from '../../config/menuConfig';
interface MenuItem {
    title: string;
    key: string;
}
interface Item {
    title: string;
    key: string;
}

export default class NavLeft extends Component {
    state = {
        menuTreeNode: null
    };
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        });
    }
    renderMenu = (data: any) => {
        return data.map((item: MenuItem & { children: Item; btnList: Item }) => {
            if (item.children) {
                return <SubMenu title={item.title} key={item.key}>{this.renderMenu(item.children)}</SubMenu>;
            }
            return <Menu.Item title={item.title} key={item.key} >{item.title}</Menu.Item>;
        });
    };
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>System</h1>
                </div>
                <Menu theme="dark">{this.state.menuTreeNode}</Menu>
            </div>
        );
    }
}
