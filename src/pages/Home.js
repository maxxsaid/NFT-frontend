import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="login">
        <Link to="/user/signup">
          <button type="submit" className="btn btn-outline-dark">
            Signup
          </button>
        </Link>
        <Link to="/user/login">
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
              src="https://lh3.googleusercontent.com/MOTky0MclLJ9gCtij24Sjz0yfer_DTwly2WPL6hKEUgByd9V_tSiRw0bn8e5isnDaOCN5XHrXuSCuGymYZazrc2zYh5OZNr3oz-KaUniwHC5kLZ5PDh7wRYB8uH6OX646wldn0VA"
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
