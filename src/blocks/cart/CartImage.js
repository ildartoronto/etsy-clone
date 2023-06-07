import styled from "styled-components";
import { COLORS, SIZES } from "../../components/global/constants";

const CartImage = ({ imageUrl }) => {
  // console.log("CartImage", imageUrl);
  return <BodyStyle src={imageUrl} />;
};

const BodyStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  flex: 0;
  background-color: ${COLORS.lightBg};
  width: ${SIZES.itemCardImageWidth};
  height: ${SIZES.itemCardImageHeight};
  margin-left: 0;
`;
export default CartImage;
