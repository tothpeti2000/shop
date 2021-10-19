import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box h="1000px" bgColor="gray.800" color="white">
      <Flex direction="column" align="center" justify="center">
        <Heading>Logo</Heading>
        <Text>AWESOME SNEAKERS</Text>
        <Button>SHOP NOW</Button>
      </Flex>
    </Box>
  );
};

export default Banner;
