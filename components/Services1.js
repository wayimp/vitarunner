import {
    Flex,
    Heading,
    Stack,
    Text,
    Image,
} from '@chakra-ui/react'

export function Services1() {
    return (
        <Stack minW={'100vw'} direction={{ base: 'column', md: 'row' }} background='#305265' >
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    borderRadius='6px'
                    objectFit='scale-down'
                    boxSize='600px'
                    src='/distribution.png'
                    alt='Distribution'
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>
                        Order Fulfillment and Logistics Broker
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
                        When creating a new private-label supplement line, the main pitfalls associated with scaling are order fulfillment and logistics. That’s why we first take the time to understand projected order volume and estimated annual usage, and then do extensive research of viable contract manufacturers, logistics companies, and vendors. We run compliance checks and third party lab testing on our products to ensure quality throughout the duration of transportation, warehousing, and delivery. When we offer this service, we take direct requests from clients as well as answer any questions they may have.
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    )
}
