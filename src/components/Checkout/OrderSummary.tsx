import { Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import PromoCode from "./PromoCode";

interface IProps {
  total: number;
}

const OrderSummary = (props: IProps) => {
  const [discount, setDiscount] = useState(0);

  const HandleClick = (input: string) => {
    if (input === "Skillet") {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  };

  return (
    <Box fontSize="xl">
      <Heading>Order Summary</Heading>
      <Text>Subtotal: {props.total.toFixed(2)}$</Text>
      <Text>Discount: {discount}%</Text>
      <Text>Shipping: FREE</Text>
      <Text>
        Total: {parseFloat(props.total.toFixed(2)) * (1 - discount / 100)}
      </Text>
      <PromoCode OnClick={HandleClick} />
    </Box>
  );
};

export default OrderSummary;
