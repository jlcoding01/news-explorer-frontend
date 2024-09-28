import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function LoginModal({ isOpen, handleModalClose, handleModalToggle }) {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      naviText="Sign up"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
    >
      <FormElement name="Email" type="signin"></FormElement>
      <FormElement name="Password" type="signin"></FormElement>
    </ModalWithForm>
  );
}

export default LoginModal;
