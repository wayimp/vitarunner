import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Image, Text, Stack, Flex } from '@chakra-ui/react';

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={64}
                h={64}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export function Services() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Image
                        src="/s1.png"
                        alt="service1"
                        loading="lazy"
                    />

                    }
                    title={'Brand Positioning Strategy'}
                    text={
                        'A comprehensive brand positioning strategy can define your healthcare/neutraceuticals business as a leader in the industry. We start with end-to-end consumer insights, then evaluate competiton, and end with helping you develop a unique brand identity that resonates with your audience and communicates your value proposition. We then work with in-house designers to create FDA, FTC, and GMP compliant labels, avoiding excessive label claims or emotional messaging, with a unique aesthetic which focuses on solidifying consumer confidence in your brand.'
                    }
                />
                <Feature
                    icon={<Image
                        src="/s2.png"
                        alt="service2"
                        loading="lazy"
                    />}
                    title={'Third Party Testing and R&D'}
                    text={
                        'Novax collaborates with reputable third-party laboratories to meticulously assess the quality and authenticity of the products they offer, ensuring that only the highest standards are met. Additionally, Novax provides in-house Research and Development services, which are specifically tailored to assist Clinics in identifying and developing the most effective product mix. By leveraging these resources, Novax empowers Clinics to provide their customers with top-tier dietary supplements that are both safe and effective.'
                    }
                />
                <Feature
                    icon={<Image
                        src="/s3.png"
                        alt="service3"
                        loading="lazy"
                    />}
                    title={'Vendor Relations'}
                    text={
                        'This process includes evaluating potential vendors based on factors such as quality, price, reliability, and compliance with regulatory requirements. Once vendors are selected, ongoing management is necessary to ensure that they continue to meet the necessary standards and requirements to remain compliant with US regulations. This may involve monitoring vendor performance and maintaining open communication channels to address any issues that arise. Effective vendor acquisition, evaluation, and management is critical to ensuring the quality and safety of dietary supplements, as well as remaining effecient with deliveries and order fulfillment.'
                    }
                />

                <Image
                    w="full"
                    h="auto"
                    objectFit="contain"
                    src="/"
                    alt="banner3"
                    loading="lazy"
                />

            </SimpleGrid>
        </Box>
    );
}