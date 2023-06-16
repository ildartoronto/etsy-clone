import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../components/global/constants";
import PaypalComponent from "./PaypalComponent";
import TotalPriceComp from "../../components/styledComponents/TotalPriceComponent";
import ShippingDetails from "./ShippingDetails";
import CheckoutTitle from "../cart/CartTitle";
import ItemsDetails from "./ItemsDetails";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <BodyStyle>
      <CheckoutTitle />

      {cartItems?.length === 0 ? null : (
        <>
          <SectionStyle>
            <SectionTitle>Shipping Details</SectionTitle>
            <ShippingDetails />
          </SectionStyle>

          <SectionStyle>
            <SectionTitle>Items</SectionTitle>
            <ItemsDetails />
          </SectionStyle>
          <TotalPriceComp items={cartItems} />

          <PaypalComponent />
        </>
      )}
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-image: linear-gradient(
    180deg,
    ${COLORS.mainBackground},
    ${COLORS.white}
  );
`;
const SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid ${COLORS.mainColor};
  background-color: ${COLORS.sectionBg};
  border-radius: 15px;
`;
const SectionTitle = styled.h2`
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;

export default CheckoutPage;
