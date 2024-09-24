import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews() {
  return (
    <div className="sevednews">
      <SavedNewsHeader />
      <div className="savednews__result">
        <NewsCardList />
      </div>
    </div>
  );
}

export default SavedNews;
