import { useSelector } from "react-redux";
import styled from "styled-components";
import PriceComponent from "../../components/styledComponents/PriceComponent";
import { COLORS } from "../../components/global/constants";

const ItemsDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cartItems.map((item, key) => (
        <CheckoutItem key={key}>
          <CheckoutLabel>{item.title}</CheckoutLabel>
          <Wrapper>
            <PriceComponent price={item.price} />
          </Wrapper>
        </CheckoutItem>
      ))}
    </div>
  );
};
const CheckoutItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
  background-color: ${COLORS.lightBg};
  border: 1px solid ${COLORS.mainColor};
`;
const CheckoutLabel = styled.label`
  flex: 1;
  font-size: 1.3rem;
  margin: 0 20px;
  padding: 20px;
`;
const Wrapper = styled.div`
  margin: 20px;
`;

export default ItemsDetails;
