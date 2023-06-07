import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLORS } from "../global/constants";
import { getPrice } from "../global/utils";

const PriceComponent = ({ price: priceObject, scale = 1 }) => {
  const { shopCurrency, currencyIcon, currencyRate } = useSelector(
    (state) => state.currency
  );

  const price = getPrice(priceObject, currencyRate);
  const priceInt = () => Math.floor(price);
  const priceDec = () => (price % 1).toFixed(2).substring(2, 4);

  return (
    <BodyStyle
      scale={scale}
      shopcurrency={shopCurrency}
    >
      <IconStyle src={currencyIcon} />
      <SupStyle>$</SupStyle>
      <PriceStyle>{priceInt()}</PriceStyle>
      <SupStyle>{priceDec()}</SupStyle>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.shopcurrency === "CAD" ? COLORS.priceCAD : COLORS.priceUSD};
  transform: ${(props) => `scale(${props.scale})`};
`;
const IconStyle = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 5px;
`;
const PriceStyle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const SupStyle = styled.sup`
  font-size: 0.8rem;
`;
export default PriceComponent;
