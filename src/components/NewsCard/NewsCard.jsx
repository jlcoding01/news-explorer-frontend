import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({ item, isLoggedIn, handleSaveBtn, handleDeleteBtn }) {
  const location = useLocation();

  // const { isSaved, _id } = item;
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    if (isSaved) {
      handleDeleteBtn(item._id);
    } else {
      handleSaveBtn(item);
    }
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    setIsSaved(item.isSaved || false);
  }, [item]);

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

  return (
    <>
      <li className="cardItem" key={item._id}>
        <img src={item.image} alt="news image" className="cardItem__img" />
        <div className={cardLabelClassName}>{item.keyword}</div>
        <button
          className={`cardItem__btn ${!isHidden && "cardItem__btn-delete"}`}
          type="button"
          onClick={() => {
            handleDeleteBtn(item._id);
          }}
        ></button>
        <button
          className={`cardItem__btn ${isHidden && saveBtnClass}`}
          type="button"
          disabled={!isLoggedIn}
          onClick={toggleSave}
        ></button>
        <div
          className={`cardItem__msg ${isLoggedIn && "cardItem__msg_hidden"}`}
        >
          Sign in to save articles
        </div>
        <div className="cardItem__content">
          <p className="cardItem__content_date">{item.date}</p>
          <p className="cardItem__content_headline">{item.title}</p>
          <p className="cardItem__content_brief">{item.text}</p>
          <p className="cardItem__content_src">{item.source}</p>
        </div>
      </li>
    </>
  );
}

export default NewsCard;
