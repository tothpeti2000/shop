import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

const NavBarContainer: FC = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      px="10%"
      bgColor="black"
      border="1px solid black"
      color="white"
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
