import client from "../../api/axiosClient";

export interface ReceiptItem {
  product: string;
  quantity: number;
  price: number;
  subtotal: number;
}

const ReceiptApi = {
  create: async (items: ReceiptItem[]) => {
    const res = await client.post("/receipts", { items });
    return res.data.data ?? res.data;
  },
  getById: async (id: string) => {
    const res = await client.get(`/receipts/${id}`);
    return res.data.data ?? res.data;
  },
};

export default ReceiptApi;
