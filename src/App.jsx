import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import DesktopScreen from './components/DesktopScreen';
import Background from './assets/background.png'; // Import your Ghibli background image

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [pfpUrl, setPfpUrl] = useState(null); // State to store the profile picture URL

  // IMPORTANT: Replace this with the URL of your actual Ghibli background image.
  const ghibliBackground = Background;

  // Handle login, now accepting username and pfpUrl
  const handleLogin = (name, pfp) => {
    if (name.trim()) {
      setUsername(name);
      setPfpUrl(pfp); // Set the profile picture URL
      setLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 font-inter">
      {!loggedIn ? (
        <LoginScreen onLogin={handleLogin} ghibliBackground={ghibliBackground} />
      ) : (
        <DesktopScreen username={username} pfpUrl={pfpUrl} ghibliBackground={ghibliBackground} />
      )}
    </div>
  );
};

export default App;
