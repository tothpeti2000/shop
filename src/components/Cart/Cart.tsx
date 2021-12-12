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
import GetSum from "../../Utils";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { orderItems } = useOrderItemContext();

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
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  );
                })
              : "Cart is empty"}
          </DrawerBody>

          <DrawerFooter>
            <Summary total={GetSum(orderItems)} onClick={onClose} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
