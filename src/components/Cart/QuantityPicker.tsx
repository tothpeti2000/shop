import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React, { useState } from "react";
import IQuantityPickerProps from "../../interfaces/IQuantityPickerProps";
import { useOrderItemContext } from "../../OrderItemContext";

const QuantityPicker = (props: IQuantityPickerProps) => {
  const { GetItemQuantity } = useOrderItemContext();
  const [value, setValue] = useState(GetItemQuantity(props.ID));

  const HandleChange = (delta: number) => {
    props.onChange(props.ID, value + delta);
    setValue(value + delta);
  };

  return (
    <NumberInput size="sm" value={value} min={1}>
      <NumberInputField focusBorderColor="red.200" />
      <NumberInputStepper>
        <NumberIncrementStepper children="+" onClick={() => HandleChange(1)} />
        <NumberDecrementStepper children="-" onClick={() => HandleChange(-1)} />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
