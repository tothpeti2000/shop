import { Flex, Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";
import Fade from "react-awesome-reveal";

const Categories = () => {
  return (
    <Box bg="grey" color="white" p={10} textAlign="center">
      <Heading>Shop categories</Heading>
      <Fade>
        <Flex p={5}>
          <CategoryCard>Men's collection</CategoryCard>
          <CategoryCard>Accessories</CategoryCard>
          <CategoryCard>Women's collection</CategoryCard>
        </Flex>
      </Fade>
    </Box>
  );
};

export default Categories;
