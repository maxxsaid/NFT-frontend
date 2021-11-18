// import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import React from "react";
import Nfts from "./Nft";
import Login from "../pages/user/Login";

function Main(props) {
  const [token, setToken] = React.useState({});

  const URL = "https://nft-backennd.herokuapp.com/";

  const getToken = async (un, pw) => {
    const response = await fetch(URL + "api/token/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: un, password: pw }),
    });
    const data = await response.json();
    console.log(data);
    setToken(data);
    localStorage.setItem("token", JSON.stringify(data));
  };

  React.useEffect(() => {
    const possibleToken = JSON.parse(localStorage.getItem("token"));
    if (possibleToken) {
      setToken(possibleToken);
    }
  }, []);

  React.useEffect(() => {
    if (token.access) {
      props.history.push("/index");
    } else {
      props.history.push("/user/signup");
    }
  }, [token.access]);

  return (
    <div className="main">
      <h1>NFT App</h1>

      <Route
        exact
        path="/"
        render={(rp) => <Login getToken={getToken} {...rp} />}
      />

      <Route
        path="/index"
        render={(rp) => <Nfts tokens={token} URL={URL} {...rp} />}
      />
    </div>
  );
}

export default Main;
