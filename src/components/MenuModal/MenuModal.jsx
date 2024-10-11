import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import "./MenuModal.css";

function MenuModal({ isOpen, handleModalClose, handleLoginModalOpen }) {
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      handleModalClose();
    }
  }, [location]);

  const toggleMenuStyle = () => {
    switch (location.pathname) {
      case "/saved-news":
        return { backgroundColor: "#fff", color: "#000" };

      default:
        return { backgroundColor: "#000", color: "#fff" };
    }
  };

  return (
    <Modal isOpen={isOpen} type="menu" handleModalClose={handleModalClose}>
      <div className="modal__menu" style={toggleMenuStyle()}>
        <Header isHidden={isOpen} />
        <Navigation
          isOpen={isOpen}
          handleLoginModalOpen={handleLoginModalOpen}
        />
      </div>
    </Modal>
  );
}

export default MenuModal;
