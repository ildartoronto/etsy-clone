// import React from "react";
import styled from "styled-components";
import WelcomeImage from "../../components/assets/welcome-image.jpg";
import Texts from "../../redux/data/Texts.json";
import { COLORS, SIZES } from "./../../components/global/constants";

const HomePage = () => {
  return (
    <BodyStyle>
      <ImageStyle src={WelcomeImage} alt="welcome" />
      <TextStyle>{Texts.welcome1}</TextStyle>
      <TextStyle>{Texts.welcome2}</TextStyle>
      <TextStyle>{Texts.welcome3}</TextStyle>
      <TextStyle>{Texts.welcome4}</TextStyle>
      <TextStyle>{Texts.welcome5}</TextStyle>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-image: linear-gradient(
    180deg,
    ${COLORS.mainBackground},
    ${COLORS.white}
  );
`;
const ImageStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  background-color: ${COLORS.white};
  margin: 60px auto 20px;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  display: block;
`;
const TextStyle = styled.div`
  white-space: pre-wrap;
  color: ${COLORS.mainColor};
  text-transform: capitalize;
  font-size: 1.4rem;
  margin: 20px auto 0;
  padding: 0 40px;
`;

export default HomePage;

// THE CODE BELOW DOES NOT WORK!
// <ImageStyle />
// const ImageStyle = styled.img`
//   src: ${WelcomeImage};
//   background-color: ${COLORS.white};
//   width: 100%;
//   margin: 60px auto 20px;
//   padding: 10px;
// `;
