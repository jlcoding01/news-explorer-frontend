import { useLocation, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLogging }) {
  const location = useLocation();
  const headerClass =
    location.pathname === "/saved-news" ? "header_saved-news" : "header_home";

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
