import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ISummaryProps from "../../interfaces/ISummaryProps";

const Summary = (props: ISummaryProps) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%">
      {props.total > 0 ? (
        <>
          <Heading>Total: {props.total}$</Heading>
          <Link to="/checkout">
            <Button
              colorScheme="teal"
              rightIcon={<Icon as={FaCheckCircle} />}
              onClick={props.onClick}
            >
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Summary;
