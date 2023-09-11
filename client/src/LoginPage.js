import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the value is set in local storage
    const storedValue = localStorage.getItem('isLoggedIn');
    if (storedValue === 'true') {
      setIsLoggedIn(true);
      // Redirect to the "/home" page using navigate
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = () => {
    // Set the value in local storage
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
