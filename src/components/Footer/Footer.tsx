import { Box, Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import Details from "./Details";
import Form from "./Form";

const Footer = () => {
  const bgImage = `${process.env.PUBLIC_URL}/images/footer.jpg`;

  return (
    <Box h="500px" bgImage={bgImage} color="white">
      <Heading>Logo</Heading>
      <Flex w="80%" justify="space-between" border="1px solid white">
        <Details />
        <Form />
      </Flex>
    </Box>
  );
};

export default Footer;
