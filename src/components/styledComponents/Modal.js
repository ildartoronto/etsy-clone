import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { closeModalWindow } from "../../redux/slices/ModalWindowSlice";
import ProductDetails from "../../blocks/product/details/ProductDetails";
import { COLORS } from "../global/constants";

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.9;
const ANIM_DURATION = 500; // ms
const ANIM_DELAY = 200; // ms
const HIDE_ANIM = 0;
const SHOW_ANIM = 1;

// works like this, do not change to "default export Modal;"
export const Modal = () => {

  console.log("Modal")

  const dispatch = useDispatch();
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  const modalWindow = useSelector((state) => state.modalWindow);

  const portalElement = document.getElementById("overlays");

  const windowRectMin = {
    x: `${modalWindow.x}px`,
    y: `${modalWindow.y}px`,
    height: `${modalWindow.height}px`,
    width: `${modalWindow.width}px`,
  };
  const windowRectMax = {
    x: "5%",
    y: "0",
    height: "100vh",
    width: "90%",
  };


  const [contentAnimation, setContentAnimation] = useState(SHOW_ANIM);
  const [bgAnimation, setBgAnimation] = useState(SHOW_ANIM);

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
    setContentAnimation((prevStat) =>
      prevStat === hideContentAnim ? showContentAnim : hideContentAnim
    );
    setBgAnimation((prevStat) =>
      prevStat === hideBgAnim ? showBgAnim : hideBgAnim
    );
  };

  // This function will be called after the animation is finished
  const onAnimationEndHandle = (event) => {
    // Change the size of the box using DOM
    contentRef.current.style.left = windowRectMax.x;
    contentRef.current.style.top = windowRectMax.y;
    contentRef.current.style.width = windowRectMax.width;
    contentRef.current.style.height = windowRectMax.height;
  };

  const onBgAnimationEndHandle = (event) => {
    if (hideBgAnim === bgAnimation) {
      dispatch(closeModalWindow());
    }
  };

  // get content by name and show it in modal window
  const getContentByName = (name) => {
    switch (name) {
      case "ProductDetails":
        return <ProductDetails />;
      default:
        return null;
    }
  };

  const modalBackground = () => {
    return createPortal(
      <BackgroundStyle
        ref={backgroundRef}
        animation={contentAnimation === HIDE_ANIM ? MAX_OPACITY : MIN_OPACITY}
        onAnimationEnd={onBgAnimationEndHandle}
        onClick={closeModalHandler}
      />,
      portalElement
    );
  };

  const modalContent = () => {
    return createPortal(
      <ContentStyle
        ref={contentRef}
        animation={contentAnimation === HIDE_ANIM ? 'hideAnim' : 'showAnim'}
        windowrect={
          contentAnimation === HIDE_ANIM ? windowRectMax : windowRectMin
        }
        onAnimationEnd={onAnimationEndHandle}
      >
        {getContentByName(modalWindow.contentName)}
      </ContentStyle>,
      portalElement
    );
  };

  return (
    <div>
      {modalBackground()}
      {modalContent()}
    </div>
  );
};

// ------ content section of modal window ------
const ContentStyle = styled.div`
  left: ${(props) => props.windowrect.x};
  top: ${(props) => props.windowrect.y};
  width: ${(props) => props.windowrect.width};
  height: ${(props) => props.windowrect.height};
  position: fixed;
  z-index: 130;
  overflow-y: auto;
  max-height: 100vh;
  `;
  // animation-direction: forwards;
  // animation-duration: ${ANIM_DURATION}ms;
  // animation-name: ${(props) => props.animation};
  // animation-fill-mode: forwards; // fixes the problem with opacity
  // animation-delay: ${ANIM_DELAY}ms;
  // opacity: ${(props) => (props.animation === hideContentAnim ? 1 : MIN_OPACITY)};
  const showContentAnim = keyframes`
  0% { 
    opacity: 0; 
  }
  100% { 
    opacity: 1; 
    width: 90%;
    height: 100vh;
    top: 0;
    left: 5%;
  }
`;
const hideContentAnim = keyframes`
  0% { 
    opacity: 1; 
    width: 90%;
    height: 100vh;
    top: 0;
    left: 5%;
  }
  100% { 
    opacity: 0; 
  }
  `;

// ------ background section of modal window ------
const BackgroundStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 120;
  background-color: ${COLORS.borderColor};
  // animation-direction: forwards;
  animation-duration: ${ANIM_DURATION}ms;
  animation-name: ${(props) => props.animation};
  animation-fill-mode: forwards; // fixes the problem with opacity
  animation-delay: ${ANIM_DELAY}ms;
  opacity: ${(props) => props.animation};
`;
const showBgAnim = keyframes`
  0% {
    opacity: ${MIN_OPACITY};
  }
  100% {
    opacity: ${MAX_OPACITY};
  }
`;
const hideBgAnim = keyframes`
  0% {
    opacity: ${MAX_OPACITY};
  }
  100% {
    opacity: ${MIN_OPACITY};
  }
`;

/* @keyframes duration | timing-function | delay | name */
// animation: ${(props) => props.animation} ${(props) => props.animationTime}s 1;
// animation-duration: ${(props) => props.animationTime}s;
// background-color: ${(props) => `rgba(0, 0, 0, ${props.opacity})`};
