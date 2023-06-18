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
} from './style'
import { ButtonComponent } from '@components/ButtonComponent'
import { SectionList } from 'react-native'
import { SnackItemComponent } from '@components/SnackItem'

const DATA = [
  {
    title: '12.08.22',
    data: [
      {
        time: '10:00',
        title: 'algum lanche',
        isOnDiet: false,
      },
      {
        time: '10',
        title: 'algum lanche',
        isOnDiet: true,
      },
      {
        time: '10',
        title: 'algum lanche',
        isOnDiet: true,
      },
    ],
  },
  {
    title: '12.08.22',
    data: [
      {
        time: '10',
        title: 'algum lanche',
        isOnDiet: true,
      },
      {
        time: '10',
        title: 'algum lanche',
        isOnDiet: true,
      },
      {
        time: '10',
        title: 'algum lanche',
        isOnDiet: true,
      },
    ],
  },
]

export function Home() {
  return (
    <>
      <MainHeader />
      <HomeContainer>
        <ButtonMetrics>
          <BackIcon />
          <PercentNumberTitle>99,85%</PercentNumberTitle>
          <ButtonSubtitle>das refeicoes dentro da dieta</ButtonSubtitle>
        </ButtonMetrics>
        <SnacksContainer>
          <SnacksTitle>Snacks</SnacksTitle>
          <ButtonComponent title="New Snack" iconName="plus" />
          <SectionList
            style={{ marginTop: 14 }}
            showsVerticalScrollIndicator={false}
            sections={DATA}
            keyExtractor={(item) => item.time}
            renderItem={({ item }) => (
              <SnackItemComponent
                isOnDiet={item.isOnDiet}
                time={item.time}
                title={item.title}
              />
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
