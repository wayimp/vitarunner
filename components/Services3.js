import {
    Flex,
    Heading,
    Stack,
    Text,
    Image,
} from '@chakra-ui/react'

export function Services3() {
    return (
        <Stack minW={'100vw'} direction={{ base: 'column', md: 'row' }} background='#305265' >
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    borderRadius='6px'
                    objectFit='scale-down'
                    boxSize='600px'
                    src='/flow.png'
                    alt='Distribution'
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>
                        Design, Marketing, and Sales Consultation
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
                        We understand the difficulties related to direct to patient products. Our primary goal here is to help facilitate patient trust in the effectiveness and quality of the product. Also, we are able to competitively price the market so that patients favor your product line over the competition.
                        <br /><br />
                        That&apos;s why we offer full spectrum marketing consultation and design work in-house. We use a 5 step model which is made possible through studying the patient experience, market research, product presentation suggestions, trial runs which focus on effectiveness, and then finally implementation.
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    )
}
