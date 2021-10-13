import { Box, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const NavItem: FC = ({ children }) => {
  return (
    <Link>
      <Box
        width="100px"
        lineHeight="70px"
        textAlign="center"
        _hover={{ bg: "white", color: "black" }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default NavItem;
