import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  firstNameLabel: "First Name*",
  firstNameValue: "",
  lastNameLabel: "Last Name*",
  lastNameValue: "",
  streetLabel: "Street Address*",
  streetValue: "",
  cityLabel: "City*",
  cityValue: "",
  provinceLabel: "Province*",
  provinceValue: "",
  postalCodeLabel: "Postal Code*",
  postalCodeValue: "",
  countryLabel: "Country*",
  countryValue: "Canada",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setLabels: (state, actions) => {
      const { shopCurrency } = actions.payload;
      // console.log("actions.payload", shopCurrency);
      state.provinceLabel = shopCurrency === "CAD" ? "Province*" : "State*";
      state.postalCodeLabel = shopCurrency === "CAD" ? "Postal Code*" : "Zip Code*";
      state.countryValue = shopCurrency === "CAD" ? "Canada" : "USA";
    },
    saveValue: (state, actions) => {
      const { name, value } = actions.payload;
      state[name] = value;
      // console.log(" state[name]",  state[name], name, value);
    },
  },
});

export const { saveValue, setLabels } = checkoutSlice.actions;
export default checkoutSlice;

// Selector function to check if all data is not empty
const isDataValidSelector = createSelector(
  (state) => state.checkout,
  (checkout) => {
    return Object.values(checkout).every((value) => {
      // Return true if the value is not an empty string, false otherwise
      return typeof value === "string" && value.trim() !== "";
    });
  }
);

export const selectIsDataValid = isDataValidSelector;
