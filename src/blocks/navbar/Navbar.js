import styled from "styled-components";
import Logo from "../../blocks/navbar/Logo";
import { NavLink } from "react-router-dom";
import CartComponent from "../../components/styledComponents/CartComponent";
import { COLORS } from "./../../components/global/constants";
import CurrencyIcon from "../../components/styledComponents/CurrencyIcon";

const Navbar = () => {
  return (
    <BodyStyle>
      <NavMenuStyle>
        {/* <NavLink to="/home">
          <Logo />
        </NavLink> */}
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/cart">
          <CartComponent />
        </StyledNavLink>
        <CurrencyIcon />
      </NavMenuStyle>
    </BodyStyle>
  );
};

const BodyStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  // font-size: 1.2rem;
  justify-content: space-around;
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
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
const NavMenuStyle = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${COLORS.mainColor};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  justify-content: space-between;
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

export default Navbar;
