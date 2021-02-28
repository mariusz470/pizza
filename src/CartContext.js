import React, { useContext, useReducer } from "react";

const initialState = {
  cart: [],
  isOpen: false,
  ordering: false,
};
const CartContext = React.createContext(initialState);
const CartDispatchContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}
export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        ordering: true,
        cart: [...state.cart, action.payload],
      };
    // [...state, action.payload]
    case "INCREASE":
      const index = action.payload;
      const increasedArr = [...state.cart];
      const increasedCount = increasedArr[action.payload].count + 1;

      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === index ? { ...item, count: increasedCount } : item
        ),
      };
    case "REMOVE":
      const newArr = [...state.cart];
      newArr.splice(action.payload, 1);
      const lastItem = newArr.length < 1 ? true : false;
      return {
        ...state,
        ordering: !lastItem,
        cart: newArr,
      };
    case "DECREASE":
      const decreasedArr = [...state.cart];
      const decreasedCount = decreasedArr[action.payload].count - 1;

      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === action.payload ? { ...item, count: decreasedCount } : item
        ),
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // {id: 1, count: 1}

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {" "}
        {children}{" "}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
