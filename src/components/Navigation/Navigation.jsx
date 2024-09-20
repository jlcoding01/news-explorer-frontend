import iconLogout from "../../assets/logout.svg";
import "./Navigation.css";

function Navigation({ isLoggedIn = true }) {
  return (
    <div className="navigation">
      <button className="navigation__btn-home" type="button">
        Home
      </button>
      <button
        className={`navigation__btn_hidden ${
          isLoggedIn === true && "navigation__btn-profile"
        }`}
      >
        Saved articles
      </button>
      <button
        className={`navigation__btn-loggin ${
          isLoggedIn === true && "navigation__btn_hidden"
        }`}
        type="button"
      >
        Sign in
      </button>
      <button
        className={`navigation__btn_hidden ${
          isLoggedIn === true && "navigation__btn-logout"
        }`}
        type="button"
      >
        Logout
        <img src={iconLogout} className="icon-logout"></img>
      </button>
    </div>
  );
}

export default Navigation;
