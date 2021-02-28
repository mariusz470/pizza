import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  width: auto;
  height: auto;
  position: fixed;
  top: 25px;
  right: 50px;
  cursor: pointer;
  padding: 10px;
  color: #fff;
  border: ${({ ordering }) => (ordering ? "2px solid #e31837" : "")};
  border-radius: 5px;
  background: ${({ ordering }) => (ordering ? "#e31837" : "transparent")};
  transition: 0.2s ease-in-out;

  p {
    font-weight: bold;
    font-size: ${({ ordering }) => (ordering ? "1.2em" : "1em")};
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  width: auto;
  height: auto;
`;
