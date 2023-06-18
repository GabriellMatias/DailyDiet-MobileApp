import { Text } from 'react-native'
import { ButtonContainer } from './style'
import React from 'react'
import { IconComponent } from '@components/IconComponent'

interface ButtonComponentProps {
  title: string
  iconName?: string
  iconColor?: string
  iconSize?: number
}

export function ButtonComponent({
  title = 'New Snack',
  iconName,
  iconColor,
  iconSize,
}: ButtonComponentProps) {
  return (
    <ButtonContainer>
      {iconName && (
        <IconComponent
          iconColor={iconColor}
          iconName={iconName}
          iconSize={iconSize}
        />
      )}
      <Text style={{ color: '#fff' }}>{title}</Text>
    </ButtonContainer>
  )
}
