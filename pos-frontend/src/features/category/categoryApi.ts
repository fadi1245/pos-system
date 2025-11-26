import client from "../../api/axiosClient";

export interface Category {
  _id: string;
  name: string;
}

const CategoryApi = {
  list: async () => {
    const res = await client.get("/categories");
    return res.data.data ?? res.data;
  },

  create: async (payload: { name: string }) => {
    const res = await client.post("/categories", payload);
    return res.data.data ?? res.data;
  },
};

export default CategoryApi;
