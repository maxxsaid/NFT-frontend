import "./styles.scss";
import "./components/styles/style.css";
import React from "react";
import Header from "./components/Header";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // State to hold our list of people
  const [assets, setAsset] = useState(null);
  const URL = "https://nft-backennd.herokuapp.com/";
  // function to get updated list of people
  const getAssets = async () => {
    // make the api call
    const response = await fetch(URL);
    // turn the response in an object
    console.log(response);
    const data = await response.json();
    // set the state to the api data
    setAsset(data);
  };
  // function that will later be passed data from our new/create form and make the post request to create a new person
  const createAsset = async (data) => {
    // make the post request to our API
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // get updated list of people
    getAssets();
  };

  // function to update a person
  const updateAsset = async (asset, id) => {
    // make the put request
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(asset),
    });
    // update the list
    getAssets();
  };

  // create function to delete
  const deleteAsset = async (id) => {
    // make the delete request
    await fetch(URL + id, {
      method: "delete",
    });
    // update the list
    getAssets();
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Index assets={assets} createAsset={createAsset} />}
        />
        <Route
          path="/:id"
          element={
            <Show
              assets={assets}
              updateAsset={updateAsset}
              deleteAsset={deleteAsset}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
