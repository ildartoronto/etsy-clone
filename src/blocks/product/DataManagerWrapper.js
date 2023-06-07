import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetItemsQuery } from "../../redux/slices/ApiSlice";
import Product from "../product/productCard/Product";

const DataManagerWrapper = ({ onDataLoaded }) => {
  // console.log("DataManagerWrapper");
  // get the sort and filter items from the their slices
  const sortItems = useSelector((state) => state.sortItems);
  const filterItems = useSelector((state) => state.filterItems);

  const { data, isSuccess } = useGetItemsQuery();
  const [filteredData, setFilteredData] = useState(null);

  const filterProducts = (item) => {
    return (
      (filterItems.band === 0 ? true : item.band === filterItems.band) &&
      (filterItems.ring === 0 ? true : item.ring === filterItems.ring) &&
      (filterItems.stone === 0 ? true : item.stone === filterItems.stone)
    );
  };

  const sortProducts = (a, b) => {
    return (
      sortItems.order *
      (sortItems.type === "string"
        ? a.title.localeCompare(b.title)
        : a.price.amount - b.price.amount)
    );
  };

  const filterAndSortData = (listings) => {
    return listings
      .filter((item) => {
        return filterProducts(item);
      })
      .sort((a, b) => {
        return sortProducts(a, b);
      });
  };

  // if data is loaded and there is data then filter and sort it
  useEffect(() => {
    if (isSuccess && data) {
      const filteredAndSortedData = filterAndSortData(data);
      // console.log("useEffect", filteredAndSortedData);
      setFilteredData(filteredAndSortedData);
      onDataLoaded(filteredAndSortedData);
    }
  }, [isSuccess, data, filterItems, sortItems]);

  return (
    <>
      {isSuccess && filteredData?.map((x, i) => <Product key={i} item={x} />)}
    </>
  );
};

export default DataManagerWrapper;
