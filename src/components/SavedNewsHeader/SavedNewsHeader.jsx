import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <div className="saved-news-header">
      <p className="saved-news-header__title">Saved articles</p>
      <h2 className="saved-news-header__summary">
        Elise, you have 5 saved articles
      </h2>
      <div className="saved-news-header__footer">
        By keywords:&nbsp;
        <span className="saved-news-header__footer_keywords">
          Nature, Yellowstone, and 2 other
        </span>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
