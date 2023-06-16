import { TopBar } from '../components/TopBar'
import { Hero } from '../components/Hero'
import { Home1 } from '../components/Home1'
import { Home2 } from '../components/Home2'
import { About } from '../components/About'

import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
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
