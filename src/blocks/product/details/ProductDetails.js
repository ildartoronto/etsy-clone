import { useSelector } from "react-redux";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { COLORS } from "../../../components/global/constants";
import DetailsButtons from "./DetailsButtons";
import DetailsTitle from "./DetailsTitle";
import DetailsDescription from "./DetailsDescription";
import DetailsImages from "./DetailsImages";

const ProductDetails = () => {
  const product = useSelector((state) => state.productDetails);

  return (
    <BodyStyle>
      <DetailsTitle title={product?.item?.title}></DetailsTitle>
      <DetailsButtons itemImages={product?.listingsData} item={product?.item} />
      <DetailsImages itemImages={product?.listingsData} />
      <DetailsDescription description={product?.item?.description} />
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;
  background-image: linear-gradient(
    180deg,
    ${COLORS.mainBackground},
    ${COLORS.white}
  );
`;
export default ProductDetails;
