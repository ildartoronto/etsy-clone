import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/global/constants";

const DetailsTitle = ({ title }) => {
  return <BodyStyle>{title}</BodyStyle>;
};
const BodyStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // horizontal align
  text-align: center; // horizontal align for text
  align-items: center; // vertical align
  font-size: 1.2rem;
  margin: 0 0 10px;
  padding: 15px;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.secondColor};
`;
export default DetailsTitle;
