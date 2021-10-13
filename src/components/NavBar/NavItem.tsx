import { Box, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const NavItem: FC = ({ children }) => {
  return (
    <Link>
      <Box lineHeight={10} _hover={{ bg: "white", color: "black" }}>
        {children}
      </Box>
    </Link>
  );
};

export default NavItem;
