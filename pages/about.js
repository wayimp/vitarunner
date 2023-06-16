import Head from 'next/head'
import NextImage from 'next/image'
import { TopBar } from '../components/TopBar'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import {
  Box,
  Button,
  Container,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid
} from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Head>
        <title>Novax</title>
        <meta
          name='description'
          content="Top Quality Nutraceuticals for Enhanced Health"
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Novax' />
        <meta
          property='og:description'
          content="Top Quality Nutraceuticals for Enhanced Health"
        />
        <meta property='og:image' content='/logo.png' />
      </Head>

      <TopBar />

      <Flex
        w={'full'}
        backgroundImage={'url(/sunrise.webp)'}
        backgroundSize={'cover'}
        backgroundPosition={'left top'}
      >
        <VStack ml={'8vw'} mr={'8vw'} justify={'center'}>
          <Center>
            <VStack>
              <br />
              <br />
              <Text
                align='center'
                fontSize={['3xl', '4xl', '5xl']}
                color={'white'}
                className='outline'
              >
                Welcome to Novax
              </Text>
              <br />
              <Text
                align='center'
                fontSize={['1xl', '2xl', '3xl']}
                color={'white'}
                className='outline'
              >
                At Novax, we believe that true health and vitality lies in natural healthcare practices that specialize in adaptive care for their clients. We strive to provide our clients with products and services that support them in achieving their clinic mission.
                <br />
                Novax is &ldquo;Your one-stop-shop for natural health solutions.&rdquo;
                <br />
                We are passionate about our commitment to health and wellbeing and we strive to create products and services that enable people to live their best lives.
                <br />
                Contact Novax for further information and pricing.</Text>
            </VStack>
          </Center>
          <br />
          <br />
          <br />
        </VStack>
      </Flex>

      <Services/>
    </>
  )
}
