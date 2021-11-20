import "./styles.scss";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
