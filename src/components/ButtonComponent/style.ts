import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const ButtonContainer = styled.TouchableOpacity`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`

export const PlusIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  name: 'plus',
  color: theme.COLORS.GREEN_DARK,
}))``
