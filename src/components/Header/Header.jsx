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
    location.pathname === "/saved-news" ? "header__saved-news" : "header__home";
  const headerMenuClass =
    location.pathname === "/saved-news"
      ? "header__btn_menu_saved-news"
      : "header__btn_menu_home";

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>
      <button
        className={`header__btn_menu ${headerMenuClass} ${
          isHidden && "header__btn_hidden"
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
