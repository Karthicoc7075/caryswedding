import { redirect, RedirectType } from 'next/navigation';
import React, { useState ,useEffect} from 'react';

const LoginPage = ({setAuthToken, setIsAuthenticated}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);


    


  const handleSubmit = async  (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);


      setTimeout(() => {
      setIsLoading(false);
      
      if (!username || !password) {
        setError("Please enter both username and password.");
       return;
      }
    }, 1000);

     const loginData = { username, password };
     
    const authApi =await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    const authResponse = await authApi.json();
    
    if (!authApi.ok) {
      setError(authResponse.error || 'An unexpected error occurred. Please try again.');
      setIsLoading(false);
      return;
    }
    console.log('Login successful! Token:', authResponse.token);
    setIsLoading(false);
    setIsAuthenticated(true);
    setAuthToken(authResponse.token);
    localStorage.setItem('authToken', authResponse.token);
    
   
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back!
          </h2>

       
          {error && (
            <div 
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" 
              role="alert"
            >
              <strong className="font-bold">Login Failed:</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
        
            <div className="mb-4">
              <label 
                htmlFor="username" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
           
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                placeholder="yourusername"
                disabled={isLoading}
              />
            </div>

 
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-md
                ${isLoading 
                  ? 'bg-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                }`}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

        
        </div>
      </div>
    </div>
  );
};

export default LoginPage;