import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

  const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Include the JWT token in the request headers
      const headers = { Authorization: localStorage.getItem('jwtToken') };
  
      // Send a POST request to the server-side logout endpoint
      await axios.post('http://localhost:5005/logout', null, { headers });
  
      console.log('Server-side logout successful');
  
      // Clear JWT token from local storage
      localStorage.removeItem('jwtToken');
      console.log('JWT token removed from local storage');
  
      // Redirect to login page
      navigate('/signin');
      console.log('Redirecting to signin page');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
