import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";
import FilterHeader from "./FilterHeader";
import { ProductListProvider } from "../../ProductListContext";

const ProductPicker = () => {
  return (
    <Flex direction="column" p={10}>
      <ProductListProvider>
        <FilterHeader />
        <Flex>
          <Filter />
          <ProductList />
        </Flex>
      </ProductListProvider>
    </Flex>
  );
};

export default ProductPicker;
