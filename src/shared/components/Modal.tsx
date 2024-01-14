import { COLORS } from "@shared/styles/colors";
import { modalStyle } from "@shared/styles/containerStyles";
import { useRef, useState } from "react";
import { Modal as ModalComponent, TouchableHighlight } from "react-native";
import FlashMessage from "react-native-flash-message";
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modalFlashMessageRef = useRef<FlashMessage>(null);
  const hideModal = () => setIsVisible(false)
  const showModal = () => setIsVisible(true)
  const Modal = ({children}:{children:React.ReactNode}) => {
    return (
      <ModalComponent
        onRequestClose={hideModal}
        animationType="fade"
        visible={isVisible}
      >
        <TouchableHighlight onPress={hideModal} style={modalStyle.closeButton}>
        <MaterialComunityIcons size={30} color={COLORS.WHITE} name="close"/>
        </TouchableHighlight>
        <FlashMessage ref={modalFlashMessageRef} />
        {children}
      </ModalComponent>
    );
  };
  return {isVisible, Modal, hideModal, showModal, modalFlashMessageRef}
};
export default useModal;
