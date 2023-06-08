import { useDispatch } from "react-redux";
import styled from "styled-components";
import Filter from "./Filter";
import dropListFilters from "../../../redux/data/DropListFilters.json";
import { COLORS, SIZES } from "../../../components/global/constants";
import { resetFilters } from "../../../redux/slices/FilterItemsSlice";

const FilterManager = () => {
  const dispatch = useDispatch();
  // console.log("FilterManager");
  const onResetFiltersHandler = () => {
    dispatch(resetFilters());
  };

  return (
    <BodyStyle>
      <FilterStyle>
        <Filter filterName={"band"} dropListFilters={dropListFilters} />
        <Filter filterName={"ring"} dropListFilters={dropListFilters} />
        <Filter filterName={"stone"} dropListFilters={dropListFilters} />

        <ResetButtonStyle onClick={onResetFiltersHandler}>
          Reset
        </ResetButtonStyle>
      </FilterStyle>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  flex: 0 1 66%;
  background-color: ${COLORS.shadowColor};
  margin: 10px;
  padding: 10px;
  justify-content: space-around;
  @media screen and (max-width: ${SIZES.maxWidth}) {
    flex: 1 1 100%;
    width: 100%;
  }
`;
const FilterStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  @media screen and (max-width: ${SIZES.maxWidth}) {
    width: 100%;
  }
  @media screen and (max-width: ${SIZES.maxWidth2}) {
    flex-wrap: wrap;
  }
`;
const ResetButtonStyle = styled.button`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBgAlert};
  cursor: pointer;
  font-size: ${SIZES.buttonFontSize};
  margin: 0 10px 0;
  flex-wrap: nowrap;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  text-style: bold;
  // transition: all 0.3s ease-in-out;
  align-items: flex-start;
`;

export default FilterManager;
