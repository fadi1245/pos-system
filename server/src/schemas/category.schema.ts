import mongoose from "mongoose";

const categoryShcema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
    },
    {timestamps:true}
)

const Category = mongoose.model("Category",categoryShcema)

export default Category