import { MAX_QUANTITY } from '@/constants/item'
import { ItemType } from '@/types/item'
import { makeAutoObservable } from 'mobx'

export interface OrderItem extends ItemType {
  quantity: number
}

interface OrderStoreType {
  orders: OrderItem[]
  getTotalQuantities: () => number
  getTotalPrices: () => number
  getItemQuantity: (productId: string) => number
  increase: (product: ItemType) => void
  decrease: (productId: string) => void
}

const orderStore: OrderStoreType = makeAutoObservable({
  orders: [],

  getTotalQuantities() {
    return orderStore.orders.reduce((prev, curr) => prev + curr.quantity, 0)
  },

  getTotalPrices() {
    return orderStore.orders.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    )
  },

  getItemQuantity(productId: string) {
    console.log(orderStore.orders)
    const productOnOrder = orderStore.orders.find(
      (item) => item.id === productId
    )
    return productOnOrder ? productOnOrder.quantity : 0
  },

  increase(product: ItemType) {
    const productOnOrder = orderStore.orders.find(
      (item) => item.id === product.id
    )

    if (!productOnOrder) {
      orderStore.orders.push({ ...product, quantity: 1 })
      return
    }

    if (productOnOrder.quantity === MAX_QUANTITY) return

    productOnOrder.quantity += 1
  },

  decrease(productId: string) {
    const productOnOrder = orderStore.orders.find(
      (item) => item.id === productId
    )

    if (!productOnOrder) return

    productOnOrder.quantity -= 1

    if (productOnOrder.quantity <= 0) {
      orderStore.orders = orderStore.orders.filter(
        (item) => item.id !== productId
      )
    }
  },
})

export default orderStore
