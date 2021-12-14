import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmitForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const toast = useToast();

  const onSubmit = (values: unknown) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        ShowToast();
        setDisabled(true);
        resolve(values);
      }, 3000);
    });
  };

  const ShowToast = () => {
    toast({
      title: "Order submitted",
      description: "Thank you really much for choosing our webshop!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const errorMessages = {
    required: "This field is required!",
    minLength: {
      value: 4,
      message: "Please, enter 4 or more characters!",
    },
  };

  return (
    <Flex justifyContent="center" minH="calc(100vh - 100px)">
      <Box w="50%" p={10}>
        <Heading>Delivery Details</Heading>
        <Box mt={10}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.firstName} mb={2}>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                placeholder="First name"
                {...register("firstName", errorMessages)}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.lastName} mb={2}>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last name"
                {...register("lastName", errorMessages)}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} mb={2}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  ...errorMessages,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.address}>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="address"
                placeholder="Address"
                {...register("address", errorMessages)}
              />
              <FormErrorMessage>
                {errors.address && errors.address.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
              disabled={disabled}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SubmitForm;
