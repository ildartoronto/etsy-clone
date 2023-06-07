// import React from "react";
import styled from "styled-components";
import LogoImg from "./../../components/assets/logo.png";

const Logo = () => {
  return <LogoStyle src={LogoImg} alt="logo" />;
};

const LogoStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  margin: auto;
  display: block;
  height: 42px;
  margin-left: 6px;
  padding-bottom: 1px;
  width: 42px;
`;

export default Logo;
