import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import React from 'react'
import { Loading } from '@components/Loading'
import { Home } from './src/screens/Home'
import { DietsResume } from './src/screens/DietsResume'
import { NewSnack } from './src/screens/NewSnack'
import { NewSnackFinalScreen } from './src/screens/NewSnackFinalScreen'
import { SnackDetails } from './src/screens/SnackDetails'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
      {fontsLoaded ? <SnackDetails /> : <Loading />}
    </ThemeProvider>
  )
}
