import React from 'react'
import pplogo from '../images/pplogo.png';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <div className='d-flex m-0 row'>
            <nav className='navbar navbar-light bg-dark'>
            <div className='col-sm-2'>
              <Link to="/">
                <img src={pplogo} className="logo" alt="PartnerPro" />
              </Link>
            </div>
            <div className='col-sm-8'> 
                <form className='d-flex'>
                    <input className='searchbar form-control me-2' type="text" placeholder="Search"  />
                    <button className='btn btn-outline-success' type="submit">Search</button>
                </form>
            </div>
            <div className='col-sm-1'>
                <Link to="/signup">
                    <button className='btn btn-primary' type="submit" >Sign Up</button>
                </Link>
            </div>
            <div className='col-sm-1'>
                <Link to="/signin">
                    <button className='btn btn-success' type="submit" >Sign In</button>
                </Link>
            </div>
            </nav>
        </div>

        <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            
                <li class="nav-item">
                    <a class="nav-link mx-2" href="http://localhost:3000" className="dropdown-item">Home</a>
                </li>
            
                <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Goal Catogories
                </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Community Projects</a></li>
                        <li><a class="dropdown-item" href="#">Social Causes</a></li>
                        <li><a class="dropdown-item" href="#">Envionmental Action</a></li>
                        <li><a class="dropdown-item" href="#">Business Ventures </a></li>
                        <li><a class="dropdown-item" href="#">Learning Groups </a></li>
                        <li><a class="dropdown-item" href="#">Arts and Culture</a></li>
                        <li><a class="dropdown-item" href="#">Health and Wellness</a></li>
                        <li><a class="dropdown-item" href="#">Technology Projects</a></li>
                        <li><a class="dropdown-item" href="#">Other</a></li>
                    </ul>
                </li>
            
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">Commiunity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
