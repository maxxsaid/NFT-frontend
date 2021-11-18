import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    image_url: "",
    external_link: "",
    description: "",
    traits: "",
    stats: "",
  });

  //handleChange function to sync input with state
  const handleChange = (event) => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
    setNewForm(newState);
  };
  // handleSubmit function for when form is submitted
  const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault();
    // pass the form data to createBookmarks function
    props.createBookmarks(newForm);
    // reset the form to empty
    setNewForm({
      name: "",
      image_url: "",
      external_link: "",
      description: "",
      traits: "",
      stats: "",
    });
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
        type="text"
        value={newForm.image_url}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.external_link}
        name="external link"
        placeholder="External Link"
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
        value={newForm.traits}
        name="traits"
        placeholder="Traits"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.stats}
        name="stats"
        placeholder="Stats"
        onChange={handleChange}
      />
      <input class="btn btn-success" type="submit" value="Add to your brag" />
    </form>
  );

  if (props.nfts) {
    return (
      <section>
        {form}
        {props.nfts.map((nft) => {
          return (
            <div key={nft._id} className="nft">
              <Link className="link-dark" to={`/nfts/${nft._id}`}>
                <h2>{nft.name}</h2>
                <img src={nft.name} alt="image url" />
                <a href={nft.external_link} target="_blank">
                  <h2>External Link</h2>
                </a>
                <p>{nft.description}</p>
                <p>{nft.traits}</p>
                <p>{nft.stats}</p>
              </Link>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }
};

export default Index;
