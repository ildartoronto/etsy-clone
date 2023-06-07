import React from "react";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { getPrice } from "../../components/global/utils";
import { selectIsDataValid } from "../../redux/slices/CheckoutSlice";
//  "@paypal/react-paypal-js": "^7.8.3",
//    "browserify-zlib": "^0.2.0",
//"react-bootstrap": "^2.0.3",
//    "react-scripts": "^5.0.1",
//  "devDependencies": {
  //"http-proxy-middleware": "^2.0.6"
//}
//  "redux-toolkit": "^1.1.2",
// "@testing-library/jest-dom": "^5.14.1",
// "@testing-library/react": "^11.2.7",
// "@testing-library/user-event": "^12.8.3",
// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },
export const PaypalComponent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const checkout = useSelector((state) => state.checkout);
  const isDataValid = useSelector(selectIsDataValid);
  const { shopCurrency, currencyRate } = useSelector((state) => state.currency);

  let purchase_units = [];

  const create_purchase_units = () =>
    cartItems.map((item) =>
      purchase_units.push({
        description: {
          title: item.title,
          ringSize: item.ringSize,

        },
        amount: {
          currency_code: shopCurrency,
          value: getPrice(item.price, currencyRate),
          shipping: checkout,
        },
      })
    );

  // console.log(purchase_units);

  return (
    <PayPalButtons disabled={!isDataValid}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: create_purchase_units(),
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        return actions.order.capture().then((details) => {
          const name = details.payer.name.given_name;
          alert(`Transaction completed by ${name}`);
        });
      }}
    />
  );
};

// purchase_units: [
//   { cartItems.map((item) =>
//     item.name), description: "Your order", amount: { value: "1.99" } },

//     description:
//     amount: {
//       value: "1.99",
//     },
//   },
// ]
