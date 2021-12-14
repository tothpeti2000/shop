import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React, { useState } from "react";
import { useOrderItemContext } from "../../OrderItemContext";

interface IQuantityPickerProps {
  ID: number;
}

const QuantityPicker = (props: IQuantityPickerProps) => {
  const { GetItemQuantity, UpdateItemQuantity } = useOrderItemContext();
  const [value, setValue] = useState(GetItemQuantity(props.ID));

  const HandleIncrement = () => {
    UpdateItemQuantity(props.ID, value + 1);
    setValue(value + 1);
  };

  const HandleDecrement = () => {
    UpdateItemQuantity(props.ID, value - 1);
    setValue(value - 1);
  };

  return (
    <NumberInput size="sm" value={value} min={1}>
      <NumberInputField focusBorderColor="red.200" />
      <NumberInputStepper>
        <NumberIncrementStepper children="+" onClick={HandleIncrement} />
        <NumberDecrementStepper children="-" onClick={HandleDecrement} />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
