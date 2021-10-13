import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  const logo = `${process.env.PUBLIC_URL}/images/Skillet.jpg`;

  return (
    <Box>
      <Image src={logo} alt="Logo" />
    </Box>
  );
};

export default Logo;
