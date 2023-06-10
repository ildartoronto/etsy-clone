import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartComponent from "../../components/styledComponents/CartComponent";
import CurrencyIcon from "../../components/styledComponents/CurrencyIcon";
import { COLORS } from "./../../components/global/constants";

const Navbar = () => {
  return (
    <NavMenuStyle>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/products">Products</StyledNavLink>
      <StyledNavLink to="/cart">
        <CartComponent />
      </StyledNavLink>
      <CurrencyIcon />
    </NavMenuStyle>
  );
};

const NavMenuStyle = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: fixed;
  background-color: ${COLORS.mainColor};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  justify-content: space-around;
  margin: 0;
  padding: 5px 15px;
  width: 100%;
  &:hover {
    color: ${COLORS.buttonText};
    transition: all 0.3s ease-in-out;
    border: 1 solid red;
  }
  a {
    color: ${COLORS.buttonText};
    text-decoration: none;
    transition: all 0.5s ease;
  }
  .active {
    color: ${COLORS.secondColor};
  }
`;
const StyledNavLink = styled(NavLink)`
  background-color: ${COLORS.mainColor};
  border: 3px solid ${COLORS.mainColor};
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  display: inline;
  color: ${COLORS.buttonText};
  cursor: pointer;
  &:hover {
    border: 3px solid ${COLORS.buttonText};
  }
`;

export default Navbar;
