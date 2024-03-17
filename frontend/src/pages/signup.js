import React from 'react'
import Header from '../components/header';

export default function Signup() {
    console.log('Signup button clicked!');
  return (
    <div>
        <Header/>
        <div className='container'>
      <form className='row g-3 mx-5 mt-1 p-3 d-block'>
            <div className='col-md-6'>
                <label className='form-label'>Name</label>
                <input className='form-control w-5' type='text' placeholder='Enter Your Name'></input>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Email</label>
                <input className='form-control' type='email' placeholder='Enter Your Email'></input>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Contact Number</label>
                <input className='form-control' type='text' placeholder='Enter Your Mobile Number'></input>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Gender</label><br/>
                <input className='me-2' type="radio" value="male" />
                <label className='me-3' for="male">Male</label>
                <input className='me-2' type="radio" value="female" />
                <label className='me-3' for="female">Female</label>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>What's Your Goal </label>
                <input className='form-control' type='text' placeholder='Enter Your Goal'></input>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Password</label>
                <input className='form-control' type='password' placeholder='Enter Your Password'></input>
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Re-Enter Password</label>
                <input className='form-control' type='password' placeholder='Re-Enter Your Password'></input>
            </div>
           
      </form>
      </div>
    </div>
  )
}
