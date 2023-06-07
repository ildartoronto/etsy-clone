import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../global/constants";
import PriceComponent from "./PriceComponent";

const TotalPriceComp = ({ items }) => {
	const { shopCurrency } = useSelector((state) => state.currency);
  // collects the price objects into an array and returns it
  // price = [{amount:1900, currency_code:"CAD", divider:100}, {..}]
  const priceObjects = () => {
    return items?.map((item) => item.price);
  };

  return items?.length ? (
    <BodyStyle>
      <TextStyle shopcurrency={shopCurrency}>Total:</TextStyle>
      <PriceComponent price={priceObjects()} scale={1.5} />
    </BodyStyle>
  ) : null;
};

const BodyStyle = styled.div`
  display: flex;
  margin: 20px;
`;
const TextStyle = styled.div`
  color: ${(props) => (props.shopcurrency === "CAD" ? COLORS.priceCAD : COLORS.priceUSD)};
  font-size: 2rem;
  font-weight: bold;
  padding-right: 30px;
`;
export default TotalPriceComp;
