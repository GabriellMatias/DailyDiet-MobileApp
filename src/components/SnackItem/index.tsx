import { useNavigation } from '@react-navigation/native'
import {
  LineSeparator,
  SnackItemContainer,
  SnackOnDiet,
  SnackTitle,
  TimeAndTitleContainer,
  TimeText,
} from './style'
import { useState } from 'react'

interface SnackItemComponentProps {
  title: string
  time: string
  isOnDiet: boolean
}

export function SnackItemComponent({
  isOnDiet = false,
  time,
  title,
}: SnackItemComponentProps) {
  const { navigate } = useNavigation()
  const [snack, setSnack] = useState<SnackItemComponentProps>()
  function handleSnackDetails() {
    setSnack({ isOnDiet, time, title })
    navigate('snackDetails', { snack: snack?.title })
  }
  return (
    <SnackItemContainer onPress={handleSnackDetails}>
      <TimeAndTitleContainer>
        <TimeText>{time}</TimeText>
        <LineSeparator />
        <SnackTitle>{title}</SnackTitle>
      </TimeAndTitleContainer>
      <SnackOnDiet isOnDiet={isOnDiet} />
    </SnackItemContainer>
  )
}
