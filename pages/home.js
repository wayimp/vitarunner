import { TopBar } from '../components/TopBar'
import { Home1 } from '../components/Home1'
import CouponForm from '../components/CouponForm.tsx'
import { Interactions } from '../components/Interactions'

import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <TopBar />

      <Flex direction='column' align='center' w={'100%'} m='0 auto'>

        <Home1 />

        <CouponForm />

        <Interactions />

      </Flex>
    </>
  )
}
