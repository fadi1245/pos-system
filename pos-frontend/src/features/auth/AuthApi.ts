import axios from "axios"
import { API } from "../../constants/api";

export interface LoginRequest{
    email: string,
    password: string
}

export interface LoginResponse {
    token: string;       
    user: {
        _id: string;
        username: string;
        email: string;
        phone: string;
    };
}

export interface RegisterRequest {
  username: string
  email:string
  phone:string
  password: string
}

export interface RegiterResponse{
  status : string;
  data:{
    _id: string;
    username: string;
    email: string,
    phone: string
  }
}


const AuthApi = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
      const response = await axios.post<LoginResponse>(API.AUTH_LOGIN, data);
      return response.data;
    },
    register: async(data:RegisterRequest):Promise<RegiterResponse>=>{
      const response = await axios.post<RegiterResponse>(API.AUTH_REGISTER, data)
      return response.data
    }
  };

export default AuthApi