import { Routes, Route, Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { fetchExchangeRate } from "./redux/slices/CurrencySlice";
import Navbar from "./blocks/navbar/Navbar";
import HomePage from "./blocks/home/HomePage";
import ProductsPage from "./blocks/product/ProductsPage";
import CartPage from "./blocks/cart/CartPage";
import CheckoutPage from "./blocks/checkout/CheckoutPage";
import CopyrightComponent from "./components/styledComponents/CopyrightComponent";
// this is for the modal window that pops up when the user clicks on the product icon
// this is needed to prevent rerendering of Modal component
import ModalWrapper from "./components/styledComponents/ModalWrapper";
import { SIZES } from "./components/global/constants";
// import env from "react-dotenv";

const CLIENT_ID_TEST = process.env.REACT_APP_PAYPAL_CLIENT_ID_TEST;

const App = () => {
  // to get the exchange rate
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchExchangeRate());
  // }, [dispatch]);

  return (
    <Provider store={store}>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID_TEST }}>
        <AppStyle>
          <BodyStyle>
            <ModalWrapper />
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </BodyStyle>
          <CopyrightComponent />
        </AppStyle>
      </PayPalScriptProvider>
    </Provider>
  );
};

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${SIZES.minHeight}; // this makes the footer to be at the bottom
`;
const BodyStyle = styled.div`
  flex: 1000 0 auto; // this makes the footer to be at the bottom
`;

export default App;
