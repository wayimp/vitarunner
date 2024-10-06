
import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export function Faq1() {
    return (
        <Box background={'#748C9C'} p={'5%'} minW={'100vw'} minH={'100vh'} color={'white'}>
            <Heading mb={3} textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>Frequently Asked Questions about Methylene Blue</Heading>

            <Accordion defaultIndex={[0]} allowMultiple>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Is Methylene Blue good for me?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p>
                            Methylene Blue has many potential interactions which could affect different people differently. Please consult with a health practitioner, especially if you are taking other medications, and listen to your body. If you notice anything amiss, such as a headache or dizziness, discontinue use.
                        </p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Is Methylene Blue a treatment for UTI?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p>
                            Legally, we cannot talk about potential medical treatments, but here are some links that you might find interesting:
                        </p>
                        <ul>
                            <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7751791/' target='_blank'>Treatment of Recurrent Urinary Tract Infection</a></li>
                            <li><a href='https://statcarewalkin.com/info/methylene-blue-dose-for-uti.html' target='_blank'>Methylene Blue Dose For UTI</a></li>

                        </ul>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

