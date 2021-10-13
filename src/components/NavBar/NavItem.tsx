import { Box, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const NavItem: FC = ({ children }) => {
  return (
    <Box _hover={{ bg: "white", color: "black" }}>
      <Link _hover={{ textDecoration: "none" }}>
        <Text>{children}</Text>
      </Link>
    </Box>
  );
};

export default NavItem;
