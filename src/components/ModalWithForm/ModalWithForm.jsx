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
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container">
        <button
          className="modal__btn-close"
          type="button"
          onClick={handleModalClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form
          className={`modal__form ${
            isConfirmModal === "true" && "modal__form_hidden"
          }`}
        >
          <fieldset className="modal__fieldset">{children}</fieldset>
          <button className="modal__form_btn-submit" type="submit">
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
      </div>
    </div>
  );
}

export default ModalWithForm;
