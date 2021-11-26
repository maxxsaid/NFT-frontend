import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import "./styles/style.css";
const Main = (props) => {
  // State to hold our list of people
  const [assets, setAsset] = useState(null);
  const URL = "https://nft-backennd.herokuapp.com/assets";
  // function to get updated list of people
  const getAssets = async () => {
    // make the api call
    const response = await fetch(URL);
    // turn the response in an object
    const data = await response.json();
    // set the state to the api data
    setAsset(data);
  };
  // function that will later be passed data from our new/create form and make the post request to create a new person
  const createAsset = async (person) => {
    // make the post request to our API
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // get updated list of people
    getAssets();
  };

  // function to update a person
  const updateAsset = async (person, id) => {
    // make the put request
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // update the list of people
    getAssets();
  };

  // create function to delete a person
  const deleteAsset = async (id) => {
    // make the delete request
    await fetch(URL + id, {
      method: "delete",
    });
    // update the list of people
    getAssets();
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <main>
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
      </Routes>
    </main>
  );
};

export default Main;
