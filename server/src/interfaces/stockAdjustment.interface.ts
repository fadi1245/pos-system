import { ObjectId } from "mongoose"

interface stockAdjustment {
  _id?: string | ObjectId
  product: string | ObjectId   
  change: number               
  reason?: string
  adjustedBy?: string | ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export default stockAdjustment;
