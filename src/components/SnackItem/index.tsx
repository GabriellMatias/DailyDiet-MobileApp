import { SnackItemContainer, SnackOnDiet, SnackTitle, TimeText } from './style'

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
  return (
    <SnackItemContainer>
      <TimeText>{time}</TimeText>
      <SnackTitle>{title}</SnackTitle>
      <SnackOnDiet isOnDiet={isOnDiet} />
    </SnackItemContainer>
  )
}
