import AsyncStorage from '@react-native-async-storage/async-storage'
import { SNACKS_COLLECTION } from '@storage/storageConfig'
import { getSnacks } from './getSnacks'

export async function RemoveSnackById(id: number, title: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedSnacks = await getSnacks()
    const filteredSnacks = storedSnacks.filter((snack) => snack.title === title)

    filteredSnacks.forEach((snack) => {
      snack.data = snack.data.filter((obj) => obj.id !== id)
    })

    console.log('REMOVING', filteredSnacks)
    const storage = JSON.stringify(storedSnacks)
    console.log(storage)
    await AsyncStorage.setItem(SNACKS_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
