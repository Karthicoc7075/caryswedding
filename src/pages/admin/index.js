import React, { useEffect, useState } from 'react'
import LoginPage from './login'
import AdminDashboard from './dashboard'
import { jwtDecode } from "jwt-decode";

function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);


  useEffect(() => {
    if (authToken) {
      try {
        const decoded = jwtDecode(authToken);
        const currentTime = Date.now() / 1000; 
        if (decoded.exp && decoded.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('authToken');
        }

      } catch (error) {
        console.error('Error decoding JWT:', error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [authToken]); // Add isExpired to dependencies

  if (!isAuthenticated) {
    return <LoginPage setAuthToken={setAuthToken} setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <>
      <AdminDashboard />
    </>
  )
}

export default Index