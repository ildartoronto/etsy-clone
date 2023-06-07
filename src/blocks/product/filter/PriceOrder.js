import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS, SIZES } from "../../../components/global/constants";
import { setSorting } from "../../../redux/slices/SortItemsSlice";

// it's a button that changes the order of the items in the store
// and a label on itself that shows the current order
const PriceOrder = () => {
  const dispatch = useDispatch();
  const sortItems = useSelector((state) => state.sortItems);

  const onSortHandler = (e, type) => {
    dispatch(setSorting({ type: type }));
  };
  return (
    <PriceOrderStyle>
      <OrderButtonStyle onClick={(e) => onSortHandler(e, "number")}>
        {sortItems.order === -1 ? `Price: High to Low` : `Price: Low to High`}
      </OrderButtonStyle>
    </PriceOrderStyle>
  );
};
const PriceOrderStyle = styled.div`
  flex: 1 1;
  background-color: ${COLORS.shadowColor};
  margin: 10px;
  padding: 10px;
  justify-content: space-around;
  @media screen and (max-width: ${SIZES.maxWidth}) {
    flex: 1 1;
    width: 100%;
    margin-top: 0;
  }
`;
const OrderButtonStyle = styled.button`
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBg};
  cursor: pointer;
  font-size: ${SIZES.buttonFontSize};
  padding: 5px;
  margin: 0 auto 0;
  width: ${SIZES.buttonWidthLrg};
  height: ${SIZES.buttonHeight};
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  text-style: bold;
  // transition: all 0.3s ease-in-out;
`;
export default PriceOrder;
