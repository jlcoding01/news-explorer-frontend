import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <SearchForm />
      <Preloader />
      <div className="search__result">
        <h2 className="search__result_title">Search results</h2>
        <NewsCardList />
        <button className="search__result_btn">Show more</button>
      </div>
      <About />
    </div>
  );
}

export default Main;
