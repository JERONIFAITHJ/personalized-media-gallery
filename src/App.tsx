import React from "react";
import "./App.css";
import Sort from "../components/Sort";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <header>My app</header>
      <Outlet />
    </div>
  );
}

export default App;
