import { useContext } from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNews.css";

function SavedNews({ isLoggedIn, handleDeleteBtn, savedNews }) {
  const currentUser = useContext(CurrentUserContext);
  const newsCount = savedNews.length;
  const keywordList = Array.from(
    new Set(savedNews.map((item) => item.keyword))
  );

  savedNews.forEach((item) => console.log(item._id));
  // console.log(currentUser._id);
  console.log(savedNews);
  // const savedNewsByOwner = savedNews.filter(
  //   (item) => item.owner === currentUser._id
  // );
  // console.log(savedNewsByOwner);

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
