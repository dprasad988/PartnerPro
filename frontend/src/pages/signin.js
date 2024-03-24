import React from 'react'
import Header from '../components/header'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed

     // Send POST request to sign-in endpoint
     axios.post('http://localhost:5005/signin', formData)
     .then(res => {
       const { token } = res.data;
       // Store JWT token securely (e.g., in local storage)
       localStorage.setItem('jwtToken', token);
       console.log('JWT token stored:', token);
       // Navigate to user's profile page or dashboard upon successful sign-in
       navigate('/profile');
     })
     .catch(err => {
      // Handle errors here
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with status code:", err.response.status);
        console.error("Error message from server:", err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error while sending request:", err.message);
      }
    });
 };
  
  return (
    <div>
      <Header />
    <div className='container'>
      <div className='row justify-content-center '>
      
      <div className='row-6 col-6 border border-3 p-3 mt-3 '>
        <form onSubmit={handleSubmit}>
          <h1 className=' m-0 text-center '>Sign In Here</h1>
            <div className='col-md-12'>
                <label className='form-label'>Email</label>
                <input className='form-control' type='email' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Password</label>
                <input className='form-control' type='password' name='password' placeholder='Enter Your Password' value={formData.password} onChange={handleChange}></input>
            </div>
            <div className='col-md-12 mt-2'>
                <button className='btn btn-primary'>Sign In</button>
            </div>
          </form>  
      </div>
      </div>
    </div>
    </div>
  )
}
