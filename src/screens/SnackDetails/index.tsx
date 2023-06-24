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
import { RouteProp, useRoute } from '@react-navigation/native'
import { Snack } from '../Home'

type RouteParams = {
  snack: Snack
}

type RootStackParamList = {
  snack: RouteParams
  // Outras rotas
}
export function SnackDetails() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'snack'>>()
  const snack = params?.snack || []
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SnacksHeader title="Snacks" variant="green" />
      <SnackDetailsContainer>
        <SnackDetailsTitle>{snack.name}</SnackDetailsTitle>
        <SnackDetailSubTitle>{snack.description}</SnackDetailSubTitle>
        <SnackDetailDateTitle>Date and Time</SnackDetailDateTitle>
        <SnackDetailDateSubTitle>
          {snack.date} as {snack.time}
        </SnackDetailDateSubTitle>
        <SnackDetailsFlag>
          <CircleIsOnDiet option={snack.isOnDiet ? 'Yes' : 'No'} />
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
