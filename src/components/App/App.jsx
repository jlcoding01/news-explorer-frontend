import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RigisterModal from "../RigisterModal/RigisterModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import MenuModal from "../MenuModal/MenuModal";
import { apiKey } from "../../utils/constants";
import { newsApi, processData } from "../../utils/newsApi";
import { getItems, saveItems, deleteNewsItem } from "../../utils/api.js";
import * as auth from "../../utils/auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import SavedNewsContext from "../../contexts/SavedNewsContext.js";
import ProtectedRoute from "../ProtectedRoute.jsx";
import "./App.css";

function App() {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [itemCount, setItemCount] = useState(3);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

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

  const handleSaveBtn = ({
    keyword,
    title,
    text,
    date,
    source,
    image,
    link,
  }) => {
    if (savedNews.some((news) => news.link === link)) {
      setSavedNews((prev) => prev.filter((news) => news.link !== link));
    } else {
      saveItems(
        keyword,
        title,
        text,
        date,
        source,
        image,
        link,

        token
      )
        .then((data) => {
          setSavedNews([data, ...savedNews]);
        })
        .catch(console.error);
    }
  };

  const handleDeleteBtn = (articleId) => {
    deleteNewsItem(articleId, token)
      .then(() => {
        const result = savedNews.filter((item) => item._id !== articleId);
        setSavedNews(result);
      })
      .catch(console.error);
  };

  const handleShowMoreBtn = () => {
    setItemCount((prev) => prev + 3);
  };

  const handleRegister = ({ email, password, name }) => {
    if (!email || !password || !name) {
      return;
    }

    return auth
      .register(email, password, name)
      .then(() => {
        handleModalClose();
        handleConfirmModalOpen();
        setCurrentUser({ email, name });
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setCurrentUser(res);
          setIsLoggedIn(true);
          handleModalClose();
          navigate("/");
        }
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  useEffect(() => {
    if (!token) return;

    auth
      .getCurrentUser(token)
      .then(({ name, email, _id }) => {
        setCurrentUser({ name, email, _id });
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, [token]);

  useEffect(() => {
    if (!token) return;

    getItems(token)
      .then((data) => {
        setSavedNews(data);
      })
      .catch(console.error);
  }, [currentUser]);

  useEffect(() => {
    if (keyword.trim() !== "" && keyword !== undefined) {
      newsApi(keyword, apiKey)
        .then((data) => {
          if (data.totalResults === 0) {
            setIsNotFound(true);
            setIsVisible(false);
          } else {
            const newsData = processData(data);
            const processedData = newsData.map((article) => ({
              ...article,
              keyword: keyword[0].toUpperCase() + keyword.slice(1),
            }));
            setNewsItems(processedData);
            setIsVisible(true);
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
    <CurrentUserContext.Provider value={currentUser}>
      <SavedNewsContext.Provider value={savedNews}>
        <div className="page">
          <div className="page__content">
            <Header
              handleLoginModalOpen={handleLoginModalOpen}
              handleMenuModalOpen={handleMenuModalOpen}
              isLoggedIn={isLoggedIn}
              handleLogOut={handleLogOut}
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
                    handleSaveBtn={handleSaveBtn}
                    handleShowMoreBtn={handleShowMoreBtn}
                  />
                }
              />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <SavedNews
                      savedNews={savedNews}
                      isLoggedIn={isLoggedIn}
                      handleDeleteBtn={handleDeleteBtn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />

            <LoginModal
              isOpen={activeModal === "login"}
              handleModalClose={handleModalClose}
              handleModalToggle={handleModalToggle}
              handleLogin={handleLogin}
            />
            <RigisterModal
              isOpen={activeModal === "rigister"}
              handleModalClose={handleModalClose}
              handleModalToggle={handleModalToggle}
              handleRegister={handleRegister}
            />
            <ConfirmationModal
              isOpen={activeModal === "rigister-confirmed"}
              handleModalToggle={handleModalToggle}
            />
            <MenuModal
              isOpen={activeModal === "menu"}
              handleModalClose={handleModalClose}
              handleLoginModalOpen={handleLoginModalOpen}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
      </SavedNewsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
