import { Image, Link } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  const logo = `${process.env.PUBLIC_URL}/images/Skillet.jpg`;

  return (
    <Link href="#" _focus={{ boxShadow: "none" }}>
      <Image src={logo} alt="Logo" h="50px" />
    </Link>
  );
};

export default Logo;
