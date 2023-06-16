import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { getPrice } from "../../components/global/utils";
import { selectIsDataValid } from "../../redux/slices/CheckoutSlice";
import { clearCart } from "../../redux/slices/CartSlice";

const CLIENT_ID_TEST = process.env.REACT_APP_PAYPAL_CLIENT_ID_TEST;

const PaypalComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const checkout = useSelector((state) => state.checkout);
  const isDataValid = useSelector(selectIsDataValid);
  const { shopCurrency, currencyRate } = useSelector((state) => state.currency);

  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const firstNameValue = checkout.firstNameValue;
  const lastNameValue = checkout.lastNameValue;
  const streetValue = checkout.streetValue;
  const cityValue = checkout.cityValue;
  const provinceValue = checkout.provinceValue;
  const postalCodeValue = checkout.postalCodeValue;
  const countryValue = checkout.countryValue;

  const maxTitle = 100;
  const purchase_units = cartItems.map((item) => ({
    description:
      item.title.substring(0, maxTitle) + ", Size: " + item.ringSize.toString(),
    amount: {
      currency_code: shopCurrency,
      value: getPrice(item.price, currencyRate),
    },
  }));

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: purchase_units,
        shipping: {
          name: {
            full_name: `${firstNameValue} ${lastNameValue}`, // Set the customer's name
          },
          address: {
            address_line_1: streetValue, // address_line_1: "123 Townsend St",
            admin_area_2: cityValue, // admin_area_2: "San Francisco",
            admin_area_1: provinceValue, // admin_area_1: "CA",
            postal_code: postalCodeValue, // postal_code: "94107",
            country_code: countryValue, // country_code: "US",
          },
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // cleans up the cart
      dispatch(clearCart());
      // sends a customer to a TransactionCompletedComp page
      navigate("/checkoutCompleted", { state: { details } });
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error occurred with your payment ");
  };

  const initialOptions = {
    "client-id": CLIENT_ID_TEST,
    currency: shopCurrency,
  };

  // <PayPalScriptProvider options={initialOptions} deferLoading={true}>
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        disabled={!isDataValid}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        // onCancel={() => setShow(false)}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalComponent;

/*onApprove={async (data, actions) => {
          try {
            const order = await actions.order.capture();
            const name = order.payer.name.given_name;
            // cleans up the cart
            dispatch(clearCart());
            // sends a customer to a Product page
            navigate("/products");
            // show a page with a message that the transaction is completed
            return <TransactionCompletedComp payerName={name} />;
          } catch (err) {
            console.log(err);
          }
}}*/
