import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AuditOutlined,
  UserOutlined,
  BookOutlined,
} from '@ant-design/icons';

const Sider = (props) => {

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
        <Menu.Item key="admin" icon={<AuditOutlined />}><Link to="/admin"><span>Admin</span></Link></Menu.Item>
        <Menu.Item key="users" icon={<UserOutlined />}><Link to="/users"><span>Users</span></Link></Menu.Item>
        <Menu.Item key="articles" icon={<BookOutlined />}><Link to="/articles"><span>Books</span></Link></Menu.Item>
    </Menu>
    );
};

export default Sider;