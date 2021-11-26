import "./styles.scss";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
