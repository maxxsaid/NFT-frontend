import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [NFTs, setNFTs] = useState(null);

  const URL = "http://localhost:4000/people/";

  const getNFTs = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPeople(data);
  };

  const createNFTs = async (NFT) => {
    // make post request to create nft
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NFT),
    });
    // update list of nfts
    getNFTs();
  };

  useEffect(() => getNFTs(), []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index NFTs={NFTs} createNFTs={createNFTs} />}
        />
        <Route path="/nfts/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Main;
