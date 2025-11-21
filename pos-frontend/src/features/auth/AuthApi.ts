import axios from "axios"

export interface LoginRequest{
    username: string,
    password: string
}

export interface Loginresponse {
    _id:string,
    username: string,
    token: string
}

const api = axios.create({
    baseURL:"http://localhost:5000/api/auth",
})

const AuthApi = {
    login: async (data: LoginRequest): Promise<Loginresponse>=>{
        const response = await api.post<Loginresponse>('/login',data)
        return response.data
    }
}

export default AuthApi