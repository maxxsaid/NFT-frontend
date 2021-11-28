// import React from "react";
// const Nfts = (props) => {
//   const [nfts, setNfts] = React.useState(null);

//   const getNfts = async () => {
//     const response = await fetch(props.URL);
//     const data = await response.json();
//     console.log(data);
//     setNfts(data);
//   };

//   React.useEffect(() => getNfts(), []);

//   const newNft = React.useRef(null);

//   const handleNew = async (event) => {
//     const response = await fetch(props.URL + "nft/", {
//       method: "post",
//       headers: {
//         Authorization: `Bearer ${props.tokens.access}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ item: newNft.current.value }),
//     });

//     getNfts();
//     newNft.current.value = "";
//   };

//   return (
//     <>
//       <h1>NFTs</h1>
//       <input type="text" name="newnft" ref={newNft} />
//       <button onClick={handleNew}>New NFT</button>
//       <ul>
//         {nfts && nfts.length > 0
  //        // ? nfts.map((nft) => <h1>{nft.item}</h1>)
//           : null}
//       </ul>
//     </>
//   );
// };

// export default Nfts;
