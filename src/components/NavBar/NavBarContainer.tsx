import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

const NavBarContainer: FC = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      px="10%"
      h="70px"
      bgColor="black"
      color="white"
      sx={{ pos: "sticky", top: "0" }}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
