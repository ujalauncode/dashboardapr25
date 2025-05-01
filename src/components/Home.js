import React, { useState } from 'react'
import '../components/MyForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [data, setdata] = useState({
    name: '',
    address: '',
    email: '',
    password: ''
  });

  const navigation = useNavigate();

  const submitdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const signuphere = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", data); // ✅ Confirm this logs

    try {
        console.log("hey started")
      const res = await axios.post("http://localhost:5002/api/auth/signup", data);
      console.log("hey done")
      if (res.status === 201) {
        console.log("Signup done");
        navigation('/login');
      }
    } catch (error) {
        if (error.response) {
          console.log("Server responded with error:", error.response.data);
        } else if (error.request) {
          console.log("Request was made but no response received");
        } else {
          console.log("Something went wrong:", error.message);
        }
      }
      
  };

  return (
    <>
      <div>
        <h1 className='headingof'>hello everyone</h1>
        <div className='maincls'>
          <form onSubmit={signuphere}>
            <div>
              <label>Name</label>
              <input type='text' name="name" onChange={submitdata} value={data.name} />
            </div>
            <div>
              <label>Address</label>
              <input type='text' name="address" onChange={submitdata} value={data.address} />
            </div>
            <div>
              <label>Email</label>
              <input type='email' name="email" onChange={submitdata} value={data.email} />
            </div>
            <div>
              <label>Password</label>
              <input type='password' name="password" onChange={submitdata} value={data.password} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home;
