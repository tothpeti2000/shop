import { useDisclosure } from "@chakra-ui/hooks";
import {
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useOrderItemContext } from "../../OrderItemContext";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { orderItems, total } = useOrderItemContext();

  const GetSum = (): number => {
    let sum = 0;

    orderItems.forEach((item) => (sum += item.price * item.quantity));

    return parseFloat(sum.toFixed(2));
  };

  return (
    <>
      <IconButton
        aria-label="Cart"
        colorScheme="black"
        icon={<Icon as={FaShoppingCart} boxSize="80%" />}
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Badge>{orderItems.length}</Badge>

      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent textAlign="center">
          <DrawerCloseButton color="white" />
          <DrawerHeader bgColor="black" color="white">
            Cart
          </DrawerHeader>

          <DrawerBody>
            {orderItems.length > 0
              ? orderItems.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })
              : "Cart is empty"}
          </DrawerBody>

          <DrawerFooter>
            <Summary total={total} onClick={onClose} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
