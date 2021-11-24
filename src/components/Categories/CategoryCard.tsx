import { Box, Circle, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";

interface IProps {
  title: string;
}

const CategoryCard = (props: IProps) => {
  return (
    <Box flex="1" textAlign="center" p={5}>
      <Link href="#">
        <Circle
          size="300px"
          bg="white"
          color="black"
          boxShadow="dark-lg"
          m="auto"
          mb={5}
        >
          <Heading>Image</Heading>
        </Circle>
      </Link>
      <Text fontSize="xl">{props.title}</Text>
    </Box>
  );
};

export default CategoryCard;
