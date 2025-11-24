import { Request, Response } from "express";
import asyncErrorHandler from "../midldeware/asyncErrorHandler";
import Product from "../schemas/product.schema";
import Category from "../schemas/category.schema";

const getDashboardStats = asyncErrorHandler(async (req: Request, res: Response) => {
  const totalProducts = await Product.countDocuments();

  const totalCategories = await Category.countDocuments();

  const stockAggregation = await Product.aggregate([
    { $group: { _id: null, totalStock: { $sum: "$stock" } } }
  ]);

  const totalStock = stockAggregation.length > 0 ? stockAggregation[0].totalStock : 0;

  const stockValueAggregation = await Product.aggregate([
    {
      $group: {
        _id: null,
        totalValue: { $sum: { $multiply: ["$price", "$stock"] } }
      }
    }
  ]);

  const totalStockValue =
    stockValueAggregation.length > 0 ? stockValueAggregation[0].totalValue : 0;

  res.status(200).json({
    status: "success",
    data: {
      totalProducts,
      totalCategories,
      totalStock,
      totalStockValue,
    }
  });
});

export { getDashboardStats };
