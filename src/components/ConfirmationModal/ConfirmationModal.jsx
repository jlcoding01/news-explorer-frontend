import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ConfirmationModal({ isOpen, handleModalToggle }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isConfirmModal="true"
      redirectText="Sign in"
      isOpen={isOpen}
      handleModalToggle={handleModalToggle}
    ></ModalWithForm>
  );
}

export default ConfirmationModal;
