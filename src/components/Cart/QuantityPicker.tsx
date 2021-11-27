import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/number-input";
import React, { useState } from "react";
import { useOrderItemContext } from "../../OrderItemContext";

interface IProps {
  ID: number;
  onChange: (ID: number, quantity: number) => void;
}

const QuantityPicker = (props: IProps) => {
  const { GetItemQuantity } = useOrderItemContext();
  const [value, setValue] = useState(GetItemQuantity(props.ID));

  const HandleIncrement = () => {
    props.onChange(props.ID, value + 1);
    setValue(value + 1);
  };

  const HandleDecrement = () => {
    props.onChange(props.ID, value - 1);
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
