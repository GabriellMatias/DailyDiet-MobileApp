import styled from 'styled-components/native'

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
