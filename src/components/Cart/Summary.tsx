import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  total: number;
  onClick: () => void;
}

const Summary = (props: IProps) => {
  return (
    <>
      {props.total > 0 ? (
        <>
          <Heading>Total: {props.total}$</Heading>
          <Link to="/checkout">
            <Button onClick={props.onClick}>Checkout</Button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Summary;
