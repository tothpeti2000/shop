import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ICartItem from "../../interfaces/ICartItem";
import CartItem from "../Cart/CartItem";

interface ICartSummaryProps {
  orderItems: ICartItem[];
}

const CartSummary = (props: ICartSummaryProps) => {
  return (
    <Box p={10}>
      <Heading>My Cart</Heading>
      <Box mt={5}>
        {props.orderItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default CartSummary;
