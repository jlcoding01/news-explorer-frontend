import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  newsItems,
  itemCount,
  isLoggedIn,
  isSaved,
  handleSaveBtn,
  handleDeleteBtn,
}) {
  return (
    <ul className="card__container">
      {newsItems.slice(0, itemCount).map((item) => (
        <NewsCard
          key={item._id}
          item={item}
          isLoggedIn={isLoggedIn}
          handleSaveBtn={handleSaveBtn}
          handleDeleteBtn={handleDeleteBtn}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
