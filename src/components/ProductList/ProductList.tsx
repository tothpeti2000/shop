import { Box, Flex } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";
import IProduct from "../../interfaces/IProduct";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();

    setProducts(items);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <Flex>
      <Box bgColor="lightgrey" flex="1" h="100vh" me={2}>
        Hello World!
      </Box>
      <Skeleton isLoaded={isLoaded} flex="3">
        <Flex wrap="wrap" justifyContent="space-around">
          {products.map((p) => {
            return (
              <ProductListItem
                key={p.id}
                id={p.id}
                image={p.image}
                title={p.title}
                price={p.price}
              />
            );
          })}
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export default ProductList;
