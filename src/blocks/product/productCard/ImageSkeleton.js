import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { SIZES } from "../../../components/global/constants";

const ImageSkeleton = () => {
  // console.log("ImageSkeleton");
  return (
    <StyledImage>
      <Skeleton
        width={SIZES.itemCardImageWidth}
        height={SIZES.itemCardImageHeight}
      />
    </StyledImage>
  );
};

const StyledImage = styled.div`
  margin-top: -6px;
`;

export default ImageSkeleton;
