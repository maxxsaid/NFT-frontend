import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="loginHome">
        <Link to="/signup">
          <button type="submit" className="btn btn-outline-primary">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button type="submit" className="btn btn-outline-primary">
            Log In
          </button>
        </Link>
      </div>
      <div className="enterbtn">
        <Link to="/assets">
          <button className="btn btn-success">
            Checkout Your NFT Wishlist
          </button>
        </Link>
      </div>
      <div className="carou">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1618913451/itpro/2021/04/shutterstock_sculpture_art.jpg"
                className="d-block w-100"
                alt="image1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://static.news.bitcoin.com/wp-content/uploads/2021/08/troop-of-bored-ape-nfts-rises-above-the-competition-nft-project-donates-200k-in-eth-to-orangutan-outreach.jpg"
                className="d-block w-100"
                alt="image2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.vox-cdn.com/thumbor/IyhdGiOSYO_g1vUvKZTpv_6F2kk=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22397464/VRG_ILLO_4489_003.jpg"
                className="d-block w-100"
                alt="image3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
