import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    user:{
        _id:string,
        username:string,
        token: string
    } | null
}

const initialState: AuthState ={
    user: null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginSuceess:(
        state,
        action: PayloadAction<{_id:string; username: string; token: string}>
    )=>{
        state.user = action.payload
    },
    logout: (state)=>{
        state.user=null
    }
}
})

export const {loginSuceess, logout} = authSlice.actions

export default authSlice.reducer