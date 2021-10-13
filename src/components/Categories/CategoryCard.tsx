import { Box } from "@chakra-ui/layout";
import React, { FC } from "react";

const CategoryCard: FC = ({ children }) => {
  return (
    <Box flex="1" textAlign="center" border="1px solid black">
      {children}
    </Box>
  );
};

export default CategoryCard;
