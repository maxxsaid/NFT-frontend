import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    address: String,
    token: String,
  });

  //handleChange function to sync input with state
  const handleChange = (event) => {
    // make a copy of state
    const newState = { ...newForm };
    // update the newState
    newState[event.target.name] = event.target.value;
    // update the state
    setNewForm(newState);
  };
  // handleSubmit function for when form is submitted
  const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault();
    // pass the form data to createPeople function
    props.createAsset(newForm);
    // reset the form to empty
    setNewForm({
      address: "",
      token: "",
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.address}
        name="address"
        placeholder="address"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.token}
        name="token"
        placeholder="token"
        onChange={handleChange}
      />
      <input type="submit" value="Add Asset" />
    </form>
  );

  if (props.assets) {
    return (
      <>
        {form}
        <div className="assets">
          {props.assets.map((asset) => {
            return (
              <div key={asset._id} className="asset">
                <Link to={`/${asset._id}`}>
                  <img src={asset.img} alt={asset.name} />
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
};

export default Index;
