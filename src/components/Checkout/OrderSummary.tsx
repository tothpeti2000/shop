import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PromoCode from "./PromoCode";

interface IProps {
  total: number;
}

const OrderSummary = (props: IProps) => {
  const [discount, setDiscount] = useState(0);

  const HandleClick = (input: string) => {
    if (input === "Skillet") {
      setDiscount(50);
    }
  };

  return (
    <Box fontSize="xl" p={10} position="fixed" top="100px" right="10%">
      <Heading>Order Summary</Heading>
      <Divider my={5} />

      <Text>Subtotal: {props.total.toFixed(2)}$</Text>
      <Divider my={5} />

      <Text>Discount: {discount}%</Text>
      <Text>Shipping: FREE</Text>
      <Divider my={5} />

      <Text fontWeight="bold">
        Total: {parseFloat(props.total.toFixed(2)) * (1 - discount / 100)}$
      </Text>
      <PromoCode OnClick={HandleClick} />
      <Link to="/submit">
        <Button w="100%" colorScheme="teal">
          Submit Order
        </Button>
      </Link>
    </Box>
  );
};

export default OrderSummary;
