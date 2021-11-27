import { Box } from "@chakra-ui/layout";
import React from "react";
import { useOrderItemContext } from "../../OrderItemContext";

const Checkout = () => {
  const { orderItems } = useOrderItemContext();

  return (
    <Box h="calc(100vh - 100px)">
      {orderItems.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <h2>{item.quantity}</h2>
          </>
        );
      })}
    </Box>
  );
};

export default Checkout;
