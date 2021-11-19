import { Link } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";

function Home() {
  return (
    <div className="home">
      <div className="loginHome">
        <Link to="/signup">
          <button type="submit" className="btn btn-outline-dark">
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button type="submit" className="btn btn-outline-dark">
            Login
          </button>
        </Link>
      </div>
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
              src="https://cdn.statically.io/img/i.pinimg.com/originals/0b/2c/0b/0b2c0b5a6d44960b3c1a40a929c8160f.png"
              className="d-block w-100"
              alt="image1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.inkedmag.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc2OTM1MzAwMTIyMDI3Mzc2/beeple-fb.jpg"
              className="d-block w-100"
              alt="image2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapershome.com/images/pages/pic_h/18557.jpg"
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
  );
}

export default Home;
