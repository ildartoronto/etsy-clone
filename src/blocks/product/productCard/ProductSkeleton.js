import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { COLORS, SIZES } from "../../../components/global/constants";
import ImageSkeleton from "./ImageSkeleton";

const ProductSkeleton = () => {
  return (
    <SkeletonTheme color="grey" baseColor="#ddd" highlightColor="#ccc">
      <BodyStyle>
        <ImageSkeleton />

        {/* skeleton description */}
        <LineStyle firstline="yes">
          <Skeleton width="240px" height="14px" />
        </LineStyle>
        <LineStyle>
          <Skeleton width="240px" height="14px" />
        </LineStyle>
        <LineStyle>
          <Skeleton width="240px" height="14px" />
        </LineStyle>
        <LineStyle lastline="yes">
          <Skeleton width="100px" height="14px" />
        </LineStyle>

        {/* skeleton price */}
        <PriceStyle>
          <Skeleton width="80px" height="25px" />
        </PriceStyle>
      </BodyStyle>
    </SkeletonTheme>
  );
};

const BodyStyle = styled.div`
  display: flex;
  background-color: ${COLORS.lightBg};
  border: thin solid ${COLORS.borderColor};
  flex-flow: column;
  height: ${SIZES.itemCardHeight};
  width: ${SIZES.itemCardWidth};
  top: 0px;
  margin: 10px 5px;
  position: relative;
`;
const LineStyle = styled.div`
  margin-top: ${(props) => (props.firstline === "yes" ? "15px" : "-5px")};
  margin-left: 17px;
  align-self: flex-start;
`;
const PriceStyle = styled.div`
  margin-right: 22px;
  margin-top: -22px;
  align-self: flex-end;
`;

export default ProductSkeleton;
