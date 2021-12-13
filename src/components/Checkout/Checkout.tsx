import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { useOrderItemContext } from "../../OrderItemContext";
import CartSummary from "./CartSummary";

const Checkout = () => {
  const { orderItems } = useOrderItemContext();

  return (
    <Flex
      justifyContent="space-between"
      minH="calc(100vh - 100px)"
      px="10%"
      border="1px solid black"
    >
      <CartSummary orderItems={orderItems} />
      <Box border="1px solid black">Order Summary</Box>
    </Flex>
  );
};

export default Checkout;
