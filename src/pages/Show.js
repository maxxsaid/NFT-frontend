import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate();
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab nfts from props
  const nfts = props.nfts;
  // create state for form
  const [editForm, setEditForm] = useState({});
  // useEffect to set state to the existing nft, when the data is available
  useEffect(() => {
    if (props.nfts) {
      const nft = nfts.find((p) => p._id === id);
      setEditForm(nft);
    }
  }, [props.nft]);

  if (props.nft) {
    // grab the target site from the bookmarks array
    const nft = nfts.find((p) => p._id === id);

    // handleChange function for form
    const handleChange = (event) => {
      // create a copy of the state
      const newState = { ...editForm };
      // update the newState
      newState[event.target.name] = event.target.value;
      // update the state
      setEditForm(newState);
    };

    // handleSubmit for form
    const handleSubmit = (event) => {
      // prevent the refresh
      event.preventDefault();
      // pass the form data to updateNfts
      props.updateNfts(editForm, bookmark._id);
      // redirect bookmarks back to index
      navigate("/");
    };
    const removeNfts = () => {
      props.deleteNfts(nft._id);
      navigate("/");
    };
    const form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.sales}
          name="sales"
          placeholder="Sales"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.img}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.site}
          name="site"
          placeholder="External Link"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.slug}
          name="slug"
          placeholder="Slug"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.date_created}
          name="date_created"
          placeholder="Date Created"
          onChange={handleChange}
        />
        <input class="btn btn-warning" type="submit" value="Update brag" />
      </form>
    );

    return (
      <div className="site">
        <h2>{nft.name}</h2>
        <img src={nft.img} alt="image url" />
        <a href={nft.site} target="_blank">
          <h2>External Link</h2>
        </a>
        <p>{nft.slug}</p>
        <p>{nft.description}</p>
        <p>{nft.date_created}</p>
        {form}
        <button class="btn btn-danger" onClick={removeNft}>
          DELETE NFT
        </button>
      </div>
    );
  } else {
    return <h1>No NFTs</h1>;
  }
};

export default Show;
