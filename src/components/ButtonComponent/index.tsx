import { Text } from 'react-native'
import { ButtonContainer } from './style'
import React from 'react'
import { IconComponent } from '@components/IconComponent'

interface ButtonComponentProps {
  title: string
  iconName?: string
  iconColor?: string
  iconSize?: number
  variant?: string
}

export function ButtonComponent({
  title = 'New Snack',
  iconName,
  iconColor,
  iconSize,
  variant,
}: ButtonComponentProps) {
  return (
    <ButtonContainer variant={variant}>
      {iconName && (
        <IconComponent
          iconColor={iconColor}
          iconName={iconName}
          iconSize={iconSize}
        />
      )}
      <Text
        style={
          variant === 'transparent' ? { color: '#000' } : { color: '#fff' }
        }
      >
        {title}
      </Text>
    </ButtonContainer>
  )
}
