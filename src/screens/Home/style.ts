import { SafeAreaView } from 'react-native'
import styled, { css } from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
`
export const ButtonMetrics = styled.TouchableOpacity`
  height: 102px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`
export const PercentNumberTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE['2XL']}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top:-10px;
`
export const ButtonSubtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom:20px;
`
export const SnacksTitle = styled.Text`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.FONT_SIZE.MD}px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom:8px;
`
export const SnacksContainer = styled.View`
  flex: 1;
  margin-top: 40px;
`
export const BackIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  name: 'arrowup',
  color: theme.COLORS.GREEN_DARK,
}))`
  align-self: flex-end;
  padding: 4px 4px 0;
`
