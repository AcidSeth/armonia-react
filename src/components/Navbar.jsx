import React from 'react';
import { Menu } from 'antd'

const Navbar = (props) => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
          <Menu.Item key="users"><a href="/users">Users</a></Menu.Item>
          <Menu.Item key="articles"><a href="/articles">Articles</a></Menu.Item>
        </Menu>
    );
};

export default Navbar;