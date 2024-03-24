import React from 'react'
import Header from '../components/header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validateEmail, validatePassword } from '../components/functions.js';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        gender: '',
        goal: '',
        pass: '',
        confpass: ''
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
        e.preventDefault(); // Prevent default form submission behavior

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validatePassword(formData.pass)) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        if (formData.pass !== formData.confpass) {
            alert('Passwords do not match.');
            return;
        }
    
        axios.post('http://localhost:5000/signup', formData) // Send POST request to backend
        .then(res => {
            console.log(res); // Log response data to the console
            if (res.status === 200) {
                alert('Registered successfully');
                navigate('/signin'); // Navigate to sign-in page if registration is successful
            }
        })
        .catch(err => console.log(err)); // Log any errors to the console
    }
    

  return (
    <div>
        <Header/>
        <div className='container  '>
            <div className='row justify-content-center '>
      <form className='row-6 border border-4 col-6 px-4 border-dark py-2 mt-2 ' onSubmit={handleSubmit}>
        <h1 className=' m-0 text-center '>Sign Up Here</h1>
            <div className='col-md-12'>
                <label className='form-label'>Name</label>
                <input className='form-control w-5' name='name' type='text' placeholder='Enter Your Name' value={formData.name} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Email</label>
                <input className='form-control' name='email' type='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Contact Number</label>
                <input className='form-control' name='contact' type='text' placeholder='Enter Your Mobile Number' value={formData.contact} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Gender</label><br/>
                <input className='me-2' type="radio" name='gender' value="Male" onChange={handleChange}/>
                <label className='me-3' for="male">Male</label>
                <input className='me-2' type="radio" name='gender' value="Female" onChange={handleChange}/>
                <label className='me-3' for="female">Female</label>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>What's Your Goal </label>
                <input className='form-control' name='goal' type='text' placeholder='Enter Your Goal' value={formData.goal} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Password</label>
                <input className='form-control' name='pass' type='password' placeholder='Enter Your Password' value={formData.pass} onChange={handleChange}></input>
            </div>
            <div className='col-md-12'>
                <label className='form-label'>Re-Enter Password</label>
                <input className='form-control' name='confpass' type='password' placeholder='Re-Enter Your Password' value={formData.confpass} onChange={handleChange}></input>
            </div>
            <div className='col-md-12 mt-2'>
                <button className='btn btn-primary'>Submit</button>
            </div>
      </form>
      </div>
      </div>
    </div>
  )
}
