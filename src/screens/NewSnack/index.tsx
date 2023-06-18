import { InputComponent } from '@components/InputComponent'
import { NewSnackHeader } from '@components/NewSnackHeader'
import React from 'react'
import {
  DateAndTimeInputContainer,
  IsOnDietContainer,
  NewSnackContainer,
} from './style'
import { InputLabel } from '@components/InputComponent/style'
import { ButtonIsOnDiet } from '@components/ButtonIsOnDiet'
import { ButtonComponent } from '@components/ButtonComponent'
import { ScrollView } from 'react-native'

export function NewSnack() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <NewSnackHeader />
      <NewSnackContainer>
        <InputComponent label="Name" />
        <InputComponent label="Description" />
        <DateAndTimeInputContainer>
          <InputComponent label="Date" />
          <InputComponent label="Time" />
        </DateAndTimeInputContainer>
        <InputLabel>Is On diet ? 🥘</InputLabel>
        <IsOnDietContainer>
          <ButtonIsOnDiet option="Yes" />
          <ButtonIsOnDiet option="No" />
        </IsOnDietContainer>
        <ButtonComponent title="Register New Snack" />
      </NewSnackContainer>
    </ScrollView>
  )
}
