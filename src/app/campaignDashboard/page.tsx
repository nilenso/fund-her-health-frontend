'use client'
import {
    ChakraProvider
} from '@chakra-ui/react'
import { CampaignProgressData } from '@/components/campaignProgress'
import CampaignProgress from '@/components/campaignProgress'



export default function Page() {
    const stages = [
        'First',
        'Second',
        'Third'
    ]    

    let campaignProgress: CampaignProgressData = { stages: stages}

    let campaignStages = CampaignProgress(campaignProgress, 1 )

    return (
        <ChakraProvider>
            <div>
                {campaignStages}
            </div>
        </ChakraProvider>)
}