import notFound from "../../assets/not-found.svg";
import "./Preloader.css";

function Preloader({ isLoading, isNotFound, isError }) {
  const message = isError
    ? "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
    : "Sorry, but nothing matched your search terms.";
  return (
    <div
      className={`preloader ${(isLoading || isNotFound) && "preloader_active"}`}
    >
      <div
        className={`preloader__loading ${
          isLoading && "preloader__loading_active"
        }`}
      >
        <div className="circle-preloader"></div>
        <p className="preloader__loading_msg"> Search for news...</p>
      </div>
      <div
        className={`preloader__no-result ${
          isNotFound && "preloader__no-result_active"
        }`}
      >
        <img
          src={notFound}
          alt="not found"
          className="preloader__no-result_img"
        />
        <h2 className="preloader__no-result_title">Nothing found</h2>
        <p className="preloader__no-result_msg">{message}</p>
      </div>
    </div>
  );
}

export default Preloader;
