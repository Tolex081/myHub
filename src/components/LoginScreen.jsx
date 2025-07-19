import React, { useState } from 'react';

const LoginScreen = ({ onLogin, ghibliBackground }) => {
  const [inputUsername, setInputUsername] = useState('');
  const [pfpPreview, setPfpPreview] = useState(null); // State for PFP preview (Data URL)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPfpPreview(reader.result); // Set the Data URL for preview
      };
      reader.readAsDataURL(file); // Read file as Data URL
    } else {
      setPfpPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass both username and the Data URL of the PFP to onLogin
    onLogin(inputUsername, pfpPreview);
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ghibliBackground})` }}
    >
      {/* Overlay for a dreamy, slightly muted effect that blends with the Ghibli background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/30 to-green-200/30 opacity-70"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-md w-full text-center transform transition-all duration-300 hover:scale-105 border border-white/50">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-700 drop-shadow-md">Welcome to the Hub</h2>
        <p className="text-gray-600 mb-6 text-lg">Please enter your X username and optionally upload a profile picture.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white/70 text-gray-800 placeholder-gray-500"
            required
          />
          <div className="flex flex-col items-center gap-3">
            <label htmlFor="pfp-upload" className="cursor-pointer bg-green-300 text-green-800 py-3 px-6 rounded-full font-semibold hover:bg-green-400 transition-colors duration-200 shadow-md transform hover:scale-105">
              Upload Profile Picture (Optional)
            </label>
            <input
              id="pfp-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden" // Hide the default file input
            />
            {pfpPreview && (
              <img
                src={pfpPreview}
                alt="Profile Preview"
                className="w-28 h-28 rounded-full object-cover border-5 border-green-400 shadow-xl mt-4 transform transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-full font-bold text-xl shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 tracking-wide"
          >
            Enter Hub
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
