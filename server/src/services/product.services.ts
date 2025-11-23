import product from "../interfaces/product.interface";
import Product from "../schemas/product.schema";

const createProduct = async (data: product): Promise<any> => {
  const newProduct = await Product.create(data);
  return newProduct;
};

const getAllproducts = async (): Promise<any[]> => {
  const products = await Product.find().populate("category");
  return products;
};

const getProductById = async (productId: string): Promise<any> => {
  const item = await Product.findById(productId).populate("category");
  return item;
};

const updateProductById = async (
  productId: string,
  updateData: Partial<product>
): Promise<any> => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    { new: true }
  );
  return updatedProduct;
};

const deleteProductById = async (productId: string): Promise<string> => {
  await Product.findByIdAndDelete(productId);
  return "product deleted successfully";
};

export {
  createProduct,
  getAllproducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
