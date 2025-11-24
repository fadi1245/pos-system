import mongoose from "mongoose"

const stockAdjustmentSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
    },
    adjustedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

const StockAdjustmentModel = mongoose.model("StockAdjustment", stockAdjustmentSchema)

export default StockAdjustmentModel
