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
  onPressAction?: () => void
}

export function ButtonComponent({
  title = 'New Snack',
  iconName,
  iconColor,
  iconSize,
  variant,
  onPressAction,
}: ButtonComponentProps) {
  return (
    <ButtonContainer variant={variant} onPress={onPressAction}>
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
