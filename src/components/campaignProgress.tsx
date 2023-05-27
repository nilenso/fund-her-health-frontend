'use client'
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper, useSteps
} from '@chakra-ui/react'

export type CampaignProgressData = {
    stages: string[]
}

export default function CampaignProgress(campaign: CampaignProgressData, activeStageSequence: number) {
    const { activeStep: activeStage } = useSteps({
        index: activeStageSequence,
        count: campaign.stages.length,
    })

    return (
        <Stepper size='sm' index={activeStage} gap='0' colorScheme='green'>
            {campaign.stages.map((stage, index) => (
                <Step key={index}>
                    <StepIndicator bg='white'>
                        <StepStatus
                            complete={<StepIcon />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{stage}</StepTitle>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}