import { ObjectId } from "mongoose";

interface product {
  _id?: string | ObjectId;
  name: string;
  category?: string | ObjectId;
  price: number;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default product;
