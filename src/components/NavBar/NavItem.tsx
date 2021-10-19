import { Box, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const NavItem: FC = ({ children }) => {
  return (
    <Link _hover={{ color: "grey", textDecoration: "none" }}>
      <Box width="100px" textAlign="center">
        {children}
      </Box>
    </Link>
  );
};

export default NavItem;
