import { Box, Heading, Text, Stack } from '@chakra-ui/react';

export function About() {
    return (
        <Box background={'#C1CDD3'} p={'5%'}>
            <Stack>
                <Heading mb={3} textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'#002E45'} fontWeight={400}>About Us</Heading>
                <Text color={'#002E45'} fontWeight={400}>Vitarunner is a small family owned business, founded in 2021. We strive to provide safe and effective health supplements.</Text>               
                <Text color={'#002E45'} fontWeight={400}>We cannot answer questions about dosage or potential interactions, as these should be directed to a health practitioner.</Text>
            </Stack>
        </Box>
    );
}