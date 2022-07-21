import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Articles from "./components/Articles";
import Admin from "./components/Admin";

// let routes = (

// );

const App = () => {
  return (
    <div className="App">
        <Header />
      <Layout>
        <Navbar />
      </Layout>
      <Outlet />
    </div>
  );
};

export default App;
