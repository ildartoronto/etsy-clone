import styled from "styled-components";
import { COLORS, SIZES } from "../../../components/global/constants";
import ImageSkeleton from "./ImageSkeleton";

const ProductImage = ({ data, isSuccess }) => {
  // console.log("ProductImage", data, isSuccess);
  return data && isSuccess ? (
    <BodyStyle src={data[0].url_fullxfull} />
  ) : (
    <ImageSkeleton />
  );
};

const BodyStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  background-color: ${COLORS.lightBg};
  width: ${SIZES.itemCardImageWidth};
  height: ${SIZES.itemCardImageHeight};
  margin: 0 auto 0;
`;
export default ProductImage;
