import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function RigisterModal({ isOpen, handleModalClose, handleModalToggle }) {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      naviText="Sign in"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleModalToggle={handleModalToggle}
    >
      <FormElement name="Email" type="signup"></FormElement>
      <FormElement name="Password" type="signup"></FormElement>
      <FormElement name="Username" type="signup"></FormElement>
    </ModalWithForm>
  );
}

export default RigisterModal;
