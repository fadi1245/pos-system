import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import user from "../interfaces/user.interface";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    accountCreateData:{
        type:Date,
        default:Date.now
    },
    isDeleted:{
        type:Boolean,
        default:false   
    },
},
{timestamps:true});

userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcryptjs.hash(this.password,12);
    next();
})

userSchema.methods.comparePasswordinDb = async function (
    enteredpassword:string,
    passwordDB:string
){
    return await bcryptjs.compare(enteredpassword, passwordDB);
}

const User = mongoose.model<user>('User', userSchema);

export default User;
