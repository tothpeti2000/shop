import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Collapse, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const GetIcon = () => {
    return isOpen ? <></> : <SearchIcon />;
  };

  return (
    <>
      <IconButton
        colorScheme="black"
        aria-label="Search"
        icon={GetIcon()}
        onClick={onToggle}
        _focus={{ outline: "none" }}
      />
      <Collapse in={isOpen} animateOpacity>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Collapse>
    </>
  );
};

export default SearchBar;
