import { Box, Flex } from "@chakra-ui/layout";
import { CloseButton, Text } from "@chakra-ui/react";
import React from "react";
import ICartItem from "../../interfaces/ICartItem";
import { useOrderItemContext } from "../../OrderItemContext";
import QuantityPicker from "./QuantityPicker";

const CartItem = (props: ICartItem) => {
  const { DeleteItem } = useOrderItemContext();

  return (
    <Flex
      align="center"
      textAlign="start"
      p={2}
      mb={5}
      boxShadow="dark-lg"
      gridGap="10px"
    >
      <Box flex="1" alignSelf="stretch" bgColor="gray.200"></Box>
      <Flex direction="column" align="flex-start" flex="2">
        <Text>{props.title}</Text>
        <Text fontWeight="bold">{props.price}$</Text>
        <QuantityPicker ID={props.id} />
      </Flex>
      <CloseButton alignSelf="start" onClick={() => DeleteItem(props.id)} />
    </Flex>
  );
};

export default CartItem;
