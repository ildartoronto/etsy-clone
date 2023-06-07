import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrency } from "../../redux/slices/CurrencySlice";

const CurrencyIcon = () => {
  const dispatch = useDispatch();
  const currencyIcon = useSelector((state) => state.currency.currencyIcon);

  const onClickHandler = () => {
    dispatch(setCurrency());
  };

  return (
    <StyledIcon onClick={onClickHandler}>
      <img src={currencyIcon} alt="currency-icon" height="30px" />
    </StyledIcon>
  );
};

const StyledIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 10px;
`;

export default CurrencyIcon;
