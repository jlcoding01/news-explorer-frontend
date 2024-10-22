import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  title,
  buttonText,
  naviText,
  children,
  isConfirmModal,
  redirectText,
  handleModalClose,
  handleModalToggle,
  isBtnDisabled,
  onSubmit,
}) {
  return (
    <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
      <h2 className="modal__title">{title}</h2>
      <form
        className={`modal__form ${
          isConfirmModal === "true" && "modal__form_hidden"
        }`}
        onSubmit={onSubmit}
      >
        <fieldset className="modal__fieldset">{children}</fieldset>
        <button
          className="modal__form_btn-submit"
          type="submit"
          disabled={isBtnDisabled}
        >
          {buttonText}
        </button>
        <div className="modal__form_navi">
          or{" "}
          <span className="modal__form_navi-text" onClick={handleModalToggle}>
            {naviText}
          </span>
        </div>
      </form>
      <p className="modal__redirect" onClick={handleModalToggle}>
        {redirectText}
      </p>
    </Modal>
  );
}

export default ModalWithForm;
