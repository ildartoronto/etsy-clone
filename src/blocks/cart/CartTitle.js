import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../components/global/constants";

const CartTitle = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const title = () => {
    let titleText = "Your cart is empty."
    if (cartItems.length === 1) {
      titleText = "You have 1 item in your cart."
    } else if (cartItems.length > 1) {
      titleText = `You have ${cartItems.length} items in your cart.`
    }
    return titleText;
  };

  return <BodyStyle>{title()}</BodyStyle>;
};
const BodyStyle = styled.div`
  padding: 0 20px;
  margin: 85px auto 15px;
  text-transform: capitalize;
  color: ${COLORS.mainColor};
  font-size: 1.8rem;
  font-weight: bold;
`;
export default CartTitle;
