import "./Modal.css";

function Modal({ isOpen, type, children, handleModalClose, path }) {
  return (
    <div className={`modal modal_${type} ${isOpen && "modal_opened"}`}>
      <div className={`modal__container modal__container_${type}`}>
        {children}
        <button
          className={`modal__btn-close ${type}__btn-close ${type}__btn-close_${path}`}
          type="button"
          onClick={handleModalClose}
        ></button>
      </div>
    </div>
  );
}

export default Modal;
