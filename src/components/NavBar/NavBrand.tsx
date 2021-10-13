import { Link, Stack } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";

const NavBrand = () => {
  return (
    <Stack direction="row" align="center">
      <Logo />
      <Link
        href="#"
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        Awesome Sneakers
      </Link>
    </Stack>
  );
};

export default NavBrand;
