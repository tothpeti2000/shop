import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Center, Code, HStack, Text, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import Product from "../../interfaces/IProduct";

const ProductCard = (props: Product) => {
  //const imgSrc = "https://picsum.photos/500";
  const toast = useToast();

  return (
    <Center>
      <HStack
        spacing={3}
        width="50%"
        border="1px solid black"
        borderRadius="lg"
      >
        <Image
          src={props.image}
          alt="Skillet logo"
          width="50%"
          borderLeftRadius="lg"
        />
        <VStack spacing={5}>
          <HStack>
            <Text fontSize="3xl" fontWeight="bold">
              {props.title}
            </Text>
            <Badge fontSize="0.8em">New</Badge>
          </HStack>
          <Code>Rating here: {props.rating}</Code>
          <Text>{props.description}</Text>
          <Button
            onClick={() =>
              toast({
                title: "Item added to cart",
                description: "We've added the product to your cart",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            {console.log(props)}
            <Text mr={1}>{props.price}$</Text>
            Add to cart
          </Button>
        </VStack>
      </HStack>
    </Center>
  );
};

export default ProductCard;
