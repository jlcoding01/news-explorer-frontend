import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, handleDeleteBtn, savedNews }) {
  const newsCount = savedNews.length;
  const keywordList = Array.from(
    new Set(savedNews.map((item) => item.keyword))
  );

  return (
    <div className="sevednews">
      <SavedNewsHeader newsCount={newsCount} keywordList={keywordList} />
      <div className="savednews__result">
        <NewsCardList
          newsItems={savedNews}
          itemCount={newsCount}
          isLoggedIn={isLoggedIn}
          handleDeleteBtn={handleDeleteBtn}
        />
      </div>
    </div>
  );
}

export default SavedNews;
