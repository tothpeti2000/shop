import { Flex, Link } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";

const NavBrand = () => {
  return (
    <Flex align="center">
      <Logo />
      <Link
        href="#"
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        Awesome Sneakers
      </Link>
    </Flex>
  );
};

export default NavBrand;
