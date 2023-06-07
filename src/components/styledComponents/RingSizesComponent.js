import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../global/constants";
import ringSizesJson from "../../redux/data/RingSizes.json";

const RingSizesComponent = ({ ringSize, onChange }) => {
  const ringSizes = ringSizesJson["sizes"];
  const [value, setValue] = useState(ringSize);

  // run once when component is mounted
  useEffect(() => {
    // if value is not passed and undefined, set it to the first item in the array
    if (ringSize === undefined) {
      setValue(ringSizes[0]);
    }
  }, []);

  const onChangeHandle = (event) => {
    const selectedValue = event.target.value;
    // console.log("selectedValue=", selectedValue);
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <BodyStyle>
      <TextStyle>Ring size:</TextStyle>
      <OptionsStyle value={value} onChange={onChangeHandle}>
        {ringSizes.map((item, i) => (
          <option value={item.value} key={i}>
            {item.label}
          </option>
        ))}
      </OptionsStyle>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
`;

const OptionsStyle = styled.select`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBg};
  cursor: pointer;
  padding-left: 5px;
  margin-left: 10px;
  width: 110px;
  font-size: ${SIZES.buttonFontSize};
  option {
    color: ${COLORS.buttonText};
    background: ${COLORS.buttonBg};
  }
`;
const TextStyle = styled.div`
  color: ${COLORS.mainColor};
  font-size: 1.4rem;
`;

export default RingSizesComponent;
