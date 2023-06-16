import {
    Flex,
    Heading,
    Stack,
    Text,
    Image,
} from '@chakra-ui/react'

export function Services2() {
    return (
        <Stack minW={'100vw'} direction={{ base: 'column', md: 'row' }} >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>
                        R&amp;D, Testing, and Compliance
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
                    Testing, Research and Development (R&amp;D) is a service we offer completely in-house. This is a collaborative process which involves incredible insight and input from naturopaths and physicians such as yourself! Rest assured, we ensure utmost attention to detail on quality of ingredients and mix specifications. We communicate with vendors to ensure quality. We also verify the product ingredients through third-party lab testing and validation. We run our labels by third party compliance and regulatory agencies to ensure legality.
                    </Text>
                </Stack>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    borderRadius='6px'
                    objectFit='scale-down'
                    boxSize='600px'
                    src='/yourlabel.png'
                    alt='Distribution'
                />
            </Flex>
        </Stack>
    )
}
