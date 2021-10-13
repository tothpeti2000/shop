import { Stack } from "@chakra-ui/layout";
import React from "react";
import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <Stack direction="row">
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About AS</NavItem>
    </Stack>
  );
};

export default NavLinks;
