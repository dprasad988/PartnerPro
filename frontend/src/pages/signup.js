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
    
        axios.post('http://localhost:5005/signup', formData) // Send POST request to backend
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
        <div className="container d-flex justify-content-center align-items-center mt-2 ">
  <div className="card shadow-lg rounded-3 p-4">
    <div className="card-body">
      <h1 className="card-title text-center mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="contact"
            name="contact"
            placeholder="Enter your mobile number"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="goal" className="form-label">
            What's Your Goal
          </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="goal"
            name="goal"
            placeholder="Enter your goal"
            value={formData.goal}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="pass"
            name="pass"
            placeholder="Enter your password"
            value={formData.pass}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confpass" className="form-label">
            Re-Enter Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="confpass"
            name="confpass"
            placeholder="Re-enter your password"
            value={formData.confpass}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
