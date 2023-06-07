import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LabelInputComp from "./LabelInputComp";
import { setLabels, saveValue } from "../../redux/slices/CheckoutSlice";

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const shippingInfo = useSelector((state) => state.checkout);
  const currency = useSelector((state) => state.currency);

  // saves the inputs value in the slice one by one
  const onSaveInSliceHandler = (labelNameStr, value) => {
    // console.log(labelNameStr, value);
    dispatch(saveValue({ name: labelNameStr, value }));
  };

  useEffect(() => {
    // change the labels to the selected currency
    const shopCurrency = currency.shopCurrency; // e.g. "USD"
    dispatch(setLabels({ shopCurrency }));
  }, [currency]);

  return (
    <>
      <LabelInputComp
        name="firstNameValue"
        labelProp={shippingInfo.firstNameLabel}
        valueProp={shippingInfo.firstNameValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="lastNameValue"
        labelProp={shippingInfo.lastNameLabel}
        valueProp={shippingInfo.lastNameValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="streetValue"
        labelProp={shippingInfo.streetLabel}
        valueProp={shippingInfo.streetValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="cityValue"
        labelProp={shippingInfo.cityLabel}
        valueProp={shippingInfo.cityValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="provinceValue"
        labelProp={shippingInfo.provinceLabel}
        valueProp={shippingInfo.provinceValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="postalCodeValue"
        labelProp={shippingInfo.postalCodeLabel}
        valueProp={shippingInfo.postalCodeValue}
        onSaveInSlice={onSaveInSliceHandler}
      ></LabelInputComp>
      <LabelInputComp
        name="countryValue"
        labelProp={shippingInfo.countryLabel}
        valueProp={shippingInfo.countryValue}
        onSaveInSlice={onSaveInSliceHandler}
        readOnly={true}
      ></LabelInputComp>
    </>
  );
};

export default ShippingDetails;
