import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function RigisterModal() {
  return (
    <ModalWithForm title="Sign up" buttonText="Sign up" naviText="Sign in">
      <FormElement name="Email" type="signup"></FormElement>
      <FormElement name="Password" type="signup"></FormElement>
      <FormElement name="Username" type="signup"></FormElement>
    </ModalWithForm>
  );
}

export default RigisterModal;
