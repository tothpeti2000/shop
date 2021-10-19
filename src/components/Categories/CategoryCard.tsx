import { Box, Circle, Heading, Link, Text } from "@chakra-ui/layout";
import React, { FC } from "react";

const CategoryCard: FC = ({ children }) => {
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
      <Text fontSize="xl">{children}</Text>
    </Box>
  );
};

export default CategoryCard;
