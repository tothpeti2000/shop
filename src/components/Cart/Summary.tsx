import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ISummaryProps from "../../interfaces/ISummaryProps";

const Summary = (props: ISummaryProps) => {
  return (
    <Box w="100%">
      {props.total > 0 ? (
        <Flex direction="column" align="start">
          <Heading>Total: {props.total}$</Heading>
          <Button
            alignSelf="stretch"
            colorScheme="teal"
            onClick={props.onClick}
          >
            <Link to="/checkout">Checkout</Link>
          </Button>
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Summary;
