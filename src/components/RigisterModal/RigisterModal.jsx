import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function RigisterModal({ isOpen, handleModalClose, handleModalToggle }) {
  const { values, handleValueChange, errors, isValid, resetForm } = useForm({});

  // const [isEmailValid, setIsEmailValid] = useState(false);

  // const [isPasswordValid, setIsPasswordValid] = useState(false);

  // const [isUernameValid, setIsUsernameValid] = useState(false);

  // const handleEmailValidity = (isValid) => {
  //   setIsEmailValid(isValid);
  // };

  // const handlePasswordValidity = (isValid) => {
  //   setIsPasswordValid(isValid);
  // };

  // const handleUserNameValidity = (isValid) => {
  //   setIsUsernameValid(isValid);
  // };
  // const isFormValid = isEmailValid && isPasswordValid && isUernameValid;

  // const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   if (values.email && values.username && values.password) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // }, [values]);

  // const handleReset = () => {
  //   setValues({});
  // };

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
    >
      {/* <FormElement
        name="email"
        type="email"
        onFormValidity={handleEmailValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="password"
        type="text"
        onFormValidity={handlePasswordValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="username"
        type="text"
        onFormValidity={handleUserNameValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement> */}

      <>
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
        </div>
        <div className="form__element">
          <label htmlFor="username-register" className="form__element_label">
            Username
          </label>
          <input
            type="text"
            className="form__element_input"
            placeholder="Enter your username"
            name="username"
            id="username-register"
            value={values["username"] || ""}
            onChange={handleValueChange}
            required
          />
        </div>
      </>
    </ModalWithForm>
  );
}

export default RigisterModal;
