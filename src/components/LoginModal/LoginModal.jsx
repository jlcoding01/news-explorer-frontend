import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function LoginModal({ isOpen, handleModalClose, handleModalToggle }) {
  // const { values, setValues, handleValueChange } = useForm({});

  // const handleReset = () => {
  //   setValues({});
  // };

  // useEffect(() => {
  //   handleReset();
  // }, [isOpen]);

  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailValidity = (isValid) => {
    setIsEmailValid(isValid);
  };

  const handlePasswordValidity = (isValid) => {
    setIsPasswordValid(isValid);
  };

  const isFormValid = isEmailValid && isPasswordValid;
  console.log(isFormValid);

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
        // values={values}
        // handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="Password"
        type="signin"
        isOpen={isOpen}
        onFormValidity={handlePasswordValidity}
        // values={values}
        // handleValueChange={handleValueChange}
      ></FormElement>
    </ModalWithForm>
  );
}

export default LoginModal;
