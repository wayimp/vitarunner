import { TopBar } from '../components/TopBar'
import { About } from '../components/About'
import ContactForm from '../components/ContactForm.tsx'

import { Flex } from '@chakra-ui/react';

export default function Contact() {
    return (
        <>
            <TopBar />

            <Flex direction='column' align='center' minW={'100vw'} minH={'100vh'} m='0 auto'>

                <About />

                <ContactForm />

            </Flex>
        </>
    )
}
