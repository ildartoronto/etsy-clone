import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../../global/constants";

const HIDE_ANIM = 0;
const SHOW_ANIM = 1;
const ANIM_DURATION = 500; // ms
const ANIM_DELAY = 200; // ms
const MIN_OPACITY = 0;
const MAX_OPACITY = 0.9;

const ModalBg = ({ closeModal }) => {
  const [animState, setAnimState] = useState(SHOW_ANIM);

  const onCloseModalHandler = () => {
		// console.log("onCloseModalHandler", animState);
    setAnimState((prevStat) =>
      prevStat === SHOW_ANIM ? showAnim : hideAnim
    );
    closeModal();
  };

	// calls after the animation is finished 
  const onBgAnimationEndHandler = (event) => {
		// console.log("onBgAnimationEndHandler", animState);
    if (hideAnim === animState) {
      // onBgAnimationEnd();
    }
  };

  return (
    <BodyStyle
      animstate={animState}
      onAnimationEnd={onBgAnimationEndHandler}
      onClick={onCloseModalHandler}
    />
  );
};
const BodyStyle = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 120;
  background-color: ${COLORS.borderColor};
  animation-direction: forwards;
  animation-fill-mode: forwards; // fixes the problem with opacity
  animation-duration: ${ANIM_DURATION}ms;
  animation-name: ${(props) => props.animstate === SHOW_ANIM ? showAnim : hideAnim};
  // animation-delay: ${ANIM_DELAY}ms;
  opacity: ${(props) => props.animstate === SHOW_ANIM ? MIN_OPACITY : MAX_OPACITY};
	`;

const showAnim = keyframes`
  0% {
    opacity: ${MIN_OPACITY};
  }
  100% {
    opacity: ${MAX_OPACITY};
  }
`;
const hideAnim = keyframes`
  0% {
    opacity: ${MAX_OPACITY};
  }
  100% {
    opacity: ${MIN_OPACITY};
  }
`;
export default ModalBg;
