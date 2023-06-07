import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS, SIZES } from "../../../components/global/constants";
import { setFilter } from "../../../redux/slices/FilterItemsSlice"; // *setFilter* is an action creator from src\redux\slices\FilterItemsSlice.js

const Filter = ({ filterName, dropListFilters }) => {
  const filterOptions = dropListFilters[filterName];
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filterItems[filterName]); // *filterItems* is a name of a slice in the store

  // console.log("filterValue=", filterValue);

  const onChangeHandle = (event) => {
    dispatch(setFilter({ filter: filterName, value: event.target.value }));
  };

  const filter = () => {
    return filterOptions.map((filterOption, i) => (
      <option value={filterOption.value} key={i}>
        {filterOption.label}
      </option>
    ));
  };

  return (
    <BodyStyle value={filterValue} onChange={onChangeHandle}>
      {filter()}
    </BodyStyle>
  );
};

const BodyStyle = styled.select`
  width: ${SIZES.buttonWidth};
  height: ${SIZES.buttonHeight};
  border: 1px solid ${COLORS.mainColor};
  border-radius: ${SIZES.buttonBorderRadius};
  color: ${COLORS.buttonText};
  background: ${COLORS.buttonBg};
  cursor: pointer;
  padding-left: 5px;
  font-size: ${SIZES.buttonFontSize};
  margin: 0 10px 0;
  option {
    color: ${COLORS.buttonText};
    background: ${COLORS.buttonBg};
  }
`;

export default Filter;
