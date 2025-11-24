import Receipt from "../schemas/receipt.schema";
import Product from "../schemas/product.schema";
import receipt from "../interfaces/receipt.interface";

interface BillingItem {
  product: string;
  quantity: number;
  price: number;
}

const createReceipt = async (items: BillingItem[]): Promise<any> => {
  let total = 0;

  for (const item of items) {
    const existingProduct = await Product.findById(item.product);

    if (!existingProduct) {
      throw new Error(`Product not found: ${item.product}`);
    }

    if ((existingProduct.stock || 0) < item.quantity) {
      throw new Error(
        `Insufficient stock for product: ${existingProduct.name}`
      );
    }

    existingProduct.stock = (existingProduct.stock || 0) - item.quantity;
    await existingProduct.save();

    const subtotal = item.price * item.quantity;
    total += subtotal;

    (item as any).subtotal = subtotal;
  }

  const newReceipt = await Receipt.create({
    items: items.map((item: any) => ({
      product: item.product,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.subtotal,
    })),
    total,
  });

  return newReceipt;
};

const getReceiptById = async (receiptId: string): Promise<any> => {
  const receipt = await Receipt.findById(receiptId).populate("items.product");
  return receipt;
};

export { createReceipt, getReceiptById };
