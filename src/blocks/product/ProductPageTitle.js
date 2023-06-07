import styled from "styled-components";
import { COLORS } from "./../../components/global/constants";

const ProductPageTitle = ({ children }) => {
  // console.log("children", children);
  return (
    <BodyStyle>{`Found Products: ${
      children === null ? `loading...` : children
    }`}</BodyStyle>
  );
};

const BodyStyle = styled.div`
  padding: 0 20px;
  margin: 10px auto 0;
  text-transform: capitalize;
  color: ${COLORS.mainColor};
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: bold;
`;

export default ProductPageTitle;
