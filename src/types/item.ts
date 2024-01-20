export type orderStoreType = {
  number: number
  increase: () => void
  decrease: () => void
}

export interface ItemType {
  event: number
  id: string
  materialType: number
  name: string
  price: number
}
