import { Stack } from "@chakra-ui/layout";
import { RadioGroup, Radio } from "@chakra-ui/radio";
import React from "react";

const CategoryPicker = () => {
  const [value, setValue] = React.useState("1");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Radio value="1">Men's clothing</Radio>
        <Radio value="2">Women's clothing</Radio>
        <Radio value="3">Jewelery</Radio>
        <Radio value="4">Electronics</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default CategoryPicker;
