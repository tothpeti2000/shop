import { Stack } from "@chakra-ui/layout";
import { RadioGroup, Radio } from "@chakra-ui/radio";
import React from "react";

const CategoryPicker = () => {
  const [value, setValue] = React.useState("1");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Radio value="1">Show all</Radio>
        <Radio value="2">Men's clothing</Radio>
        <Radio value="3">Women's clothing</Radio>
        <Radio value="4">Jewelery</Radio>
        <Radio value="5">Electronics</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default CategoryPicker;
