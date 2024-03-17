import React from 'react'
import Header from '../components/header'
import welcome from '../images/welcome.png';

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='card text-white bg-secondary my-2 text-center'>
        <h1 className=''>Welcome You to PartnerPro! </h1>
        <p className='p-3 fs-6'> “We're here to connect individuals with shared goals and passions, 
          empowering you to make a difference together. Whether you're looking to 
          build a community garden, launch a charity initiative, or tackle a global 
          challenge, you'll find like-minded partners and projects to join forces with here. 
          Let's turn dreams into reality, one collaboration at a time."</p>
      </div>
      <div className='card bg-dark text-dark'>
          <img src={welcome} className="welcome img-fluid mx-auto d-block card-img" alt="welcome" />
          <div className='card-img-overlay ps-5 mt-5'>
            <p class="bg-white fw-bold wel_msg">MAKE A PROFILE</p>
            <button className='btn btn-outline-warning btn-lg fw-bold fs-2'>Click here</button>
          </div>
      </div>
    </div>
  )
}
