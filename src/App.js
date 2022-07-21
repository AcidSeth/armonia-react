import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


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
