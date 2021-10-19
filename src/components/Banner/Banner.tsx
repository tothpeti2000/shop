import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  const logo = `${process.env.PUBLIC_URL}/images/mercedes.jpg`;

  return (
    <Flex
      h="800px"
      bgImage={logo}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      bgColor="gray.800"
      color="white"
      align="center"
      justify="center"
    >
      <Flex direction="column" align="center">
        <Heading fontSize={100}>Logo</Heading>
        <Text p={5} fontSize={50}>
          AWESOME SNEAKERS
        </Text>
        <Button
          p={5}
          fontSize={40}
          color="black"
          _hover={{ bgColor: "black", color: "white" }}
          transition="0.5s"
        >
          SHOP NOW
        </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
