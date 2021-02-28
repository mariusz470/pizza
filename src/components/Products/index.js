import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductPrice,
  ProductInfo,
  ProductImg,
  ProductDesc,
  ProductCard,
  ProductButton,
  ProductsHeading,
} from "./ProductsElements";
import { useCart, useCartDispatch } from "../../CartContext";

const Products = ({ heading, data }) => {
  const dispatch = useCartDispatch();
  const { cart } = useCart();
  function addToCartHandler(product) {
    let newCart = cart;
    const hasProduct = newCart.some((item) => {
      return item.id === product.id;
    });
    if (hasProduct) {
      const foundProduct = cart.find((item) => {
        return item.id === product.id;
      });
      const index = cart.indexOf(foundProduct);

      dispatch({ type: "INCREASE", payload: index });
      console.log(cart);
    } else {
      const newProduct = {
        ...product,
        count: 1,
      };

      dispatch({ type: "ADD", payload: newProduct });
      console.log(cart);
    }
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductDesc> {product.desc} </ProductDesc>
                <ProductPrice> ${product.price} </ProductPrice>
                <ProductButton onClick={() => addToCartHandler(product)}>
                  {" "}
                  {product.button}{" "}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
