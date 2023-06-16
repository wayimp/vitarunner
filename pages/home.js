import Head from 'next/head'
import NextImage from 'next/image'
import { TopBar } from '../components/TopBar'
import { Hero } from '../components/Hero'
import { Home1 } from '../components/Home1'
import { Home2 } from '../components/Home2'
import { About } from '../components/About'

import { Flex } from '@chakra-ui/react';

export default function Home() {
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

      <TopBar />

      <Flex direction='column' align='center' w={'100%'} m='0 auto'>

        <Hero />

        <Home1 />

        <Home2 />

        <About />

      </Flex>
    </>
  )
}
