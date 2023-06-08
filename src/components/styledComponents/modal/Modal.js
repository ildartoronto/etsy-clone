import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModalWindow } from "../../../redux/slices/ModalWindowSlice";
import ModalBg from "./ModalBg";
import ModalContent from "./ModalContent";

// works like this, do not change to "default export Modal;"
export const Modal = () => {
  // console.log("Modal")
  const dispatch = useDispatch();
  const portalElement = document.getElementById("overlays");

  // prevents scrolling of background when modal is opened
  useEffect(() => {
    // Calculate scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    // Add right padding to body to freeze scrollbar in place
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    // Disable scrolling on the body
    document.body.style.overflowY = "hidden";
    // setIsOpen(true);
    // Cleanup function to remove styles when component unmounts
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflowY = "";
      // setIsOpen(false);
    };
  }, []);

  const closeModalHandler = () => {
    dispatch(closeModalWindow());
  };

  return (
    <>
      {createPortal(<ModalBg closeModal={closeModalHandler} />, portalElement)}
      {createPortal(
        <ModalContent closeModal={closeModalHandler} />,
        portalElement
      )}
    </>
  );
};

/* @keyframes duration | timing-function | delay | name */
// animation: ${(props) => props.animation} ${(props) => props.animationTime}s 1;
// animation-duration: ${(props) => props.animationTime}s;
// background-color: ${(props) => `rgba(0, 0, 0, ${props.opacity})`};
