import customAxios from '.'
import type { ItemType } from '@/types/item'

export const getItems = () =>
  customAxios
    .get<ItemType[]>('/items')
    .then((items) => items.data)
    .catch((error) => {
      console.error('Error in getProducts:', error)
      throw error
    })
