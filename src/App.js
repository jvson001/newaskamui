import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { path } from "./Routes/Router";

function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;