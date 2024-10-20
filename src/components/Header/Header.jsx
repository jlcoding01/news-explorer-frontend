import { useLocation, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  isLoggedIn,
  handleLoginModalOpen,
  handleMenuModalOpen,
  isHidden,

  handleLogOut,
}) {
  const location = useLocation();
  const headerClass =
    location.pathname === "/saved-news" ? "header_saved-news" : "header_home";
  const headerMenuClass =
    location.pathname === "/saved-news"
      ? "header_saved__btn-menu"
      : "header_home__btn-menu";

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>
      <button
        className={`header__btn-menu ${headerMenuClass} ${
          isHidden && "btn-menu_hidden"
        }`}
        type="button"
        onClick={handleMenuModalOpen}
      ></button>
      <Navigation
        handleLoginModalOpen={handleLoginModalOpen}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
    </header>
  );
}

export default Header;
