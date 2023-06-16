
import NextImage from 'next/image'
import { TopBar } from '../components/TopBar'
import { Flex } from '@chakra-ui/react';
import { Services1 } from '../components/Services1'
import { Services2 } from '../components/Services2'
import { Services3 } from '../components/Services3'

export default function Services() {
  return (
    <>
      <TopBar />

      <Flex direction='column' align='center' w={'100%'} m='0 auto'>

        <Services1 />

        <Services2 />

        <Services3 />

      </Flex>
    </>
  )
}
