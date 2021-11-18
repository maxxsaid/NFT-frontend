import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Nfts = (props) => {
  const [nfts, setNfts] = useState(null);
  const URL = "";

  const getNfts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNfts(data);
  };
  const createNfts = async (nft) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nft),
    });
    getNfts();
  };
  const updateNfts = async (nft, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nft),
    });
    getNfts();
  };
  const deleteNfts = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getNfts();
  };

  useEffect(() => {
    getNfts();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home nfts={nfts} />} />
        <Route
          path="/{username}"
          element={<Index nfts={nfts} createNfts={createNfts} />}
        />
        <Route
          path="/{username}/:id"
          element={
            <Show nfts={nfts} updateNfts={updateNfts} deleteNfts={deleteNfts} />
          }
        />
      </Routes>
    </main>
  );
};

export default Nfts;
