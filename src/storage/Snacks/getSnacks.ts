import AsyncStorage from '@react-native-async-storage/async-storage'
import { SNACKS_COLLECTION } from '@storage/storageConfig'
import { SnackSection } from 'src/screens/Home'

export async function getSnacks() {
  try {
    const storage = await AsyncStorage.getItem(SNACKS_COLLECTION)

    const snacks: SnackSection[] = storage ? JSON.parse(storage) : []
    console.log('GET SNACKS', snacks)

    return snacks
  } catch (error) {
    throw new Error()
  }
}
