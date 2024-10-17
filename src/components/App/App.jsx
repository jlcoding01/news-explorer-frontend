import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RigisterModal from "../RigisterModal/RigisterModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import MenuModal from "../MenuModal/MenuModal";
import { apiKey } from "../../utils/constants";
import { newsApi, processData } from "../../utils/NewsApi";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [itemCount, setItemCount] = useState(3);

  const handleModalClose = () => {
    setActiveModal("");
    document.body.style.overflow = "";
  };

  const handleLoginModalOpen = () => {
    setActiveModal("login");
  };

  const handleRigisterModalOpen = () => {
    setActiveModal("rigister");
  };

  const handleModalToggle = () => {
    activeModal === "login"
      ? handleRigisterModalOpen()
      : handleLoginModalOpen();
  };

  const handleConfirmModalOpen = () => {
    setActiveModal("rigister-confirmed");
  };

  const handleMenuModalOpen = () => {
    setActiveModal("menu");
    document.body.style.overflow = "hidden";
  };

  const handleSearchBtn = (keyword) => {
    setKeyword(keyword);
    setIsLoading(true);
    setIsNotFound(false);
    setIsError(false);
  };

  const handleSaveBtn = () => {
    setIsSaved(!isSaved);
  };

  const handleShowMoreBtn = () => {
    setItemCount((prev) => prev + 3);
  };

  useEffect(() => {
    if (keyword.trim() !== "" && keyword !== undefined) {
      newsApi(keyword, apiKey)
        .then((data) => {
          if (data.totalResults === 0) {
            setIsNotFound(true);
            setIsVisible(false);
          } else {
            const newsData = processData(data);
            setNewsItems(newsData);
            setIsVisible(true);
            console.log(newsData);
          }
        })
        .catch(() => {
          console.error;
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [keyword]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleModalClose();
      }
    };

    const handleClickClose = (evt) => {
      if (
        evt.target !== evt.currentTarget &&
        evt.target.classList.contains("modal_opened")
      ) {
        handleModalClose();
      }
    };

    document.addEventListener("mousedown", handleClickClose);
    window.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("mousedown", handleClickClose);
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleLoginModalOpen={handleLoginModalOpen}
          handleMenuModalOpen={handleMenuModalOpen}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSearchBtn={handleSearchBtn}
                newsItems={newsItems}
                itemCount={itemCount}
                setItemCount={setItemCount}
                isVisible={isVisible}
                isLoading={isLoading}
                isNotFound={isNotFound}
                isLoggedIn={isLoggedIn}
                isError={isError}
                isSaved={isSaved}
                handleSaveBtn={handleSaveBtn}
                handleShowMoreBtn={handleShowMoreBtn}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                newsItems={newsItems}
                itemCount={itemCount}
                isLoggedIn={isLoggedIn}
                keyword={keyword}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />

        <LoginModal
          isOpen={activeModal === "login"}
          handleModalClose={handleModalClose}
          handleModalToggle={handleModalToggle}
        />
        <RigisterModal
          isOpen={activeModal === "rigister"}
          handleModalClose={handleModalClose}
          handleModalToggle={handleModalToggle}
        />
        <ConfirmationModal
          isOpen={activeModal === "rigister-confirmed"}
          handleModalToggle={handleModalToggle}
        />
        <MenuModal
          isOpen={activeModal === "menu"}
          handleModalClose={handleModalClose}
          handleLoginModalOpen={handleLoginModalOpen}
        />
      </div>
    </div>
  );
}

export default App;
