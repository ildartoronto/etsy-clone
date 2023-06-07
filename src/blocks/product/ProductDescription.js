import styled from "styled-components";
import { COLORS } from "./../../components/global/constants";

const ProductDescription = ({ title }) => {
  const maxTitle = 100;
  return (
    <BodyStyle>
      {title.length > maxTitle ? `${title.substring(0, maxTitle)} ...` : title}
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  white-space: pre-wrap;
  color: ${COLORS.mainColor};
  font-size: 1rem;
  flex-wrap: nowrap;
  text-align: left;
  display: flex;
  align-self: left;
  font-size: 1rem;
  height: 70px;
  margin: 15px;
`;

export default ProductDescription;
