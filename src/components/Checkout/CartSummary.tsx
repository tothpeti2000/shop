import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ICartItem from "../../interfaces/ICartItem";
import CartItem from "../Cart/CartItem";

interface ICartSummaryProps {
  orderItems: ICartItem[];
}

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
