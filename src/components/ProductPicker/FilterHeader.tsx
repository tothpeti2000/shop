import { Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";

const FilterHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={5}>
      <Heading w="20%">Filter by</Heading>
      <Select placeholder="Sort by" w="20%">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
};

export default FilterHeader;
