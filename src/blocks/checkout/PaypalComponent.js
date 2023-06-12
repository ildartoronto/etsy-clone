import React from "react";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { getPrice } from "../../components/global/utils";
import { selectIsDataValid } from "../../redux/slices/CheckoutSlice";

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
