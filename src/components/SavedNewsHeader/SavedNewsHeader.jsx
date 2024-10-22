import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ newsCount, keywordList }) {
  const currentUser = useContext(CurrentUserContext);
  const keywordMsg =
    keywordList.length < 3
      ? `${keywordList.join(", ")}`
      : `${keywordList.slice(0, 2).join(", ")}, and ${
          keywordList.length - 2
        } other`;

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Saved articles</p>
      <h2 className="saved-news-header__summary">
        {currentUser.name}, you have {newsCount} saved articles
      </h2>
      <div className="saved-news-header__footer">
        By keywords:&nbsp;
        <span className="saved-news-header__footer_keywords">{keywordMsg}</span>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
