import { Flex } from "@chakra-ui/react";
import React, { FC, useState } from "react";

const NavBarContainer: FC = ({ children }) => {
  const startHeight = "100px";
  const shrinkedHeight = "70px";

  const startFontSize = "lg";
  const shrinkedFontSize = "md";

  const [height, SetHeight] = useState(startHeight);
  const [fontSize, SetFontSize] = useState(startFontSize);

  const Shrink = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      SetHeight(shrinkedHeight);
      SetFontSize(shrinkedFontSize);
    } else {
      SetHeight(startHeight);
      SetFontSize(startFontSize);
    }
  };

  window.onscroll = Shrink;

  return (
    <Flex
      as="nav"
      align="center"
      px="10%"
      h={height}
      bgColor="black"
      color="white"
      sx={{ pos: "sticky", top: "0" }}
      fontSize={fontSize}
      transition="0.5s"
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
