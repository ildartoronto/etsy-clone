import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS, SIZES } from "./../../components/global/constants";
import CartItem from "./CartItem";
import {
  changeItemInCart,
  removeItemFromCart,
} from "../../redux/slices/CartSlice";
import TotalPriceComp from "../../components/styledComponents/TotalPriceComponent";
import CartButtons from "./CartButtons";
import CartTitle from "./CartTitle";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const onRemoveItemHandler = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const onChangeItemHandler = (item, ringSize) => {
    const payload = { item, ringSize };
    // console.log("onChangeItemHandler", payload);
    dispatch(changeItemInCart(payload));
  };

  const getCartItems = () => {
    if (cartItems.length === 0) return null;
    return cartItems.map((item) => (
      <CartItem
        key={item.nanoid}
        item={item}
        imageUrl={item.imageUrl}
        onChangeItem={onChangeItemHandler}
        onRemoveItem={onRemoveItemHandler}
      />
    ));
  };

  return (
    <BodyStyle>
      <CartTitle />
      {getCartItems()}
      <TotalPriceComp items={cartItems} />
      <CartButtons />
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-image: linear-gradient(
    180deg,
    ${COLORS.mainBackground},
    ${COLORS.white}
  );
`;

export default CartPage;
