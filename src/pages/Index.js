import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    name: String,
    sales: Number,
    img: String,
    site: String,
    slug: String,
    description: String,
    date_created: String,
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
    props.createPeople(newForm);
    // reset the form to empty
    setNewForm({
      name: "",
      sales: "",
      img: "",
      site: "",
      slug: "",
      description: "",
      date_created: "",
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.sales}
        name="sales"
        placeholder="sales"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.img}
        name="img"
        placeholder="img"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.site}
        name="site"
        placeholder="site"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.slug}
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.description}
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <input type="submit" value="Create Asset" />
    </form>
  );

  if (props.assets) {
    return (
      <section>
        {form}
        {props.assets.map((asset) => {
          return (
            <div key={asset._id} className="asset">
              <Link to={`/${asset._id}`}>
                <h1>{asset.name}</h1>
              </Link>
              <img src={asset.image} alt={asset.name} />
              <h3>{asset.title}</h3>
            </div>
          );
        })}
      </section>
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
