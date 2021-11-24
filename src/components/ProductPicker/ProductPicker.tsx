import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductList from "../ProductList/ProductList";
import FilterHeader from "./FilterHeader";

const ProductPicker = () => {
  return (
    <Flex direction="column" px={10} py={5}>
      <FilterHeader />
      <ProductList />
    </Flex>
  );
};

export default ProductPicker;
