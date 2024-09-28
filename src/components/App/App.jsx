import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RigisterModal from "../RigisterModal/RigisterModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleModalClose = () => {
    setActiveModal("");
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

  const handelConfirmModalOpen = () => {
    setActiveModal("rigister-confirmed");
  };

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
        <Header handleLoginModalOpen={handleLoginModalOpen} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
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
      </div>
    </div>
  );
}

export default App;
