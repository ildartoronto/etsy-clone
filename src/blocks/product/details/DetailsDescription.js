import React from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../../../components/global/constants";
import TextWithLink from "../TextWithLink";

const DetailsDescription = ({ description }) => {
  return (
    <BodyStyle>
      <TextWithLink textWithLinks={description} />
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
  font-size: 1.2rem;
  color: ${COLORS.mainColor};
  border: thin solid black;
  padding: 15px;
  margin: 10px 20px 30px;
  white-space: pre-line; // for line breaks in text
  @media screen and (max-width: ${SIZES.maxWidth}) {
    width: 100%;
    margin: 20px 0;
  }
`;
export default DetailsDescription;
