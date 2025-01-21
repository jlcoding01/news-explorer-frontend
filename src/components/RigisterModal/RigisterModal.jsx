import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RigisterModal({
  isOpen,
  handleModalClose,
  handleModalToggle,
  handleRegister,
}) {
  const { values, handleValueChange, errors, isValid, resetForm } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      naviText="Sign in"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
      isBtnDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <div className="form__element">
        <label htmlFor="email-register" className="form__element_label">
          Email
        </label>
        <input
          type="email"
          className="form__element_input"
          placeholder="Enter email"
          name="email"
          id="email-register"
          value={values["email"] || ""}
          onChange={handleValueChange}
          required
        />
        <span className="form__element_error-msg">{errors["email"] || ""}</span>
      </div>
      <div className="form__element">
        <label htmlFor="password-register" className="form__element_label">
          Password
        </label>
        <input
          type="text"
          className="form__element_input"
          placeholder="Enter password"
          name="password"
          id="password-register"
          value={values["password"] || ""}
          onChange={handleValueChange}
          required
        />
        <span className="form__element_error-msg">
          {errors["password"] || ""}
        </span>
      </div>
      <div className="form__element">
        <label htmlFor="username-register" className="form__element_label">
          Username
        </label>
        <input
          type="text"
          className="form__element_input"
          placeholder="Enter your username"
          name="name"
          id="username-register"
          value={values["name"] || ""}
          onChange={handleValueChange}
          required
        />
        <span className="form__element_error-msg">{errors["name"] || ""}</span>
      </div>
    </ModalWithForm>
  );
}

export default RigisterModal;
