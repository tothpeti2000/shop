import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import LoginButton from "./LoginButton";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const NavLinks = () => {
  return (
    <Flex align="center">
      <SearchBar />
      <Link to="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/products">
        <NavItem>Shop</NavItem>
      </Link>
      <NavItem>About AS</NavItem>
      <LoginButton />
      <Cart />
    </Flex>
  );
};

export default NavLinks;
