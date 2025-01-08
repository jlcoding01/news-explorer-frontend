import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  handleModalClose,
  handleModalToggle,
  handleLogin,
}) {
  const { values, handleValueChange, errors, isValid, resetForm } = useForm({});

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      naviText="Sign up"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
      isBtnDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <>
        <div className="form__element">
          <label htmlFor="email-login" className="form__element_label">
            Email
          </label>
          <input
            type="email"
            className="form__element_input"
            placeholder="Enter email"
            name="email"
            id="email-login"
            value={values["email"] || ""}
            onChange={handleValueChange}
            required
          />
          <span className="form__element_error-msg">
            {errors["email"] || ""}
          </span>
        </div>
        <div className="form__element">
          <label htmlFor="password-login" className="form__element_label">
            Password
          </label>
          <input
            type="text"
            className="form__element_input"
            placeholder="Enter password"
            name="password"
            id="password-login"
            value={values["password"] || ""}
            onChange={handleValueChange}
            required
          />
          <span className="form__element_error-msg">
            {errors["password"] || ""}
          </span>
        </div>
      </>
    </ModalWithForm>
  );
}

export default LoginModal;
