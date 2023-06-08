import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { COLORS, SIZES } from "../../../components/global/constants";
import CartComponent from "../../../components/styledComponents/CartComponent";
import RingSizesComponent from "../../../components/styledComponents/RingSizesComponent";
import { addItemToCart } from "../../../redux/slices/CartSlice";
import RingPriceComp from "../../../components/styledComponents/RingPriceComp";
import { NavLink } from "react-router-dom";

const DetailsButtons = ({ itemImages, item, onClick }) => {
  const dispatch = useDispatch();

  const { title, price } = item;

  // TODO: change the default size to the size of the ring once the RingSizesComponent is loaded
  const [ringSize, setRingSize] = useState(3);

  const onAddItemToCartHandler = () => {
    const imageUrl = itemImages[0].url_fullxfull;
    dispatch(addItemToCart({ item, imageUrl, ringSize }));
  };

  const onCloseModalHandler = () => {
    onClick();
  };

  const onChangeHandle = (ringSize) => {
    // console.log("selected ringSize=", ringSize);
    setRingSize(ringSize);
  };

  return (
    <ButtonsStyle>
      <RingSizesComponent onChange={onChangeHandle}></RingSizesComponent>
      <RingPriceComp price={price} />
      <ButtonStyle value={title} onClick={() => onAddItemToCartHandler()}>
        Add To Cart
      </ButtonStyle>
      {/* a little trick to call handler and then a direct to the cart */}
      <StyledNavLink to="/cart" onClick={onCloseModalHandler}>
        <CartComponent />
      </StyledNavLink>
      <ButtonStyle onClick={onCloseModalHandler}>Close</ButtonStyle>
    </ButtonsStyle>
  );
};

const ButtonsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; // horizontal align
  align-items: center; // vertical align
  margin: 10px 20px;
  row-gap: 20px;
  column-gap: 10px;
  border: thin solid black;
  padding: 10px;
`;
const ButtonStyle = styled.button`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBg};
  cursor: pointer;
  font-size: ${SIZES.buttonFontSize};
  flex-wrap: nowrap;
  text-decoration: none;
  text-transform: capitalize;
  text-style: bold;
  @media screen and (max-width: 385px) {
    width: 100px;
    font-size: 0.9rem;
  }
`;
const StyledNavLink = styled(NavLink)`
  font-size: ${SIZES.buttonFontSize};
  padding-top: 3px;
  padding-left: 35px;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.buttonText};
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  cursor: pointer;
  flex-wrap: nowrap;
  text-decoration: none;
  text-transform: capitalize;
  text-style: bold;
  &:hover {
    color: ${COLORS.buttonText};
  }
  @media screen and (max-width: 385px) {
    width: 100px;
    font-size: 0.9rem;
  }
`;
export default DetailsButtons;
