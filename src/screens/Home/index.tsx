import { MainHeader } from '@components/MainHeader'
import {
  BackIcon,
  ButtonMetrics,
  ButtonSubtitle,
  HomeContainer,
  PercentNumberTitle,
  SectionListTitle,
  SnacksContainer,
  SnacksTitle,
  WithoutDataTitle,
} from './style'
import { ButtonComponent } from '@components/ButtonComponent'
import { SectionList } from 'react-native'
import { SnackItemComponent } from '@components/SnackItem'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getSnacks } from '@storage/Snacks/getSnacks'

export interface Snack {
  id: number
  name: string
  description: string
  date: string
  time: string
  isOnDiet: boolean
}

export interface SnackSection {
  title: string
  data: Snack[]
}

export function Home() {
  const { navigate } = useNavigation()
  const [snackData, setSnackData] = useState<SnackSection[]>([])

  async function fetchData() {
    try {
      const response = await getSnacks()
      if (typeof response !== 'undefined') {
        setSnackData(response)
      }
    } catch (error) {
      console.log('ERROR')
      console.error(error)
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, []),
  )

  function handleDietsResume() {
    navigate('dietsResume')
  }
  function handleNewSnack() {
    navigate('newSnack')
  }

  return (
    <>
      <MainHeader />
      <HomeContainer>
        <ButtonMetrics onPress={handleDietsResume}>
          <BackIcon />
          <PercentNumberTitle>99,85%</PercentNumberTitle>
          <ButtonSubtitle>das refeicoes dentro da dieta</ButtonSubtitle>
        </ButtonMetrics>
        <SnacksContainer>
          <SnacksTitle>Snacks</SnacksTitle>
          <ButtonComponent
            title="New Snack"
            iconName="plus"
            onPress={handleNewSnack}
          />
          {snackData && (
            <SectionList
              style={{ marginTop: 14 }}
              showsVerticalScrollIndicator={false}
              sections={snackData}
              keyExtractor={(snack) => snack.id.toString()}
              renderItem={({ item }) => (
                <SnackItemComponent snackId={item.id} />
              )}
              ListEmptyComponent={
                <WithoutDataTitle>
                  You dont have snacks ☹️, lets register one
                </WithoutDataTitle>
              }
              renderSectionHeader={({ section: { title } }) => (
                <SectionListTitle>{title}</SectionListTitle>
              )}
            />
          )}
        </SnacksContainer>
      </HomeContainer>
    </>
  )
}
