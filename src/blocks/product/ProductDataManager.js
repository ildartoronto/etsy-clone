import React, { Fragment, useState } from "react";
import styled from "styled-components";
import ProductPageTitle from "./ProductPageTitle";
import SkeletonWrapper from "./productCard/SkeletonWrapper";
import DataManagerWrapper from "./DataManagerWrapper";

const ProductDataManager = () => {
  const [filteredData, setFilteredData] = useState(null);

  const onDataLoadedHandler = (data) => {
    setFilteredData(data);
  };

  return (
    <Fragment>
      <ProductPageTitle>{!filteredData ? null : filteredData.length}</ProductPageTitle>
      <BodyStyle>
        {!filteredData && <SkeletonWrapper count={10} />}
        <DataManagerWrapper onDataLoaded={onDataLoadedHandler} />
      </BodyStyle>
    </Fragment>
  );
};

const BodyStyle = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  margin: 15px;
  padding: 5px;
  flex-wrap: wrap;
`;

export default ProductDataManager;
