import "./App.css";
import React from "react";
import { Button } from "antd";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Users />
      </main>
    </div>
  );
};

export default App;
