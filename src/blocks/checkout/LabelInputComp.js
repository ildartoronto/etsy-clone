import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/global/constants";

const LabelInput = ({
  labelProp,
  valueProp,
  readOnly,
  name,
  onSaveInSlice,
}) => {
  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  const onChangeHandler = (e, readOnly) => {
    if (readOnly) return;
    setValue(e.target.value);
    onSaveInSlice(name, e.target.value);
  };

  return (
    <BodyStyle>
      <CheckoutLabel>{labelProp}</CheckoutLabel>
      <CheckoutInput
        type="text"
        value={value}
        onChange={(e) => onChangeHandler(e, readOnly)}
      />
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-size: 1.3rem;
`;
const CheckoutLabel = styled.div`
  flex: 1 1 auto;
  flex-wrap: wrap;
  font-weight: bold;
  margin-right: 10px;
  margin-top: 7px;
  text-align: right;
  padding: 0.5rem;
`;
const CheckoutInput = styled.input`
  flex: 1000 0;
  padding: 10px;
  padding-left: 20px;
  border-radius: 15px;
  border: 1px solid ${COLORS.borderColor};
  max-width: 2000px;
  min-width: 10px;
  margin: 5px;
`;

export default LabelInput;
