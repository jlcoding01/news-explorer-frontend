import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({ item, isLoggedIn, isSaved, handleSaveBtn, keyword }) {
  const location = useLocation();

  const cardBtnClassName =
    location.pathname === "/saved-news"
      ? "cardItem__btn-delete"
      : "cardItem__btn-save";

  const isHidden = location.pathname === "/saved-news" ? false : true;
  const saveBtnClass = isSaved
    ? "cardItem__btn-save_active"
    : "cardItem__btn-save";

  const cardLabelClassName =
    location.pathname === "/saved-news"
      ? "cardItem__label"
      : "cardItem__label_hidden";
  // console.log(item.id);

  return (
    <>
      <li className="cardItem">
        <img src={item.urlToImage} alt="news image" className="cardItem__img" />
        <div className={cardLabelClassName}>{keyword}</div>
        <button
          className={`cardItem__btn ${!isHidden && "cardItem__btn-delete"}`}
          type="button"
        ></button>
        <button
          className={`cardItem__btn ${isHidden && saveBtnClass}`}
          type="button"
          disabled={!isLoggedIn}
          onClick={handleSaveBtn}
        ></button>
        <div
          className={`cardItem__msg ${isLoggedIn && "cardItem__msg_hidden"}`}
        >
          Sign in to save articles
        </div>
        <div className="cardItem__content">
          <p className="cardItem__content_date">{item.publishedAt}</p>
          <p className="cardItem__content_headline">{item.title}</p>
          <p className="cardItem__content_brief">{item.description}</p>
          <p className="cardItem__content_src">{item.name}</p>
        </div>
      </li>
    </>
  );
}

export default NewsCard;
