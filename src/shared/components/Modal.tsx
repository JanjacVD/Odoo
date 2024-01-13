import { useRef, useState } from "react";
import { Modal as ModalComponent } from "react-native";
import FlashMessage from "react-native-flash-message";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modalFlashMessageRef = useRef<FlashMessage>(null);
  const hideModal = () => setIsVisible(false)
  const showModal = () => setIsVisible(true)
  const Modal = () => {
    return (
      <ModalComponent
        onRequestClose={hideModal}
        animationType="fade"
        visible={isVisible}
      >
        <FlashMessage ref={modalFlashMessageRef} />
      </ModalComponent>
    );
  };
  return {isVisible, Modal, hideModal, showModal, modalFlashMessageRef}
};
export default useModal;
