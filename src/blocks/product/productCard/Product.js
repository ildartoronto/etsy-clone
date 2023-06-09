import React, { useRef } from "react";
// import { renderToString } from "react-dom/server"; // uses as a workaround for passing a component to the dispatch payload
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PriceComponent from "../../../components/styledComponents/PriceComponent";
import { useGetItemQuery } from "../../../redux/slices/ItemSlice";
import { COLORS } from "../../../components/global/constants";
import { openModalWindow } from "../../../redux/slices/ModalWindowSlice";
import { setProduct } from "../../../redux/slices/ProductDetailsSlice";
import ProductImage from "./ProductImage";
import ProductDescription from "../ProductDescription";

const Product = ({ item }) => {
  // console.log("Product item=");
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { listing_id, price, title } = item;
  // get an array of listing data for this item by passing in the listing_id to the useGetItemQuery hook in ItemSlice.js and then use the listing_id to filter the data array
  const { data, isSuccess } = useGetItemQuery(listing_id);
  console.log("listing_id =", listing_id);

  const onCardClickHandler = (event) => {
    if (data && isSuccess) {
      dispatch(setProduct({ item, data }));

      // passing a component to the dispatch payload is not allowed, so use renderToString to convert the component to a string
      // that's why we use the workaround of using the content property to pass the component name to the Modal.js component
      const rect = ref.current.getBoundingClientRect();
      const modalPayload = {
        x: rect.left,
        y: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top,
        contentName: "ProductDetails",
      };
      // console.log("modalPayload=", modalPayload)
      dispatch(openModalWindow(modalPayload));
    }
  };

  return (
    <BodyStyle ref={ref} onClick={onCardClickHandler}>
      <ProductImage data={data} isSuccess={isSuccess} />
      <ProductDescription title={title} />
      <Wrapper>
        <PriceComponent price={price} />
      </Wrapper>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  font-size: 1.2rem;
  justify-content: space-around;
  background-color: ${COLORS.lightBg};
  border: 1px solid ${COLORS.borderColor};
  cursor: pointer;
  height: auto;
  width: 280px;
  margin: 10px 5px;
  // position: relative;
  top: 0px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 5px 5px 1px ${COLORS.shadowColor};
    transition: all 0.3s ease;
    top: -2px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

export default Product;
