import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({
  handleSearchBtn,
  newsItems,
  itemCount,
  setItemCount,
  isVisible,
  isLoading,
  isNotFound,
  isLoggedIn,
  isError,
  handleSaveBtn,
  handleShowMoreBtn,
}) {
  // const [itemCount, setItemCount] = useState(3);
  const [isHidden, setIsHidden] = useState(false);

  // const handleShowMoreBtn = () => {
  //   setItemCount((prev) => prev + 3);
  // };

  useEffect(() => {
    if (itemCount > newsItems.length && itemCount !== 3) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [itemCount]);

  return (
    <div className="main">
      <SearchForm
        handleSearchBtn={handleSearchBtn}
        setItemCount={setItemCount}
      />
      <Preloader
        isLoading={isLoading}
        isNotFound={isNotFound}
        isError={isError}
      />
      <div className={`search__result ${isVisible && "search__result_active"}`}>
        <h2 className="search__result_title">Search results</h2>
        <NewsCardList
          newsItems={newsItems}
          itemCount={itemCount}
          isLoggedIn={isLoggedIn}
          handleSaveBtn={handleSaveBtn}
        />
        <button
          className={`search__result_btn ${
            isHidden && "search__result_btn-hidden"
          }`}
          type="button"
          onClick={handleShowMoreBtn}
        >
          Show more
        </button>
      </div>
      <About />
    </div>
  );
}

export default Main;
