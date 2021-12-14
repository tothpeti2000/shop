import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useOrderItemContext } from "../../OrderItemContext";
import CartSummary from "./CartSummary";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const { orderItems, total } = useOrderItemContext();

  return (
    <Box w="50%" minH="calc(100vh - 100px)" mx="10%">
      <CartSummary orderItems={orderItems} />
      <OrderSummary total={total} />
    </Box>
  );
};

export default Checkout;
