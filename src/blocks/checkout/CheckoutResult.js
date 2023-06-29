import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../components/global/constants";

const CheckoutResult = () => {
  const { state } = useLocation();
  const message = state?.message || "Sorry, something went wrong...";

  return <BodyStyle>{message}</BodyStyle>;
};

const BodyStyle = styled.div`
  padding: 0 20px;
  margin: 85px auto 15px;
  text-transform: capitalize;
  color: ${COLORS.mainColor};
  font-size: 1.8rem;
  font-weight: bold;
`;

export default CheckoutResult;
