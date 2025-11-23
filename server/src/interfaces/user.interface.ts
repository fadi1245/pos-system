interface user{
    _id?:string,
    username:string,
    email:string,
    phone:string,
    password:string,
    accountCreatedDate: Date,
    isDeleted: boolean,
    comparePasswordinDb(password: string, passwordDB: string): Promise<boolean>
}

export default user;