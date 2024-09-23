import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Search results</h2>
      <NewsCardList />
      <button className="main__btn">Show more</button>
    </div>
  );
}

export default Main;
