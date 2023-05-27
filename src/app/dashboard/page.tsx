'use client'
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

} from '@chakra-ui/react'
import {CampaignCardData} from '@/components/campaignCard'
import CampaignCard from '@/components/campaignCard'



export default function Page() {
  // let campaigns = ["HPV Vaccination Drive at Bengaluru", "HPV 2nd Dose Vaccination Drive at Bengaluru"]
  let campaigns: CampaignCardData[] = [
    {
      name: "HPV Vaccination Drive at Bengaluru",
      desc: "This is a good campaign! Trust us!",
      cost: 78000,
      fundingProgress: 74,
      sponsorCTA: "fundherhealth.com/sponsor/1234"
    },
    {
      name: "HPV 2nd Dose Vaccination Drive at Bengaluru",
      desc: "This is a good campaign! Trust us!",
      cost: 124000,
      fundingProgress: 26,
      sponsorCTA: "fundherhealth.com/sponsor/4567"
    }
  ]
  let campaignCards: any[] = []

  for (let campaign of campaigns) {
    campaignCards = campaignCards.concat(
      CampaignCard(campaign)
    )
  }



  return (
    <ChakraProvider>
      <div>
        {campaignCards}
      </div>
    </ChakraProvider>)
}