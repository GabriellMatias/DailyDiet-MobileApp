import React, { useState } from 'react'
import {
  ButtonIsOnDietContainer,
  CircleIsOnDiet,
  IsOnDietButtonLabel,
} from './style'

export interface ButtonIsOnDietProps {
  option: 'Yes' | 'No'
  isSelected?: boolean
}

export function ButtonIsOnDiet({ option }: ButtonIsOnDietProps) {
  const [selected, setSelected] = useState(false)

  function handlePress() {
    setSelected(!selected)
  }
  return (
    <ButtonIsOnDietContainer
      isSelected={selected}
      option={option}
      onPress={handlePress}
    >
      <CircleIsOnDiet option={option} />
      <IsOnDietButtonLabel>{option}</IsOnDietButtonLabel>
    </ButtonIsOnDietContainer>
  )
}
