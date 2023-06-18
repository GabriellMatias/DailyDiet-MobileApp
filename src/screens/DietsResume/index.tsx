import React from 'react'
import {
  DietsResumeContainer,
  SnacksMetricsContainer,
  StatisticsContainer,
  StatisticsTitle,
} from './style'
import { StatisticCard } from '@components/StatisticsCard'
import { SnacksOnDietCard } from '@components/SnacksOnDietCard'
import { MetricsHeader } from '@components/MetricsHeader'

export function DietsResume() {
  return (
    <>
      <MetricsHeader />
      <DietsResumeContainer>
        <StatisticsContainer>
          <StatisticsTitle>General Statistics</StatisticsTitle>
          <StatisticCard
            total={22}
            description="Best sequence of dishes on diet"
          />
          <StatisticCard total={22} description="Registered snacks" />
        </StatisticsContainer>
        <SnacksMetricsContainer>
          <SnacksOnDietCard />
          <SnacksOnDietCard />
        </SnacksMetricsContainer>
      </DietsResumeContainer>
    </>
  )
}
