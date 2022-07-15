import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Articles from "./components/Articles";
import Admin from "./components/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="admin" element={<Admin />} />
        <Route path="users" element={<Users />} />
        <Route path="articles" element={<Articles />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p style={{ fontSize: "35px" }}>Nulla da vedere qui...</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
