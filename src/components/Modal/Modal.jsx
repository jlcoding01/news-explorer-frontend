import "./Modal.css";

function Modal({ isOpen, type, children, handleModalClose, path }) {
  return (
    <div className={`modal modal__type_${type} ${isOpen && "modal_opened"}`}>
      <div className={`modal__container modal__container_type_${type}`}>
        {children}
        <button
          className={`modal__btn-close modal__btn-close_type_${type} modal__btn_type_${type}_${path}`}
          type="button"
          onClick={handleModalClose}
        ></button>
      </div>
    </div>
  );
}

export default Modal;
