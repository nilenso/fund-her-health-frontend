import {
    ChakraProvider,
    Card,
    CardBody,
    Progress,
    Heading,
    Text,
    Button,
    Box,
    Flex,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack
} from "@chakra-ui/react";

export type CampaignCardData = {
    name: string;
    desc: string;
    cost: number;
    fundingProgress: number;
    sponsorCTA: string;
}

export default function CampaignCard(campaign: CampaignCardData) {
    return (<Card p="6" m="10">
        <Heading>{campaign.name}</Heading>
        <CardBody>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated>
                    {campaign.desc}
                </Box>
                <Tooltip
                    label=""
                    bg="white"
                    placement={'top'}
                    color={'gray.800'}
                    fontSize={'1.2em'}>
                    <Button colorScheme='green' size='lg' >Sponsor</Button>
                </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center" >
                <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')} >
                    <Box as="span" color={'gray.600'} fontSize="2xl">
                        &#8377;
                    </Box>
                    {campaign.cost}
                </Box>
            </Flex>
            <Box p={2}>
                <Progress value={campaign.fundingProgress} colorScheme='green' />
            </Box>
        </CardBody>
    </Card>)
}