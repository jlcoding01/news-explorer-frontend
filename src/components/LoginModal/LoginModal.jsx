import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function LoginModal({ isOpen, handleModalClose, handleModalToggle }) {
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailValidity = (isValid) => {
    setIsEmailValid(isValid);
  };

  const handlePasswordValidity = (isValid) => {
    setIsPasswordValid(isValid);
  };

  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      naviText="Sign up"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
      isBtnDisabled={!isFormValid}
    >
      <FormElement
        name="Email"
        type="signin"
        isOpen={isOpen}
        onFormValidity={handleEmailValidity}
      ></FormElement>
      <FormElement
        name="Password"
        type="signin"
        isOpen={isOpen}
        onFormValidity={handlePasswordValidity}
      ></FormElement>
    </ModalWithForm>
  );
}

export default LoginModal;
