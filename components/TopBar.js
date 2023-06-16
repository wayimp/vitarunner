import { ReactNode } from 'react';
import Head from 'next/head'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
} from '@chakra-ui/react';
import logo from '../public/logo.png'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextImage from 'next/image'

const Links = ['Home', 'Services', 'FAQ', 'Contact'];

const NavLink = ({ children }) => (
    <Link
        color={useColorModeValue('white')}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            color: useColorModeValue('#002E45'),
            bg: useColorModeValue('white'),
        }}
        href={`${children}`.toLowerCase()}>
        {children}
    </Link>
);

export function TopBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Head>
                <title>Vitarunner</title>
                <meta
                    name='description'
                    content="Boost Your Health with Vitarunner&#x27;s Neutraceuticals"
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="theme-color" content="#002e45" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="neutraceuticals, natural supplements, Vitarunner, boost health, improve health" />
                <meta property="og:title" content="Vitarunner" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Boost Your Health with Vitarunner&#x27;s Neutraceuticals" />
                <meta property='og:image' content='/logo.png' />
            </Head>
            <Box bg={useColorModeValue('#002E45')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Box width={'300px'} ml='20px'>
                        <NextImage src={logo} alt='logo' />
                    </Box>
                    <Spacer />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}