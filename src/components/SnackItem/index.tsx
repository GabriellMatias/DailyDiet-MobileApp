import {
  LineSeparator,
  SnackItemContainer,
  SnackOnDiet,
  SnackTitle,
  TimeAndTitleContainer,
  TimeText,
} from './style'

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
      <TimeAndTitleContainer>
        <TimeText>{time}</TimeText>
        <LineSeparator />
        <SnackTitle>{title}</SnackTitle>
      </TimeAndTitleContainer>
      <SnackOnDiet isOnDiet={isOnDiet} />
    </SnackItemContainer>
  )
}
