import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import ProductDetails from "../../../blocks/product/details/ProductDetails";

const HIDE_ANIM = 0;
const SHOW_ANIM = 1;
const ANIM_DURATION = 500; // ms
const ANIM_DELAY = 200; // ms
const MIN_OPACITY = 0;
const MAX_OPACITY = 1;

const ModalContent = ({ closeModal }) => {
  const contentRef = useRef(null);
  const modalWindow = useSelector((state) => state.modalWindow);
  const [animState, setContentAnimation] = useState(SHOW_ANIM);

	// get the size of the clicked product card
  const windowRectMin = {
    x: `${modalWindow.x}px`,
    y: `${modalWindow.y}px`,
    height: `${modalWindow.height}px`,
    width: `${modalWindow.width}px`,
  };
	// get the size of the screen
  const windowRectMax = {
    x: "5%",
    y: "0",
    height: "100vh",
    width: "90%",
  };
  // This function will be called after the animation is finished
  const onAnimationEndHandle = (event) => {
    // Change the size of the box using DOM
    contentRef.current.style.left = windowRectMax.x;
    contentRef.current.style.top = windowRectMax.y;
    contentRef.current.style.width = windowRectMax.width;
    contentRef.current.style.height = windowRectMax.height;
  };

	const onCloseModalHandler = () => {
    setContentAnimation((prevStat) =>
      prevStat === SHOW_ANIM ? showContentAnim : hideContentAnim
    );
		closeModal();
	}

  // get content by name and show it in modal window
  const getContentByName = (name) => {
    switch (name) {
      case "ProductDetails":
        return <ProductDetails onClick={onCloseModalHandler}/>;
      default:
        return null;
    }
  };
  return (
    <BodyStyle
      ref={contentRef}
      animstate={animState}
      windowrect={
        animState === HIDE_ANIM ? windowRectMax : windowRectMin
      }
      onAnimationEnd={onAnimationEndHandle}
    >
      {getContentByName(modalWindow.contentName)}
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
	top: ${(props) => props.windowrect.y};
  left: ${(props) => props.windowrect.x};
  width: ${(props) => props.windowrect.width};
  height: ${(props) => props.windowrect.height};
  position: fixed;
  z-index: 130;
  overflow-y: auto;
  max-height: 100vh;
	animation-direction: forwards;
	animation-fill-mode: forwards; // fixes the problem with opacity
	animation-duration: ${ANIM_DURATION}ms;
	animation-name: ${(props) => props.animstate === SHOW_ANIM ? showContentAnim : hideContentAnim};	
	// animation-delay: ${ANIM_DELAY}ms;
	opacity: ${(props) => (props.animstate === SHOW_ANIM ? MIN_OPACITY : MAX_OPACITY)};
`;
const showContentAnim = keyframes`
  0% { 
    opacity: ${MIN_OPACITY};
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
		opacity: ${MIN_OPACITY};
  }
  `;

export default ModalContent;
