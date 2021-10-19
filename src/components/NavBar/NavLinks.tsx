import { Flex } from "@chakra-ui/layout";
import React from "react";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  return (
    <Flex align="center">
      <SearchBar />
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About AS</NavItem>
    </Flex>
  );
};

export default NavLinks;
