import "./styles.scss";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import { useState, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";

export const GlobalCtx = createContext(null);
function App() {
  const [gState, setGstate] = useState({ url: "https://localhost:3000" });
  return (
    <GlobalCtx.Provider value={{ gState, setGstate }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
