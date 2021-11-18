import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">brag</h1>
      </Link>
    </nav>
  );
}

export default Header;
