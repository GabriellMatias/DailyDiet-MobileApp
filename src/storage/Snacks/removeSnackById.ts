import AsyncStorage from '@react-native-async-storage/async-storage'
import { getSnacks } from './getSnacks'
import { SNACKS_COLLECTION } from '@storage/storageConfig'

export async function RemoveSnackById(id: number) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedSnacks = await getSnacks()
    const snacks = storedSnacks.flatMap((section) => section.data)
    const snacksWithOutDeletedOne = snacks.filter((snack) => snack.id !== id)

    const storage = JSON.stringify(snacksWithOutDeletedOne)
    await AsyncStorage.setItem(SNACKS_COLLECTION, storage)
    await AsyncStorage.removeItem(
      `${SNACKS_COLLECTION}-${snacksWithOutDeletedOne}`,
    )
  } catch (error) {
    throw error
  }
}
