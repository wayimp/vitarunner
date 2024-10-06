import {
  Box,
  Center,
  Stack,
  Flex,
  Spacer,
  Button,
  Heading,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react'

export function Hero() {
  return (
    <Flex
      w={'full'}
      backgroundImage={'url(/products.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'left top'}
    >
      <VStack ml={'8vw'} mr={'8vw'} justify={'center'}>
        <Center>
          <VStack>
            <br />
            <br />
            <Heading
              align='center'
              fontSize={['3xl', '4xl', '5xl']}
              color={'white'}
              className='outline'
            >
              Private Label Solutions for Clinics
            </Heading>
            <br />
            <Text
              align='center'
              fontSize={['1xl', '2xl', '3xl']}
              color={'white'}
              className='outline'
              lineHeight={'140%'}
              letterSpacing={'+20%'}
            >
              Vitarunner specializes in streamlining private label supplement/nutraceutical solutions for alternative health clinics with one priority in mind - your patient&apos;s wellbeing.
            </Text>
          </VStack>
        </Center>
        <br />
        <br />
        <br />
      </VStack >
    </Flex >
  )
}
