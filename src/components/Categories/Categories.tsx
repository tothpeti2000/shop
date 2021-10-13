import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Flex h="500px" align="center" mt={2} border="1px solid black">
      <CategoryCard>Men's collection</CategoryCard>
      <CategoryCard>Accessories</CategoryCard>
      <CategoryCard>Women's collection</CategoryCard>
      <Link bgColor="grey">Hello World!</Link>
    </Flex>
  );
};

export default Categories;
