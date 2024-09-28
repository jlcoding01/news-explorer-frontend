import { useLocation, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLogging, handleLoginModalOpen }) {
  const location = useLocation();
  const headerClass =
    location.pathname === "/saved-news" ? "header_saved-news" : "header_home";

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>

      <Navigation handleLoginModalOpen={handleLoginModalOpen} />
    </header>
  );
}

export default Header;
