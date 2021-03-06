import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import IProduct from "../../interfaces/IProduct";
import AddToCartButton from "./AddToCartButton";

const ProductListItem = (props: IProduct) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      w="20%"
      p={2}
      mx={5}
      mb={20}
      _hover={{ boxShadow: "dark-lg" }}
      transition="0.5s"
      border="1px solid lightgrey"
      borderRadius={10}
    >
      <Link to={`/products/${props.id}`}>
        <Image src={props.image} alt="Product" />
      </Link>
      <Box>
        <Text fontWeight="bold">{props.title}</Text>
        <Text>{`$${props.price}`}</Text>
        <AddToCartButton {...props} />
      </Box>
    </Flex>
  );
};

export default ProductListItem;
