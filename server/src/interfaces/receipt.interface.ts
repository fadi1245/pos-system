import { ObjectId } from "mongoose"

interface receiptItem {
  product: string | ObjectId
  quantity: number
  price: number
  subtotal: number
}

interface receipt {
  _id?: string | ObjectId
  items: receiptItem[]
  total: number
  createdAt?: Date
  updatedAt?: Date
}

export default receipt
