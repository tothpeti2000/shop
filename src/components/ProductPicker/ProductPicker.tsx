import { Flex } from "@chakra-ui/layout";
import React from "react";
import { ProductListProvider } from "../../ProductListContext";
import Filter from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";
import FilterHeader from "./FilterHeader";

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
