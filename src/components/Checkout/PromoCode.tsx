import {
  Box,
  Button,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { MutableRefObject, useRef, useState } from "react";
import { RiCoupon3Line } from "react-icons/ri";

interface IProps {
  OnClick: (input: string) => void;
}

const PromoCode = (props: IProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [input, setInput] = useState("");
  const initialRef = useRef() as MutableRefObject<HTMLInputElement>;

  const HandleClick = () => {
    props.OnClick(input);
    setInput("");
    onClose();
  };

  return (
    <Box mb={5}>
      <Icon as={RiCoupon3Line} />
      <Text as="button" color="red" onClick={onToggle}>
        Enter a promo code
      </Text>

      <Modal
        initialFocusRef={initialRef}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={input}
              ref={initialRef}
              onChange={(e) => setInput(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={HandleClick}>
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PromoCode;
