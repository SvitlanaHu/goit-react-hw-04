import styles from "./ImageModal.module.css";
import Modal from "react-modal";

export const ImageModal = ({
  isOpen,
  selectedItem,
  closeModal,
  customStyles,
}) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      closeTimeoutMS={10000}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Card"
      style={customStyles}
    >
      <div className={styles.modalCont}>
        <img
          className={styles.modalImg}
          src={selectedItem.urls.regular}
          alt={selectedItem.alt_description}
        />
      </div>
    </Modal>
  );
};