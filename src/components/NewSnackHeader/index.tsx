import React from 'react'
import { ButtonSubtitle } from '../../screens/Home/style'
import { NewSnackHeaderContainer } from './style'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { IconComponent } from '@components/IconComponent'

export function NewSnackHeader() {
  const { COLORS } = useTheme()
  return (
    <NewSnackHeaderContainer>
      <StatusBar
        backgroundColor={COLORS.GRAY_300}
        translucent
        barStyle="dark-content"
      />
      <IconComponent
        iconName="arrowleft"
        iconSize={24}
        iconColor={COLORS.GRAY_500}
      />
      <ButtonSubtitle>Snacks on diet</ButtonSubtitle>
    </NewSnackHeaderContainer>
  )
}
