import {
  Box,
  Collapse,
  Icon,
  useDisclosure,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { RiCoupon3Line } from "react-icons/ri";
import React, { useState } from "react";

interface IProps {
  OnClick: (input: string) => void;
}

const PromoCode = (props: IProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const [input, setInput] = useState("");

  const HandleClick = () => {
    props.OnClick(input);
    setInput("");
  };

  return (
    <Box>
      <Icon as={RiCoupon3Line} />
      <Text as="button" onClick={onToggle}>
        Enter a promo code
      </Text>
      <Collapse in={isOpen} animateOpacity>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={HandleClick}>Apply</Button>
      </Collapse>
    </Box>
  );
};

export default PromoCode;
