import * as React from "react";
import { ChakraProvider, theme, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ProductCard from "./components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./components/Categories/Categories";

const App = () => {
  const [products, setProducts] = useState([
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 10,
    },
    {
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 10,
    },
  ]);

  /*useEffect(() => {
    const GetProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedProducts = await response.json();
      console.log(fetchedProducts);
      //setProducts(fetchedProducts);
      console.log(products);
    };

    GetProducts();
  }, []);*/

  return (
    <ChakraProvider theme={theme}>
      {/*<h1>Hello World!</h1>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={5}>
        {products.map((product) => {
          return <ProductCard {...product} />;
        })}
      </VStack>*/}
      <NavBar />
      <Categories />
    </ChakraProvider>
  );
};

export default App;
