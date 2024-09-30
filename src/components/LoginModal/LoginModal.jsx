import { useEffect } from "react";
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

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      naviText="Sign up"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
    >
      <FormElement
        name="Email"
        type="signin"
        isOpen={isOpen}
        // values={values}
        // handleValueChange={handleValueChange}
      ></FormElement>
      <FormElement
        name="Password"
        type="signin"
        isOpen={isOpen}
        // values={values}
        // handleValueChange={handleValueChange}
      ></FormElement>
    </ModalWithForm>
  );
}

export default LoginModal;
