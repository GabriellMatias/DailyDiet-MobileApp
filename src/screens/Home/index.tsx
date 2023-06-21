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
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { api } from '../../api/axios'

interface SnackProps {
  name: string
  description: string
  date: string
  time: string
}

export function Home() {
  const { navigate } = useNavigation()
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/snacks')
        setData(response.data)
      } catch (error) {
        console.log('here')

        console.error(error)
      }
    }

    fetchData()
  }, [])

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
            onPressAction={handleNewSnack}
          />
          <SectionList
            style={{ marginTop: 14 }}
            showsVerticalScrollIndicator={false}
            sections={data}
            keyExtractor={(item) => item.time}
            renderItem={({ item }) => (
              <>
                {item ? (
                  <SnackItemComponent
                    isOnDiet={item.isOnDiet}
                    time={item.time}
                    title={item.title}
                  />
                ) : (
                  <WithoutDataTitle>You dont have any data</WithoutDataTitle>
                )}
              </>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <SectionListTitle>{title}</SectionListTitle>
            )}
          />
        </SnacksContainer>
      </HomeContainer>
    </>
  )
}
