import React, { useState } from 'react'
import {
  Center,
  SimpleGrid,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Textarea,
  useToast
} from '@chakra-ui/react'

import NextImage from 'next/image'
import axiosClient from '../data/axiosClient'

export function Contact () {
  const [message, setMessage] = useState({})
  const toast = useToast()

  const sendMessage = async () => {
    await axiosClient({
      method: 'post',
      url: '/county',
      data: message,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response && response.data) {
        toast({
          title: 'Message Sent',
          description: 'Your message has been sent',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      } else {
        toast({
          title: 'Message Error',
          description: 'There was an error sending your message',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    })
  }

  return (
    <Container bg='white' maxW='full' mt={0} centerContent overflow='hidden'>
      <Flex>
        <Box
          bg='black'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Us</Heading>

                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <br />
                      <Heading color='white'>County Before Country</Heading>
                      <br />
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='text'
                            size='md'
                            onChange={e =>
                              setMessage({ ...message, name: e.target.value })
                            }
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='text'
                            size='md'
                            onChange={e =>
                              setMessage({ ...message, email: e.target.value })
                            }
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: 'gray.300'
                          }}
                          placeholder='message'
                          onChange={e =>
                            setMessage({ ...message, body: e.target.value })
                          }
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button
                          size='lg'
                          border='2px'
                          borderColor='black'
                          bg={'blue.900'}
                          color={'white'}
                          _hover={{ bg: 'blue.800' }}
                          onClick={sendMessage}
                        >
                          <Text fontSize={['1xl', '2xl']} color={'white'}>
                            Send Message
                          </Text>
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
