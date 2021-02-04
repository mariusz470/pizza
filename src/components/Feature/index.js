import React from "react";
import { useCart, useCartDispatch } from "../../CartContext";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  const dispatch = useCartDispatch();
  const { cart } = useCart();
  function addToCartHandler(id) {
    let newCart = cart;
    const hasProduct = newCart.some((item) => {
      return item.id === id;
    });
    if (hasProduct) {
      const foundProduct = cart.find((item) => {
        return item.id === id;
      });
      const index = cart.indexOf(foundProduct);

      dispatch({ type: "INCREASE", payload: index });
    } else {
      const newProduct = {
        id: 7,
        name: "24carat Pizza",
        desc: "Truffle alfredo sauce topped with 24 carat gold dust.",
        price: 22.99,
        count: 1,
      };

      dispatch({ type: "ADD", payload: newProduct });
      dispatch({ type: "TOGGLE_SIDEBAR", payload: true });
      console.log(cart);
    }
  }

  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton onClick={() => addToCartHandler(7)}>
        Order Now
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
