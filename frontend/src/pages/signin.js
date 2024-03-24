import React from 'react'
import Header from '../components/header'
import axios from 'axios'
import { useState } from 'react'

export default function Signin() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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

    // Send POST request to backend for sign-in
    axios.post('http://localhost:5000/signin', formData)
      .then(res => {
        console.log(res);
        // Navigate to user's profile page or dashboard upon successful sign-in
        // Replace '/profile' with the actual route to the user's profile page
        // or dashboard
        //navigate('/profile');
      })
      .catch(err => console.log(err));
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
