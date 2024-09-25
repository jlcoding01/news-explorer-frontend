import ModalWithForm from "../ModalWithForm/ModalWithForm";
import FormElement from "../FormElement/FormElement";

function LoginModal() {
  return (
    <ModalWithForm title="Sign in" buttonText="Sign in" naviText="Sign up">
      <FormElement name="Email" type="signin"></FormElement>
      <FormElement name="Password" type="signin"></FormElement>
    </ModalWithForm>
  );
}

export default LoginModal;
