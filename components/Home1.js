import {
    Flex,
    Center,
    Heading,
    Stack,
    Text,
    Image,
    useBreakpointValue
} from '@chakra-ui/react'

import NextImage from 'next/image'

export function Home1() {
    return (
        <Stack p={'5%'} minH={'80vh'} minW={'100vw'} direction={{ base: 'column', md: 'row' }} background='#587784' >
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    borderRadius='6px'
                    objectFit='contain'
                    boxSize='400px'
                    src='/products.jpg'
                    alt='Sample Bottles'
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>
                        Vitarunner: Unleash your Potential with Neutraceuticals
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
                        At Vitarunner, we&apos;re making a difference in people&apos;s lives by helping them unlock their full potential with neutraceuticals. Our mission is to give you what you need to improve your health and well-being.
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    )
}
