import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsaFlag from "./../../components/assets/usa-flag.png";
import CanadaFlag from "./../../components/assets/canada-flag.png";

// export const fetchExchangeRate = createAsyncThunk(
//   "currency/fetchExchangeRate",
//   async () => {
//     const response = await fetch(
//       "https://finance.google.com/finance/converter?a=1&from=CAD&to=USD"
//     );
//     const data = await response.text();
//     const parser = new DOMParser();
//     const htmlDocument = parser.parseFromString(data, "text/html");
//     const rateElement = htmlDocument.querySelector(
//       "#currency_converter_result > span"
//     );
//     const exchangeRate = parseFloat(rateElement.textContent);
//     console.log("exchangeRate", exchangeRate);
//     return exchangeRate;
//   }
// );

// 0.73 USD = 1 CAD
const currencySlice = createSlice({
  name: "currency",
  initialState: {
    shopCurrency: "CAD",
    currencyIcon: CanadaFlag,
    currencyRate: 1,
    // status: "idle",
    // error: null,
  },
  reducers: {
    setCurrency: (state) => {
      state.shopCurrency = state.shopCurrency === "CAD" ? "USD" : "CAD";
      state.currencyIcon =
        state.currencyIcon === CanadaFlag ? UsaFlag : CanadaFlag;
      state.currencyRate = state.currencyRate === 1 ? 0.73 : 1;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchExchangeRate.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchExchangeRate.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       console.log(" action.payload====",  action.payload);
  //       state.exchangeRate = action.payload;
  //     })
  //     .addCase(fetchExchangeRate.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
