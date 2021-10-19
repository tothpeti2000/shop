import { Flex } from "@chakra-ui/layout";
import React from "react";
import Cart from "../Cart/Cart";
import LoginButton from "./LoginButton";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  return (
    <Flex align="center">
      <SearchBar />
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About AS</NavItem>
      <LoginButton />
      <Cart />
    </Flex>
  );
};

export default NavLinks;
