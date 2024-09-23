import notFound from "../../assets/not-found.svg";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__loading">
        <div className="circle-preloader"></div>
        <p className="preloader__loading_msg"> Search for news...</p>
      </div>
      <div className="preloader__no-result">
        <img
          src={notFound}
          alt="not found"
          className="preloader__no-result_img"
        />
        <h2 className="preloader__no-result_title">Nothing found</h2>
        <p className="preloader__no-result_msg">
          Sorry, but nothing matched <br />
          your search terms.
        </p>
      </div>
    </div>
  );
}

export default Preloader;
