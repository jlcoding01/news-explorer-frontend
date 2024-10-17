import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ newsItems, itemCount, isLoggedIn, keyword }) {
  return (
    <div className="sevednews">
      <SavedNewsHeader />
      <div className="savednews__result">
        <NewsCardList
          newsItems={newsItems}
          itemCount={itemCount}
          isLoggedIn={isLoggedIn}
          keyword={keyword}
        />
      </div>
    </div>
  );
}

export default SavedNews;
