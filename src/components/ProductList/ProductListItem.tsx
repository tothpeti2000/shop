import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import IProductListItem from "../../interfaces/IProductListItem";
import { useOrderItemContext } from "../../OrderItemContext";

const ProductListItem = (props: IProductListItem) => {
  const { AddItem } = useOrderItemContext();
  const toast = useToast();

  const ShowToast = () => {
    toast({
      title: "Item added",
      description: "We've added the item to your cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const OnClick = () => {
    AddItem(props.id, props.title, props.price);
    ShowToast();
  };

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
        <Image src={props.image} alt="Product" /*border="1px solid black"*/ />
      </Link>
      <Box>
        <Text fontWeight="bold">{props.title}</Text>
        <Text>{`$${props.price}`}</Text>

        <Button colorScheme="red" w="100%" onClick={OnClick}>
          Add to cart
        </Button>
      </Box>
    </Flex>
  );
};

export default ProductListItem;
