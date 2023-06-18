import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const MainHeaderContainer = styled(SafeAreaView)`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid;
  border-radius: 99px;
`
