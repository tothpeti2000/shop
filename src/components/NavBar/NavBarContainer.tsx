import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

const NavBarContainer: FC = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      px="20%"
      py="10px"
      bgColor="black"
      border="1px solid black"
      color="white"
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
