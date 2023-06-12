import styled from "styled-components";
import { COLORS, SIZES } from "../../components/global/constants";
import RingSizesComponent from "../../components/styledComponents/RingSizesComponent";
import CartImage from "./CartImage";
import RingPriceComp from "../../components/styledComponents/RingPriceComp";

const CartItem = ({ item, imageUrl, onChangeItem, onRemoveItem }) => {
  const { price, title, ringSize } = item;
  // console.log("CartItem, ringSize=", ringSize);
  const onRemoveItemHandler = () => {
    onRemoveItem(item);
  };

  const onChangeHandle = (ringSize) => {
    // console.log("selectedValue====", ringSize);
    onChangeItem(item, ringSize);
  };

  return (
    <BodyStyle>
      {/* <WrapperImage> */}
        <CartImage imageUrl={imageUrl} size={SIZES.itemCardImageWidth} />
      {/* </WrapperImage> */}
      <DescriptionStyle>{title}</DescriptionStyle>
      <DivVertical>
        <Wrapper>
          <RingSizesComponent ringSize={ringSize} onChange={onChangeHandle} />
        </Wrapper>
        <Wrapper>
          <RingPriceComp price={price} />
        </Wrapper>
      </DivVertical>
      <ButtonStyle onClick={() => onRemoveItemHandler()}>Remove</ButtonStyle>
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
  display: flex;
  background-color: ${COLORS.lightBg};
  border: 1px solid ${COLORS.borderColor};
  flex-wrap: wrap;
  margin: 10px 30px;
  align-items: center;
`;
const DivVertical = styled.div`
  flex: 1 0;
  margin: 20px;
`;
const DescriptionStyle = styled.div`
  flex: 1 0;
  color: ${COLORS.mainColor};
  font-size: 1.4rem;
  margin: 20px;
`;
const ButtonStyle = styled.button`
  flex: 0 1 auto;
  width: ${SIZES.buttonWidthExtended};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBgAlert};
  cursor: pointer;
  font-size: ${SIZES.buttonFontSize};
  margin: 25px;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  @media screen and (max-width: 385px) {
    width: 100px;
    font-size: 0.9rem;
  }
`;
const Wrapper = styled.div`
  margin: 0 0 10px;
  padding: 5px 15px;
`;
const WrapperImage = styled.div`
  align-items: top;
`;

export default CartItem;
