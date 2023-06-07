import styled from "styled-components";
import FilterManager from "./filter/FilterManager";
import ProductDataManager from "./ProductDataManager";
import { COLORS, SIZES } from "./../../components/global/constants";
import PriceOrder from "./filter/PriceOrder";

const ProductsPage = () => {
  return (
    <BodyStyle>
      <FilterBgStyle>
        <FilterManager />
        <PriceOrder />
      </FilterBgStyle>
      <ProductDataManager />
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-image: linear-gradient(
    180deg,
    ${COLORS.mainBackground},
    ${COLORS.white}
  );
`;
const FilterBgStyle = styled.div`
  display: flex;
  background-color: ${COLORS.lightBg};
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: ${SIZES.maxWidth2}) {
    margin-top: 80px;
  }
  @media screen and (max-width: ${SIZES.maxWidth3}) {
    margin-top: 120px;
  }
`;

export default ProductsPage;
