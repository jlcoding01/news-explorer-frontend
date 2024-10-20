import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function RigisterModal({ isOpen, handleModalClose, handleModalToggle }) {
  const { values, setValues, handleValueChange } = useForm({});

  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isUernameValid, setIsUsernameValid] = useState(false);

  const handleEmailValidity = (isValid) => {
    setIsEmailValid(isValid);
  };

  const handlePasswordValidity = (isValid) => {
    setIsPasswordValid(isValid);
  };

  const handleUserNameValidity = (isValid) => {
    setIsUsernameValid(isValid);
  };
  const isFormValid = isEmailValid && isPasswordValid && isUernameValid;

  const handleReset = () => {
    setValues({});
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      naviText="Sign in"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
      isBtnDisabled={!isFormValid}
    >
      <FormElement
        name="Email"
        type="signup"
        onFormValidity={handleEmailValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="Password"
        type="signup"
        onFormValidity={handlePasswordValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="Username"
        type="signup"
        onFormValidity={handleUserNameValidity}
        values={values}
        handleValueChange={handleValueChange}
      ></FormElement>
    </ModalWithForm>
  );
}

export default RigisterModal;
