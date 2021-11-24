import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Square } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import ICartItem from "../../interfaces/ICartItem";
import { useOrderItemContext } from "../../OrderItemContext";
import QuantityPicker from "./QuantityPicker";

const CartItem = (props: ICartItem) => {
  const { DeleteItem } = useOrderItemContext();

  return (
    <Flex align="center" p={2} mb={5} boxShadow="dark-lg" gridGap="10px">
      <Box flex="1" alignSelf="stretch" bgColor="gray.200" />
      <Flex direction="column" align="flex-start" flex="2">
        <Text>{props.title}</Text>
        <Text fontWeight="bold">{props.price}$</Text>
        <QuantityPicker />
      </Flex>
      <Button flex="0.5" colorScheme="red" onClick={() => DeleteItem(props.id)}>
        Delete
      </Button>
    </Flex>
  );
};

export default CartItem;
