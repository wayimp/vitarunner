import { Box, SimpleGrid, Heading, Text, Stack } from '@chakra-ui/react';

const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Heading mb={3} textStyle='h2' as='h2' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'} fontWeight={400}>{title}</Heading>
      <Text color={'white'} fontWeight={400}>{text}</Text>
    </Stack>
  );
};

export function Home2() {
  return (
    <Box background={'#3C6474'} p={'5%'}>
      <Stack>
        <Heading fontWeight={400} textStyle='h1' as='h1' fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'white'} mb={6}>Services Offered</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title={'Order Fulfillment and Logistics Broker'}
            text={
              'Some of the main pitfalls associated with a private-line are order fulfillment and logistics. This is why we do the heavy lifting of ensuring a robust supply chain. We run maintenance checks on a regular basis in order to keep up with estimated annual usage projections and future market demands. We extensively research viable contract manufacturers, logistics companies, and vendors, and assemble all the moving pieces to ensure expedient delivery of high quality product.'
            }
          />
          <Feature
            title={'Testing, Research and Development'}
            text={
              'When creating a new private-label supplement line, we understand the importance of developing a quality mix. This is a collaborative process which involves incredible insight from alternative health practitioners such as yourself! Rest assured, we ensure utmost attention to detail and quality of ingredients. This is a fun, exciting process where true innovation can take place! Let us help you formulate the best mix possible, while you retain full ownership and rights of the mix.'
            }
          />
          <Feature
            title={'Design Development and Content Creation'}
            text={
              'We\'ll work with you to create high-quality product packaging that excites and stands out, positions you as a thought-leader in the industry, and helps build trust and credibility with your patients. We do this while avoiding the pitfalls of egregious label claims outside of GMP standards. We ensure quality over quantity; and truthful specifics rather than exaggerations. Our marketing and content team will help develop your brand to stand out amongst competitors.'
            }
          />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}