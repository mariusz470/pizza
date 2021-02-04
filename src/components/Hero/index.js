import React from "react";
import { useCart, useCartDispatch } from "../../CartContext";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroP,
  HeroH1,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const { isOpen, ordering } = useCart();
  const dispatch = useCartDispatch();

  const toggle = () => {
    dispatch({ type: "TOGGLE_SIDEBAR", payload: !isOpen });
  };

  return (
    <HeroContainer>
      <Navbar ordering={ordering} toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza</HeroH1>
          <HeroP> Ready in 120 seconds</HeroP>
          <HeroBtn>Place Order </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
