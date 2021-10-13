import { Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

const ChakraUIComponent: FC<{ title: String }> = ({ children, title }) => {
  return (
    <Box mx={5} my={10} p={5} boxShadow="dark-lg">
      <Heading>{title}</Heading>
      {children}
    </Box>
  );
};

export default ChakraUIComponent;
