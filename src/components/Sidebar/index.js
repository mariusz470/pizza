import React from "react";
import { useCart, useCartDispatch } from "../../CartContext";

import {
  SidebarBtnWrap,
  SidebarContainer,
  ProductCard,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarRoute,
  ProductAmmount,
  ProductName,
  ProductPrice,
  CounterButton,
  CounterWrapper,
  MinusButton,
  PlusButton,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const { cart } = useCart();

  const dispatch = useCartDispatch();

  function addToCartHandler(index) {
    dispatch({ type: "INCREASE", payload: index });
  }

  function removeFromCartHandler(index, count) {
    if (count < 2) {
      dispatch({ type: "REMOVE", payload: index });
    } else {
      dispatch({ type: "DECREASE", payload: index });
    }
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <h1>Your order</h1>
        <br />
        {cart.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductName>{product.name}</ProductName>
              <CounterWrapper>
                <CounterButton
                  onClick={() => removeFromCartHandler(index, product.count)}
                >
                  <MinusButton />
                </CounterButton>{" "}
                <ProductAmmount> {product.count} </ProductAmmount>
                <CounterButton onClick={() => addToCartHandler(index)}>
                  {" "}
                  <PlusButton />{" "}
                </CounterButton>
              </CounterWrapper>
              <ProductPrice> ${product.price * product.count} </ProductPrice>
            </ProductCard>
          );
        })}
        {/* <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink> */}
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
