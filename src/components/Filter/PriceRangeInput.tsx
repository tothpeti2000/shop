import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/input";
import React from "react";

type Props = {
  title: String;
};

const PriceRangeInput = (props: Props) => {
  return (
    <InputGroup mb={2}>
      <InputLeftAddon bgColor="grey" color="white" children={props.title} />
      <Input type="number" />
    </InputGroup>
  );
};

export default PriceRangeInput;
