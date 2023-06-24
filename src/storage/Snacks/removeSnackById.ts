// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { getSnacks } from './getSnacks'
// import { SNACKS_COLLECTION } from '@storage/storageConfig'

// export async function RemoveSnackById(id: number) {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const storedSnacks = await getSnacks()
//     const groupsWithoutDeletedOne = storedSnacks.filter(
//       (snack) => snack.id !== id,
//     )
//     const storage = JSON.stringify(groupsWithoutDeletedOne)
//     await AsyncStorage.setItem(SNACKS_COLLECTION, storage)
//     await AsyncStorage.removeItem(
//       `${SNACKS_COLLECTION}-${groupsWithoutDeletedOne}`,
//     )
//   } catch (error) {
//     throw error
//   }
// }
