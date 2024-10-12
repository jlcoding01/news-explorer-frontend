import { useLocation, Link } from "react-router-dom";
import iconWhite from "../../assets/logout-white.svg";
import iconBlack from "../../assets/logout-black.svg";
import "./Navigation.css";

function Navigation({ isLoggedIn = true, handleLoginModalOpen, isOpen }) {
  const location = useLocation();
  const btnClass =
    location.pathname === "/saved-news" && "navigation__btn_saved-news";
  const iconLogout =
    location.pathname === "/saved-news" ? iconBlack : iconWhite;
  const homeBtnHighlight =
    location.pathname === "/" && "navigation__btn-home_highlight";
  const profileBtnHighlight =
    location.pathname === "/saved-news" && "navigation__btn-profile_highlight";

  return (
    <div className={`navigation ${isOpen && "navigation__menu"}`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <button
          className={`navigation__btn-home ${homeBtnHighlight}`}
          type="button"
        >
          Home
        </button>
      </Link>

      <Link
        to="/saved-news"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <button
          className={`navigation__btn_hidden ${
            isLoggedIn === true && "navigation__btn-profile"
          } ${profileBtnHighlight}`}
        >
          Saved articles
        </button>
      </Link>

      <button
        className={`navigation__btn-loggin ${
          isLoggedIn === true && "navigation__btn_hidden"
        } ${btnClass}`}
        type="button"
        onClick={handleLoginModalOpen}
      >
        Sign in
      </button>
      <button
        className={`navigation__btn_hidden ${
          isLoggedIn === true && "navigation__btn-logout"
        } ${btnClass}`}
        type="button"
      >
        Logout
        <img src={iconLogout} className="icon-logout"></img>
      </button>
    </div>
  );
}

export default Navigation;
