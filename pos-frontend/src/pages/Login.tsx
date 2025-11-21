import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import AuthApi from '../features/auth/AuthApi'
import { loginSuceess } from '../features/auth/authSlice'

function Login() {
    const dispatch = useDispatch<AppDispatch>()
    const [formData, setFormData] = useState({
        username: "",
        password :""
    })

    const [error,setError]= useState("")

    const handleChange =(
        e:React.ChangeEvent<HTMLInputElement>
    )=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        setError("")
        try{
            const data = await AuthApi.login(formData);
            dispatch(loginSuceess(data))
        }
        catch(err:any){
            setError(err.response?.data?.message||"Login failed")
        }
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='bg-red-500 min-h-screen w-full'>
            <div className='bg-blue-600 max-w-[600px]'>
                <h1>Login</h1>
                <div>
                    <form action="POST" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder='Username' value={formData.username} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="password" placeholder='password' value={formData.password} onChange={handleChange}/>
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
                <a href=""></a>
            </div>
        </div>
    </div>
  )
}

export default Login
