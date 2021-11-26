import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import React from "react";

interface IProps {
  total: number;
}
const Summary = (props: IProps) => {
  return (
    <>
      {props.total > 0 ? (
        <>
          <Heading>Total: {props.total}$</Heading>
          <Button>Checkout</Button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Summary;
