import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;

  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  /* transition: 0.3s ease-in-out; */
  right: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  overflow: scroll;

  @media screen and (max-width: 400px) {
    max-width: 400px;
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;
export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 50px;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;

  text-align: center;
  max-height: 100%;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const ProductName = styled.p`
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #000;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ProductAmmount = styled.p`
  justify-content: center;
  font-size: 1rem;
  width: 30px;
  height: 30px;
  text-decoration: none;
  list-style: none;
  color: #000;
  background: #fff;
`;

export const MinusButton = styled(FaMinus)`
  color: #000;
`;

export const PlusButton = styled(FaPlus)`
  color: #000;
`;

export const CounterButton = styled.button`
  justify-content: center;
  font-size: 1rem;
  padding: 5px;
  background: transparent;
  border: transparent;
  text-decoration: none;
  list-style: none;
  color: #000;
  cursor: pointer;
`;

export const ProductPrice = styled.p`
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  height: 30px;
  list-style: none;
  color: #000;
  background: #fff;
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
