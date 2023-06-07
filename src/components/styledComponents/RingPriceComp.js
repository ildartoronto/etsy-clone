import styled from "styled-components";
import PriceComponent from "../../components/styledComponents/PriceComponent";
import { COLORS } from "../global/constants";

const RingPriceComp = ({ price }) => {
  return (
    <BodyStyle>
      <TextPriceStyle>Ring price:</TextPriceStyle>
      <PriceComponent price={price} />
    </BodyStyle>
  );
};
const BodyStyle = styled.div`
  display: flex;
`;
const TextPriceStyle = styled.div`
  color: ${COLORS.mainColor};
  font-size: 1.4rem;
  padding-right: 8px;
`;
export default RingPriceComp;
