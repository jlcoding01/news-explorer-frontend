import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ConfirmationModal() {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isConfirmModal="true"
      redirectText="Sign in"
    ></ModalWithForm>
  );
}

export default ConfirmationModal;
