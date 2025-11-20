import mongoose, {Document, Schema} from 'mongoose'
import bcrypt from "bcryptjs";
import { scheduler } from 'timers/promises'

export interface User extends Document {
    username: string
    password: string
    comparepassword(enteredPassword: string): Promise<boolean>
}

const userSchema = new Schema<User>({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true}
)

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next()

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userSchema.methods.comparepassword = async function(
    enteredPassword: string
):Promise<Boolean>{
    return bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model<User>("User",userSchema);
export default User;