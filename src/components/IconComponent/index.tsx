import React from 'react'
import { IconComponenItem, IconComponentContainer } from './style'

export interface IconComponentProps {
  iconName: string
  iconColor?: string
  iconSize?: number
}

export function IconComponent({
  iconName,
  iconColor,
  iconSize,
}: IconComponentProps) {
  return (
    <IconComponentContainer>
      <IconComponenItem
        iconColor={iconColor}
        iconName={iconName}
        iconSize={iconSize}
      />
    </IconComponentContainer>
  )
}
