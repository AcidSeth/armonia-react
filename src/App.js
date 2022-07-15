import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Users from "./components/Users";
import Articles from "./components/Articles";
import Admin from "./components/Admin";

// let routes = (

// );

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Sider />
      </Layout>
      <Outlet />
    </div>
  );
};

export default App;
