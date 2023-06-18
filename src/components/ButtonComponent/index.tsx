import { Text } from 'react-native'
import { ButtonContainer, PlusIcon } from './style'

export function ButtonComponent() {
  return (
    <ButtonContainer>
      <PlusIcon />
      <Text>New Snack</Text>
    </ButtonContainer>
  )
}
