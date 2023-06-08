import { useSelector } from "react-redux";
import { Modal } from "./Modal";

// this component is needed to prevent rerendering of Modal component
const ModalWrapper = () => {
  const modalWindow = useSelector((state) => state.modalWindow);
  return <>{modalWindow.isOpen && <Modal />}</>;
};

export default ModalWrapper;
