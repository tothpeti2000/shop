import { Stack } from "@chakra-ui/layout";
import React from "react";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  return (
    <Stack direction="row" align="center">
      <SearchBar />
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About AS</NavItem>
    </Stack>
  );
};

export default NavLinks;
