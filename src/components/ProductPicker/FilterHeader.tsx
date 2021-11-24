import { Flex, Heading, Select } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

const FilterHeader = () => {
  const [selectedOption, SetSelectedOption] = useState("");

  const HandleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    SetSelectedOption(e.target.value);
    console.log(e.target);
    alert(selectedOption);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb={5}>
      <Heading w="20%">Filter by</Heading>
      <Select
        placeholder="Sort by"
        value={selectedOption}
        onChange={(e) => HandleSelection(e)}
        w="20%"
        borderColor="black"
      >
        <option value="priceLTH">Price (low to high)</option>
        <option value="priceHTL">Price (high to low)</option>
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
      </Select>
    </Flex>
  );
};

export default FilterHeader;
