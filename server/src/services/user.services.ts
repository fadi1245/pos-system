import user from "../interfaces/user.interface";
import User from "../schemas/user.schema";

const getAllUsers = async (): Promise<user[]>=>{
    const users = await User.find({isDeleted:false})
    return users
}

const getOneUser = async (userId:string): Promise<user | null>=>{
    const foundUser = await User.findById(userId);
    return foundUser;
}

const updateUserById = async (
    userId: string,
    userData: Partial<user>
): Promise<user | null>=>{
    const updated = await User.findByIdAndUpdate(userId, userData,{
        new:true,
    })
    return updated
}

const softDeleteUser = async (userId: string): Promise<string> => {
    await User.findByIdAndUpdate(userId, { isDeleted: true });
    return "User deleted successfully";
  };
  
  export { getAllUsers, getOneUser, updateUserById, softDeleteUser };