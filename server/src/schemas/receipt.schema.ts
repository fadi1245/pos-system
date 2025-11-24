import mongoose from "mongoose";

const receiptItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          subtotal: {
            type: Number,
            required: true,
          },
    },
    {_id:false}
)

const receiptSchema = new mongoose.Schema({
    items:{
        type:[receiptItemSchema],
        required:true
    },
    total:{
        type:Number,
        required:true
    }
},
{timestamps:true}
)

const Receipt = mongoose.model("Receipt",receiptSchema)

export default Receipt