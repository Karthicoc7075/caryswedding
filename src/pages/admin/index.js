import React, { useEffect, useState } from 'react'
import LoginPage from './login'
import AdminDashboard from './dashboard'
import { useJwt } from 'react-jwt';

function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const { isExpired } = useJwt(authToken);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (authToken) {
      try {
        // isExpired is a boolean, not a timestamp
        if (!isExpired) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('authToken'); // Clean up expired token
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [authToken, isExpired]); // Add isExpired to dependencies

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