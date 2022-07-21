import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AuditOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Navbar = (props) => {
  return (
    <Menu
      mode="vertical"
      style={{
        position: "fixed",
        height: "100%",
        borderRight: 0,
      }}
      className="navbar"
      theme="dark"
      defaultSelectedKeys={[props.selectedKey]}
    >
      <Menu.Item key="admin" icon={<AuditOutlined />}>
        <Link to="/admin">
          <span>Admin</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="users" icon={<UserOutlined />}>
        <Link to="/users">
          <span>Users</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="articles" icon={<BookOutlined />}>
        <Link to="/articles">
          <span>Books</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
