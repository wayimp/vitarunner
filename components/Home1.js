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
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} background='#587784' >
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    borderRadius='6px'
                    objectFit='cover'
                    boxSize='388px'
                    src='/bottles.jpg'
                    alt='Sample Bottles'
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>
                        Vitarunner: Unleash your Potential with Neutraceuticals
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={400}>
                        At Vitarunner, we’re making a difference in peoples’ lives by helping them unlock their full potential with neutraceuticals. Our product offerings are carefully selected after extensive research and development, vendor acquisition and evaluation, and third party lab testing. By leveraging these strenghts, Vitarunner empowers Clinics to provide their customers with top-tier dietary supplements that are both safe and effective.
                        <br /><br />
                        At Vitarunner, our mission is to give you what you need to help patients heal. We are disappointed with some of the products available on the market, and believe alternative health practitioners such as yourself have some of the keys related to product formulation and mixing that will help bring true healing to your patients. You know your patients best. Let us help you make a product designed for them.
                        <br /><br />
                        From concept to completion, Vitarunner sees through each operation from start to finish, building robust, long-lasting product lines.
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    )
}
