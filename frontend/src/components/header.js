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
                <img src={pplogo} className="logo" alt="PartnerPro" />
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

        <div className='d-flex row ps-2'>
            <nav className='navbar navbar-light text-white bg-success fs-5 py-0'>
                <div className='col-sm-2 btn-group'>
                    <button type="button" class="btn btn-primary">Home</button>
                </div>
                <div className='col-sm-4 btn-group'>
                    <button type="button" class="btn btn-primary">Goal Catogary</button>
                </div>
                <div className='col-sm-2 btn-group'>
                <button type="button" class="btn btn-primary">Commiunty</button>
                </div>
                <div className='col-sm-2 btn-group'>
                <button type="button" class="btn btn-primary">About Us</button>
                </div>
                <div className='col-sm-2 btn-group'>
                <button type="button" class="btn btn-primary">Contact Us</button>
                </div>
            </nav>
        </div>
    </div>
  )
}
