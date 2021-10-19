import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/modal";
import { Button, Heading, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

export interface Product {
  id: number;
  name: String;
  price: number;
  quantity: number;
}

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, SetItems] = useState<Product[]>([]);
  const [ID, SetID] = useState(0);

  const AddItem = () => {
    const product = {
      id: ID,
      name: `Product #${ID + 1}`,
      price: 1000,
      quantity: 1,
    };

    SetItems(items.concat(product));
    SetID(ID + 1);
  };

  const GetSum = () => {
    let sum = 0;

    items.forEach((item) => (sum += item.price));

    return sum;
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
      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent textAlign="center">
          <DrawerCloseButton color="white" />
          <DrawerHeader bgColor="black" color="white">
            Cart
          </DrawerHeader>

          <DrawerBody>
            {items.length > 0
              ? items.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  );
                })
              : "Cart is empty"}
          </DrawerBody>

          <DrawerFooter>
            <Heading>{items.length > 0 ? `Total: ${GetSum()}$` : ""}</Heading>
            <Button colorScheme="teal" onClick={AddItem}>
              +
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
