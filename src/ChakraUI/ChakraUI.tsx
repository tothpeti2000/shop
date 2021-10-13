import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ChakraUIComponent from "./ChakraUIComponent";

const ChakraUI = () => {
  return (
    <Box>
      <ChakraUIComponent title={"Accordions"}>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>Section 1 title</AccordionButton>
            </h2>
            <AccordionPanel>Panel 1</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>Section 2 title</AccordionButton>
            </h2>
            <AccordionPanel>Panel 2</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ChakraUIComponent>

      <ChakraUIComponent title={"Avatars"}></ChakraUIComponent>
    </Box>
  );
};

export default ChakraUI;
