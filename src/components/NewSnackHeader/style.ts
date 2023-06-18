import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const NewSnackHeaderContainer = styled(SafeAreaView)`
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  gap: 82px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`
