import { Button } from "@chakra-ui/button";
import { Link, Image } from "@chakra-ui/react";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import logo from "../assets/Skillet.jpg";

const NavBar = () => {
  return (
    <Box bgColor="black" color="white" border="1px" borderColor="black">
      <Flex marginX="200px" alignItems="center">
        <Link>
          <Image src={logo} alt="Logo" h="50px" />
        </Link>

        <Link _hover={{ textDecoration: "none" }}>
          <Text>Awesome Sneakers</Text>
        </Link>

        <Spacer />

        <Link marginX="20px" _hover={{ color: "grey" }}>
          Home
        </Link>
        <Link marginX="20px" _hover={{ color: "grey" }}>
          Shop
        </Link>
        <Link marginX="20px" _hover={{ color: "grey" }}>
          About AS
        </Link>

        <Button marginX="20px" bgColor="grey" _hover={{ opacity: "0.8" }}>
          Login
        </Button>
        <Button marginX="20px" bgColor="grey" _hover={{ opacity: "0.8" }}>
          Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
