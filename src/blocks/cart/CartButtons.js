import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../../components/global/constants";
import { clearCart } from "../../redux/slices/CartSlice";

const CartButtons = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <BodyStyle>
      {cartItems?.length === 0 ? null : (
        <>
          <ButtonStyle
            onClick={() => dispatch(clearCart())}
            color={COLORS.buttonBgAlert}
          >
            Clear Cart
          </ButtonStyle>
          <NavLink to="/checkout">
            <ButtonStyle>Check Out</ButtonStyle>
          </NavLink>
        </>
      )}
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
  display: flex;
}`;
const ButtonStyle = styled.button`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${(props) => (props.color ? props.color : COLORS.buttonBg)};
  cursor: pointer;
  font-size: ${SIZES.buttonFontSize};
  margin: 0 10px 20px;
  flex-wrap: nowrap;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  text-style: bold;
  @media screen and (max-width: 385px) {
    width: 100px;
    font-size: 0.9rem;
  }
`;

export default CartButtons;
