import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/number-input";
import React from "react";

const QuantityPicker = () => {
  return (
    <NumberInput size="sm" defaultValue={1} min={1}>
      <NumberInputField focusBorderColor="red.200" />
      <NumberInputStepper>
        <NumberIncrementStepper children="+" />
        <NumberDecrementStepper children="-" />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
