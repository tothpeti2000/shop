import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IParams from "../../interfaces/IParams";
import IProduct from "../../interfaces/IProduct";
import { useOrderItemContext } from "../../OrderItemContext";
import QuantityPicker from "../Cart/QuantityPicker";
import AddToCartButton from "../ProductList/AddToCartButton";
import RatingStars from "./RatingStars";

const ProductDetails = () => {
  const { ID } = useParams<IParams>();
  const [product, setProduct] = useState<IProduct>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    title: "",
    rating: { count: 0, rate: 0 },
    quantity: 1,
  });
  const { GetItemQuantity } = useOrderItemContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchProduct = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${ID}`);
    const product = await data.json();

    setProduct(product);
    setIsLoaded(true);
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Flex w="80%" h="calc(100vh - 100px)" p={50} m="auto">
        <Image src={product.image} />
        <Flex direction="column" justifyContent="space-between" px={10} py={5}>
          <Box>
            <Heading mb={2}>{product.title}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              ${product.price}
            </Text>
            <RatingStars ratingValue={product.rating.rate} />
          </Box>
          <Text fontSize="lg">{product.description}</Text>
          <Box>
            <Box fontSize="lg" mb={2}>
              In cart: {GetItemQuantity(parseInt(ID))}
            </Box>
            <AddToCartButton
              id={product.id}
              title={product.title}
              price={product.price}
            />
          </Box>
        </Flex>
      </Flex>
    </Skeleton>
  );
};

export default ProductDetails;
