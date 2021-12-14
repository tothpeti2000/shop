import { useToast, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useOrderItemContext } from "../../OrderItemContext";

interface Props {
  id: number;
  title: string;
  price: number;
}

const AddToCartButton = (props: Props) => {
  const { AddItem } = useOrderItemContext();
  const toast = useToast();

  const ShowToast = () => {
    toast({
      title: "Item added",
      description: "We've added the item to your cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const HandleClick = () => {
    AddItem(props.id, props.title, props.price);
    ShowToast();
  };

  return (
    <Button
      colorScheme="red"
      w="100%"
      leftIcon={<Icon as={FaCartPlus} />}
      onClick={HandleClick}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
