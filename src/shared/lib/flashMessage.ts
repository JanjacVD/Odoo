import useModal from "@shared/components/Modal";
import { MessageType, showMessage } from "react-native-flash-message";

const useFlashMessage = () => {
  const { modalFlashMessageRef } = useModal();

  const showSuccess = (message: string) => {
    const messageProps = {
      message,
      type: "success" as MessageType,
    };
    showMessage(messageProps);
    modalFlashMessageRef.current?.showMessage(messageProps);
  };

  const showError = (message: string) => {
    const messageProps = {
      message,
      type: "danger" as MessageType,
    };
    showMessage(messageProps);
    modalFlashMessageRef.current?.showMessage(messageProps);
  };

  const showInfo = (message: string) => {
    const messageProps = {
      message,
      type: "info" as MessageType,
    };
    showMessage(messageProps);
    modalFlashMessageRef.current?.showMessage(messageProps);
  };
  return { showError, showInfo, showSuccess };
};
export default useFlashMessage;
