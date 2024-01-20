import { ItemType } from '@/types/item'
import customAxios from '.'

export const getItems = () => {
  try {
    return customAxios.get<ItemType[]>('/items')
  } catch (error) {
    console.error('Error in getProducts:', error)
    throw error
  }
}
