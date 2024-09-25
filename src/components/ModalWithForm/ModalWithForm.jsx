// import { Children } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  naviText,
  children,
  isConfirmModal,
  redirectText,
}) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__btn-close" type="button"></button>
        <h2 className="modal__title">{title}</h2>
        <form
          action=""
          className={`modal__form ${
            isConfirmModal === "true" && "modal__form_hidden"
          }`}
        >
          <fieldset className="modal__fieldset">{children}</fieldset>
          <button className="modal__form_btn-submit" type="submit">
            {buttonText}
          </button>
          <div className="modal__form_navi">
            or <span className="modal__form_navi-text">{naviText}</span>
          </div>
        </form>
        <p className="modal__redirect">{redirectText}</p>
      </div>
    </div>
  );
}

export default ModalWithForm;
