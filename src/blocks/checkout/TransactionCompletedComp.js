import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../components/global/constants";

const TransactionCompletedComp = () => {
  const { state } = useLocation();
  const firstNameValue = state?.details?.firstNameValue;
  const lastNameValue = state?.details?.lastNameValue;

  return (
    <BodyStyle>
      {`Congratulations, ${firstNameValue} ${lastNameValue}! 
			  You have successfully completed your purchase!`}
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  padding: 0 20px;
  margin: 85px auto 15px;
  text-transform: capitalize;
  color: ${COLORS.mainColor};
  font-size: 1.8rem;
  font-weight: bold;
`;

export default TransactionCompletedComp;
