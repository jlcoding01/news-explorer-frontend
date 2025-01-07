import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function LoginModal({
  isOpen,
  handleModalClose,
  handleModalToggle,
  handleLogin,
}) {
  const { values, handleValueChange, errors, isValid, resetForm } = useForm({});
  // const [isEmailValid, setIsEmailValid] = useState(false);

  // const [isPasswordValid, setIsPasswordValid] = useState(false);

  // const handleEmailValidity = (isValid) => {
  //   setIsEmailValid(isValid);
  // };

  // const handlePasswordValidity = (isValid) => {
  //   setIsPasswordValid(isValid);
  // };

  // const isFormValid = isEmailValid && isPasswordValid;

  // const handleReset = () => {
  //   setValues({});
  // };

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
      {/* <FormElement
        name="email"
        type="email"
        isOpen={isOpen}
        onFormValidity={handleEmailValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="password"
        type="text"
        isOpen={isOpen}
        onFormValidity={handlePasswordValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement> */}
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
        </div>
      </>
    </ModalWithForm>
  );
}

export default LoginModal;
