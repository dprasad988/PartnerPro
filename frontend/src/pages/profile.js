import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Logout from '../components/logout';


const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of a JWT token
    const jwtToken = localStorage.getItem('jwtToken');
    setIsLoggedIn(!!jwtToken);
  }, []);

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/profile');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <h1>Profile</h1>
      <Sidebar />
      <Logout />
    </div>
  );
};

export default Profile;
