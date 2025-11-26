import client from "../../api/axiosClient";
import { CursorResult } from "../../utils/cursorPagination";

export interface Product {
  _id?: string;
  name: string;
  category?: string | { _id: string; name: string };
  price: number;
  stock?: number;
  barcode?: string;
}

const ProductApi = {
  list: async (limit = 12, cursor?: string, category?: string, q?: string) => {
    const params: any = { limit };
    if (cursor) params.cursor = cursor;
    if (category) params.category = category;
    if (q) params.q = q;
    const res = await client.get("/products", { params });
    const payload = res.data;
    return {
      items: payload.data ?? payload.items ?? [],
      nextCursor: payload.nextCursor ?? null,
    } as CursorResult<Product>;
  },

  getByBarcode: async (barcode: string) => {
    const res = await client.get(`/products`, { params: { barcode } });
    const items = res.data.data ?? res.data;
    if (Array.isArray(items)) return items[0] ?? null;
    return items;
  },

  create: async (payload: Partial<Product>) => {
    const res = await client.post("/products", payload);
    return res.data.data ?? res.data;
  },

  update: async (id: string, payload: Partial<Product>) => {
    const res = await client.patch(`/products/${id}`, payload);
    return res.data.data ?? res.data;
  },

  remove: async (id: string) => {
    const res = await client.delete(`/products/${id}`);
    return res.data;
  },
};

export default ProductApi;
