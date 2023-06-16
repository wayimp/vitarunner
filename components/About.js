import { Box, Heading, Text, Stack } from '@chakra-ui/react';

export function About() {
    return (
        <Box background={'#C1CDD3'} p={'5%'}>
            <Stack>
                <Heading mb={3} textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'#002E45'} fontWeight={400}>About Us</Heading>
                <Text color={'#002E45'} fontWeight={400}>Vitarunner was founded in 2021 and is a family owned business. We strive to serve alternative and natural health clinics due to leading research and testimonials proving the true effectiveness of their practice versus conventional medicine. Our journey is to help facilitate healing by providing practitioners with our support and attention.</Text>
            </Stack>
        </Box>
    );
}