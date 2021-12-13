import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ICartSummaryProps from "../../interfaces/ICartSummaryProps";
import CartItem from "../Cart/CartItem";

const CartSummary = (props: ICartSummaryProps) => {
  return (
    <Box p={10} border="1px solid black">
      <Heading>My Cart</Heading>
      {props.orderItems.map((item) => {
        return <CartItem {...item} />;
      })}
    </Box>
  );
};

export default CartSummary;
