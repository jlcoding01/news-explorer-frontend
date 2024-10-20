import { Link } from "react-router-dom";

import iconFacebook from "../../assets/icon-facebook.svg";
import iconGithub from "../../assets/icon-github.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </div>
      <div className="footer__navibar">
        <div className="footer__navibar_btn">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="footer__navibar_btn-home" type="button">
              Home
            </button>
          </Link>
          <button className="footer__navibar_btn-org" type="button">
            TripleTen
          </button>
        </div>
        <div className="footer__navibar_icon">
          <a href="https://github.com/jlcoding01" target="_blank">
            <img
              src={iconGithub}
              alt="github icon"
              className="footer__navibar_icon-github"
            />
          </a>

          <img
            src={iconFacebook}
            alt="facebook icon"
            className="footer__navibar_icon-facebook"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
