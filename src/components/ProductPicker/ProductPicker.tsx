import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";
import FilterHeader from "./FilterHeader";

const ProductPicker = () => {
  return (
    <Flex direction="column" p={10}>
      <FilterHeader />
      <Flex>
        <Filter />
        <ProductList />
      </Flex>
    </Flex>
  );
};

export default ProductPicker;
