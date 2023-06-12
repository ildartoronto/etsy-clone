import { useSelector } from "react-redux";
import styled from "styled-components";
import PriceComponent from "../../components/styledComponents/PriceComponent";
import { COLORS, SIZES } from "../../components/global/constants";
import CartImage from "../cart/CartImage";

const ItemsDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.map((item, key) => (
        <CheckoutItem key={key}>
          <CartImage imageUrl={item.imageUrl} size={SIZES.itemCheckoutImageWidth}/>
          <CheckoutLabel>{item.title}</CheckoutLabel>
          <RingSizeStyle>Ring size: {item.ringSize}</RingSizeStyle>
          <Wrapper>
            <PriceComponent price={item.price} />
          </Wrapper>
        </CheckoutItem>
      ))}
    </>
  );
};
const CheckoutItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  justify-content: space-between;
  margin-top: 15px;
  background-color: ${COLORS.lightBg};
  border: 1px solid ${COLORS.mainColor};
`;
const CheckoutLabel = styled.label`
  flex: 5 0;
  font-size: 1.3rem;
  margin: 0 20px;
  padding: 8px;
`;
const RingSizeStyle = styled(CheckoutLabel)`
  flex: 1 0;
`;
const Wrapper = styled.div`
  margin: 5px 15px;
`;

export default ItemsDetails;
