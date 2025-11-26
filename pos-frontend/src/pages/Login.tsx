import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import AuthApi from '../features/auth/AuthApi'
import { loginSuceess } from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();   

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await AuthApi.login(formData);
            dispatch(loginSuceess(data))
            toast.success("Login successful!")
            navigate("/pos");
        }
        catch (err: any) {
            const msg = err.response?.data?.message || "Login failed"
            toast.error(msg) 
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-gray-100 min-h-screen w-full flex justify-center items-center'>
                <div className='bg-white shadow-lg rounded-xl max-w-[400px] w-full px-10 py-10'>
                    <h1 className='text-5xl text-center mb-3'>Login</h1>
                    <div className='flex justify-center items-center'>
                        <form action="POST" onSubmit={handleSubmit}>
                            <div>
                                <input 
                                    name='email' 
                                    type="text" 
                                    className='bg-gray-200 w-full my-2 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                                    placeholder='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <input 
                                    name='password' 
                                    type="password"  
                                    className='bg-gray-200 w-full my-1 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'  
                                    placeholder='password' 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className='flex - justify-center'>
                                <button 
                                    type='submit' 
                                    className='bg-indigo-600 text-white font-semibold py-3 px-6 mt-6 rounded-lg hover:bg-indigo-700 transition'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
