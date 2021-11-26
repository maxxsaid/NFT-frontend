import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate();
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // create state for form
  const [editForm, setEditForm] = useState({
    name: String,
    sales: Number,
    img: String,
    site: String,
    slug: String,
    description: String,
    date_created: String,
  });
  // useEffect to set state to the existing nft, when the data is available
  useEffect(() => {
    if (props.assets) {
      const asset = props.assets.find((p) => p._id === id);
      setEditForm(asset);
    }
  }, [props.assets, id]);

  if (props.assets) {
    // grab the target site from the bookmarks array
    const asset = props.assets.find((p) => p._id === id);

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
      props.updateAsset(editForm, asset._id);
      // redirect bookmarks back to index
      navigate("/");
    };

    const form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.sales}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.site}
          name="site"
          placeholder="site"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.img}
          name="img"
          placeholder="img"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.slug}
          name="slug"
          placeholder="slug"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.date_created}
          name="date_created"
          placeholder="date_created"
          onChange={handleChange}
        />
        <input class="btn btn-warning" type="submit" value="Update brag" />
      </form>
    );

    return (
      <div className="site">
        <h2>{asset.name}</h2>
        <img src={asset.img} alt="url" />
        <a href={asset.sales} target="blank">
          <h2>Link to Site</h2>
        </a>
        <p>{asset.slug}</p>
        <p>{asset.description}</p>
        <p>{asset.date_created}</p>
        {form}
        <button class="btn btn-danger" onClick={props.deleteAsset}>
          DELETE NFT
        </button>
      </div>
    );
  } else {
    return <h1>No NFTs</h1>;
  }
};

export default Show;
