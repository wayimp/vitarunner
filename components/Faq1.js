
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
            <Heading mb={3} textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>Frequently Asked Questions about Creating Private Label Supplements</Heading>

            <Accordion defaultIndex={[0]} allowMultiple>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                What is the process of creating a private label product?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ol>
                            <li>
                                The first step in the sampling process is to submit your formula so that we can review it. We will work with you to finalize the best ingredient list, amount of each ingredient per serving as well as what form the sample serve you best (i.e. capsules per bottle, type of bottle, filler powder, capsule type, etc.)
                            </li>
                            <li>
                                When the full formula is finalized, we will create a quote for you.
                                We offer 3 rounds of research and development included in the price of $1200. These minimum orders are 400 capsules per batch. The current limitations at this price point are 3 active ingredients along with 1 filler powder. We can use different filler powders upon request, and will specially label our R&amp;D bottles in a way that makes it clear to the end-user that these products are still safe, and are being sampled only in terms of efficacy. All product offerings we recommend are backed by leading research and clinical studies. Our team can discuss these studies on discovery calls.
                            </li>
                            <li>
                                After we have agreed on the formulas and quantity, we require a deposit to produce your product, and let you know of lead times for more product. Typically, if we have all of your formula ingredients in stock, we ship within 10 business days or less. Tracking numbers are supplied after shipment.
                            </li>
                            <li>
                                When you receive and try your samples we will get in touch to see what the next step is. If you&apos;re satisfied, then we can move forward into putting your final product in production. If the mix needs to be adjusted, we will make the change and send you another sample upon request. Beyond three revisions, pricing starts at $500 per batch of 400 capsules.
                            </li>
                        </ol>
                        <br />
                        <p>
                            We have an in-house graphics team that can take you through the label design process and bring your concept to life. If you have your own designer, we work with you to make sure they have everything they need to get the labels done and over to the printer of your choice.
                        </p>
                        <br />
                        <p>
                            We take printer and design requests seriously. This process normally can take 10 business days to finalize all the details. Once that is completed and the labels are on the way we obtain a deposit and schedule the job.
                        </p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                How long will it take for my product to be completed once I place my order?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        When we have your product labels and all of the ingredients for your formula at our facility we will process your order as fast as possible, normally within 10 business days.
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                What type of packaging does VITARUNNER offer?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We have a variety of packaging options available, with more available upon request. Currently we have 100 capsule, 50 capsule bottles, glass and dark plastic options, and a variety of label materials available depending on design choice.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Can I take a facility tour?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        VITARUNNER has a small private FDA registered facility in Redding, California, designed specially for small R+D mixes. We can send you a photo if you want.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                What services do you offer?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We are a full service broker that contracts with manufacturers to deliver larger quantities of product. Our in-house R&amp;D facility can produce up to 10,000 capsules a week, although that is not the purpose of our facility. We also have an in-house design and graphics team, and we outsource our printing and bottle manufacturing.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Do you have minimum quantity orders or MOQ's?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Yes. Our minimum R&amp;D batch size is 400 capsules (or 8 bottles of 50 capsules each). We offer low minimums for you to minimize the investment required and allow you time to develop the product further. This is much more cost effective than having to order 1,000 unit minimums from other large contract manufacturers.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Are we a broker or a manufacturing facility?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We are a full service broker with a small R&amp;D manufacturing plant. Most of our services are labor intensive but not manufacturing intensive.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Are you insured?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Yes we are insured and offer the ability to become additionally insured for those we produce products for. We can cover liability protection and customer service on discovery calls based on specific needs of your clinic.
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
    );
}

