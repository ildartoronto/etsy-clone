import styled from "styled-components";
import { COLORS } from "../../components/global/constants";

const CartImage = ({ imageUrl, size }) => {
  // console.log("CartImage", imageUrl);
  return <BodyStyle src={imageUrl} size={size} />;
};

const BodyStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  flex: 0;
  background-color: ${COLORS.lightBg};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-left: 0;
`;
export default CartImage;
