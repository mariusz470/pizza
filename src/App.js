import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Choose your favourite" data={productData} />
        <Feature />
        <Products heading="Sweet Treats for You" data={productDataTwo} />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
