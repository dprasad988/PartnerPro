import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Logout from '../components/logout';

  const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          // Verify the token or make a request to check if it's valid
          // For simplicity, I'm assuming the presence of a token means the user is logged in
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (!isLoggedIn) {
    // If not logged in, redirect to the signin page
    navigate('/signin');
    return null; // Return null to prevent rendering anything
  }

  return (
    <div>
      <h1>Profile</h1>
      <Sidebar />
      <Logout />
    </div>
  );
};

export default Profile;
