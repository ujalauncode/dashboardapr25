import React, { useState } from 'react'
import '../components/MyForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
const[data,setdata] = useState({
    email:' ',
    password:''
})
const navigate = useNavigate()
    

 const sloginnow=async(e)=>{
    e.preventDefault();
    try {
        console.log("starting login")
        let res = await axios.post("http://localhost:5008/api/auth/login", data,{
            withCredentials: true
        
        })
        console.log("endup")
    //    let x = localStorage.setItem(res.data.name)
    //    console.log("local", x)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        alert("login done");
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
 }

 const submitingggg =(e)=>{
    setdata({...data, [e.target.name]:e.target.value})
 }

  return (
<>
<div>
    <h1 className='headingof' >Login</h1>
    <div className='maincls'>
        <form onSubmit={sloginnow}>
            <div >
                <label>email</label>
                <input type='email' onChange={submitingggg} name='email' value={data.email}/>
            </div>
            <div>
                <label>password</label>
                <input type='password' name='password' onChange={submitingggg} value={data.password}/>
            </div>
            <div>
                <button >submit</button>
            </div>
        </form>
    </div>
</div>
</> 
 )
}

export default Login