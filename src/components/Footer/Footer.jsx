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
          <button className="footer__navibar_btn-home" type="button">
            Home
          </button>
          <button className="footer__navibar_btn-org" type="button">
            TripleTen
          </button>
        </div>
        <div className="footer__navibar_icon">
          <img
            src={iconGithub}
            alt="github icon"
            className="footer__navibar_icon-github"
          />
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
