
import NextImage from 'next/image'
import { TopBar } from '../components/TopBar'
import { Flex } from '@chakra-ui/react';
import { Faq1 } from '../components/Faq1'

export default function Faq() {
  return (
    <>
      <TopBar />

      <Flex direction='column' align='center' w={'100%'} m='0 auto'>

        <Faq1 />

      </Flex>
    </>
  )
}
