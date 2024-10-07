import { yupResolver } from "@hookform/resolvers/yup";

import { memo, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import axiosClient from '../util/axiosClient'
import { useToast } from '@chakra-ui/react'

import {
    Box,
    Button,
    chakra,
    type ChakraProps,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Textarea,
    type ThemingProps,
    useColorModeValue,
} from "@chakra-ui/react";

interface CouponFormValues {
    fullName: string;
    email: string;
    accept: boolean;
}

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(6, "Full name must be at least 6 characters long")
            .required("Full name is a required field")
            .matches(
                /^[a-zA-Z.]+\s+[a-zA-Z.]+$/,
                "Full name must contain only letters",
            ),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is a required field")
    })
    .required();

const CouponForm: React.FC<ChakraProps & ThemingProps> = ({
    colorScheme = "yellow",
}) => {
    const [
        formData,
        setFormData,
    ] = useState<CouponFormValues>();

    const toast = useToast()
    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
        handleSubmit,
        register, // ties the inputs to react-form
        formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<CouponFormValues>({
        reValidateMode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: CouponFormValues) => {

        setFormData(data);

        await axiosClient
            .post('/coupon', data)
            .then(response => {
                if (response && response.status === 200) {
                    toast({
                        title: 'Signed up.',
                        description: "Check email for coupon code",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })

                }
            })
            .catch(function () {
                toast({
                    title: 'Sign up error.',
                    description: 'There was a problem signing up for the newsletter',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            })

        setFormData({ fullName: '', email: '', accept: false })
    };

    const inputBG = useColorModeValue("gray.50", "gray.800");

    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    margin="40px"
                    data-aos="fade-up"
                    data-aos-delay="150"
                    rounded="2xl"
                    p={[4, 8, 10, 20]}
                    bg={useColorModeValue("white", "gray.700")}
                >
                    <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Stack direction="column" spacing={[2, 4, 8]}>
                            <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }}  fontWeight={400}>
                                Free Gift (10% Off Coupon Code)
                            </Heading><Stack
                                direction={["column", "column", "row"]}
                                spacing={[2, 4, 8, 10]}
                            >
                                <FormControl isRequired isInvalid={!!errors?.fullName}>
                                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                                    <Input
                                        id="fullName"
                                        focusBorderColor={`${colorScheme}.400`}
                                        size="lg"
                                        bg={inputBG}
                                        {...register("fullName")}
                                    />
                                    <FormErrorMessage>{errors?.fullName?.message}</FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={!!errors?.email}>
                                    <FormLabel htmlFor="email">Your Email</FormLabel>
                                    <Input
                                        id="email"
                                        focusBorderColor={`${colorScheme}.400`}
                                        size="lg"
                                        bg={inputBG}
                                        {...register("email")}
                                    />
                                    <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                                </FormControl>
                            </Stack>

                            <Box>
                                <Stack mt={[4, 6, 8, 10]} align="center" justify="center">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        colorScheme={colorScheme}
                                        isLoading={isSubmitting}
                                    >
                                        Sign Up
                                    </Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </chakra.form>
                </Box>
            </Flex>
        </Container>
    );
};

export default memo(CouponForm);