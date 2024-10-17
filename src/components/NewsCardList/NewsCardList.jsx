import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  newsItems,
  itemCount,
  isLoggedIn,
  isSaved,
  handleSaveBtn,
  keyword,
}) {
  return (
    <ul className="card__container">
      {newsItems.slice(0, itemCount).map((item, index) => (
        <NewsCard
          key={`${item.title}-${index}`}
          item={item}
          isLoggedIn={isLoggedIn}
          isSaved={isSaved}
          handleSaveBtn={handleSaveBtn}
          keyword={keyword}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
