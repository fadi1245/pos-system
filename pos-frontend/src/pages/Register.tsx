import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AuthApi, { RegisterRequest } from '../features/auth/AuthApi';
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState<RegisterRequest>({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [error,setError]= useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        setError("")

        try{
            await AuthApi.register(formData)
            toast.success("Registration successful!");
            navigate('/')
        } catch(err:any){
            const msg = err.response?.data?.message||"Registration failed";
            setError(msg)
            toast.error(msg)
        }
    }

  return  (
    <div className='flex justify-center items-center'>
        <div className='bg-gray-100 min-h-screen w-full flex justify-center items-center'>
            <div className='bg-white shadow-lg rounded-xl max-w-[400px] w-full px-10 py-10'>
                <h1 className='text-5xl text-center mb-3'>Register</h1>
                <div className='flex justify-center items-center'>
                    <form action="POST" onSubmit={handleSubmit}>
                         <div>
                            <input name='username' type="text" className='bg-gray-200 w-full my-2 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Username' value={formData.username} onChange={handleChange} />
                        </div>
                        <div>
                            <input name='email' type="text" className='bg-gray-200 w-full my-2 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='email' value={formData.email} onChange={handleChange} />
                        </div>
                         <div>
                            <input name='phone' type="text" className='bg-gray-200 w-full my-2 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Phone Number' value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                            <input name='password' type="password" className='bg-gray-200 w-full my-1 py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='password' value={formData.password} onChange={handleChange} />
                        </div>
                        <div className='flex - justify-center'>
                            <button type='submit' className='bg-indigo-600 text-white font-semibold py-3 px-6 mt-6 rounded-lg hover:bg-indigo-700 transition'>
                                Register
                            </button>
                        </div>
                    </form>

                    {error && (
                        <p className="text-red-500 mt-4 text-center">{error}</p>
                    )}
                </div>
            </div>
        </div>
    </div>
)
}

export default Register
