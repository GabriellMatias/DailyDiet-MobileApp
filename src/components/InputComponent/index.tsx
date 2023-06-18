import React from 'react'
import {
  InputContainer,
  InputContent,
  InputContentProps,
  InputLabel,
} from './style'

export function InputComponent({ label }: InputContentProps) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputContent label={label} keyboardType="numeric" />
    </InputContainer>
  )
}
