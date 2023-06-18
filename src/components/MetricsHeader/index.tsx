import React from 'react'
import { ButtonSubtitle, PercentNumberTitle } from '../../screens/Home/style'
import { BackMetricsIcon, MetricsContainer } from './style'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

export function MetricsHeader() {
  const { COLORS } = useTheme()
  return (
    <MetricsContainer>
      <StatusBar
        backgroundColor={COLORS.GREEN_LIGHT}
        translucent
        barStyle="dark-content"
      />
      <BackMetricsIcon />
      <PercentNumberTitle>99,00%</PercentNumberTitle>
      <ButtonSubtitle>Snacks on diet</ButtonSubtitle>
    </MetricsContainer>
  )
}
