import React from 'react';
import { Layout, Menu } from 'antd'

const { Header } = Layout;

const SiteHeader = (props) => {

  if (authState.isAuthenticated) {
    return (
      <Header>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="articles">Articles</Menu.Item>
          <Menu.Item key="logout" onClick={() => {
            authService.logout()
          }}>Logout</Menu.Item>
        </Menu>
      </Header>
    );
};
};
export default SiteHeader;