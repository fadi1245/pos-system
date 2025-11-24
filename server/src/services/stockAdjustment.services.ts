import stockAdjustment from "../interfaces/stockAdjustment.interface";
import Product from "../schemas/product.schema";
import StockAdjustmentModel from "../schemas/stockAdjustement.schemas";

const adjustStock = async (data: stockAdjustment): Promise<any> => {
  const { product, change, reason, adjustedBy } = data;

  const existingProduct = await Product.findById(product);

  if (!existingProduct) {
    throw new Error("Product not found");
  }

  const newStock = (existingProduct.stock || 0) + change;

  if (newStock < 0) {
    throw new Error("Stock cannot be negative");
  }

  existingProduct.stock = newStock;
  await existingProduct.save();

  const adjustmentRecord = await StockAdjustmentModel.create({
    product,
    change,
    reason,
    adjustedBy,
  });

  return {
    product: existingProduct,
    adjustment: adjustmentRecord,
  };
};

export { adjustStock };
