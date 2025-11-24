import { Model, Types } from "mongoose"

interface CursorPaginationResult<T> {
  items: T[]
  nextCursor: string | null
}

export const cursorPaginate = async <T>(
  model: Model<any>,
  limit: number,
  cursor?: string
): Promise<CursorPaginationResult<T>> => {
  const query: any = {}

  if (cursor) {
    query._id = { $gt: new Types.ObjectId(cursor) }
  }

  const items = await model
    .find(query)
    .sort({ _id: 1 }) 
    .limit(limit + 1) 

  let nextCursor: string | null = null

  if (items.length > limit) {
    const lastItem = items.pop()
    nextCursor = lastItem?._id.toString() || null
  }

  return {
    items,
    nextCursor,
  }
}
