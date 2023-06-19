import { SnacksHeader } from '@components/SnacksHeader'
import {
  SnackDetailDateSubTitle,
  SnackDetailDateTitle,
  SnackDetailSubTitle,
  SnackDetailsButtonsContainer,
  SnackDetailsContainer,
  SnackDetailsFlag,
  SnackDetailsTitle,
} from './style'
import { ScrollView, Text } from 'react-native'
import { CircleIsOnDiet } from '@components/ButtonIsOnDiet/style'
import { ButtonComponent } from '@components/ButtonComponent'

export function SnackDetails() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SnacksHeader title="Snacks" variant="green" />
      <SnackDetailsContainer>
        <SnackDetailsTitle>Sanduice</SnackDetailsTitle>
        <SnackDetailSubTitle>
          sanduiceh de pao integral com atum e slada de alfacae e tomato
        </SnackDetailSubTitle>
        <SnackDetailDateTitle>Date and Time</SnackDetailDateTitle>
        <SnackDetailDateSubTitle>12/08/2022 as 16:00</SnackDetailDateSubTitle>
        <SnackDetailsFlag>
          <CircleIsOnDiet option="Yes" />
          <Text>Dentro da Dieta</Text>
        </SnackDetailsFlag>
      </SnackDetailsContainer>
      <SnackDetailsButtonsContainer>
        <ButtonComponent title="Edit Snack" iconSize={18} iconName="edit" />
        <ButtonComponent
          title="Remove Snack"
          variant="transparent"
          iconColor="#000"
          iconName="delete"
          iconSize={18}
        />
      </SnackDetailsButtonsContainer>
    </ScrollView>
  )
}
