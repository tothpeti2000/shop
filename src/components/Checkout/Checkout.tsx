import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useOrderItemContext } from "../../OrderItemContext";
import CartSummary from "./CartSummary";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const { orderItems } = useOrderItemContext();

  const GetTotal = (): number => {
    let sum = 0;

    orderItems.forEach(
      (orderItem) => (sum += orderItem.quantity * orderItem.price)
    );

    return sum;
  };

  const [total, setTotal] = useState(GetTotal());

  return (
    <Flex justifyContent="space-evenly" minH="calc(100vh - 100px)">
      <CartSummary orderItems={orderItems} />
      <OrderSummary total={total} />
    </Flex>
  );
};

export default Checkout;
