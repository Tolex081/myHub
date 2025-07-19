import React, { useState } from 'react'; // Import useState
import DateTimeDisplay from './DateTimeDisplay';
import XHandleDisplay from './XHandleDisplay';
import DesktopIcons from './DesktopIcons';
import Taskbar from './Taskbar';
import Icon1 from '../assets/WWTBAP.png'; // Import your icon image
import Icon3 from '../assets/notepsd.png'; // Import your icon image
import Icon4 from '../assets/emojisaga.png'; // Import your icon image
import Icon5 from '../assets/lover.png'; // Import your icon image
import Icon6 from '../assets/summer.png'; // Import your icon image
import Icon7 from '../assets/badge.png'; // Import your icon image
import Icon8 from '../assets/Egg.png'; // Import your icon image
import Icon2 from '../assets/crab.png'; // Import your icon image
import Icon9 from '../assets/jump.png'; // Import your icon image
import Icon10 from '../assets/Strategy.png';
import Icon11 from '../assets/TeamBlue Mosaic.jpeg';
import Icon12 from '../assets/Team Pink Mosaic.jpeg';
import Icon13 from '../assets/Team Purple Mosaic.jpeg';
import Icon14 from '../assets/TeamGreen Mosaic.jpeg';
import Icon15 from '../assets/Team Orange Mosaic.jpeg';
import Icon16 from '../assets/memories.png'
import Icon17 from '../assets/pic.png';
import Icon18 from '../assets/Gameedit.png'; // This icon can be used for the video tweet link

const DesktopScreen = ({ username, pfpUrl, ghibliBackground }) => {
  // State for managing the modal
  const [showModal, setShowModal] = useState(false);
  const [modalContentUrl, setModalContentUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [isEmbeddable, setIsEmbeddable] = useState(true); // New state to check if content is embeddable

  // Function to open the modal with a specific URL and title
  const openProjectInModal = (url, title) => {
    setModalContentUrl(url);
    setModalTitle(title);

    // Check if the URL is from X (Twitter) or another site that blocks embedding
    if (url.includes('x.com') || url.includes('twitter.com')) {
      setIsEmbeddable(false); // Mark as non-embeddable
    } else {
      setIsEmbeddable(true); // Mark as embeddable
    }
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalContentUrl('');
    setModalTitle('');
    setIsEmbeddable(true); // Reset to true for next open
  };

  // Project data (replace with your actual project names and URLs)
  const projects = [
    { id: 'proj1', name: 'WWTBAP', icon: Icon1, url: 'https://provernaire-frontend.vercel.app/' },
    { id: 'proj2', name: 'Crab Game', icon:Icon2, url: 'https://succinctcrab.vercel.app/' },
    { id: 'proj3', name: 'Succinct Notepad', icon: Icon3, url: 'https://succinctnotepad.vercel.app/welcome' },
    { id: 'proj4', name: 'Emoji Sage', icon: Icon4, url: 'https://succinctemojisaga.vercel.app/' },
    { id: 'proj5', name: 'Succinct Lover', icon: Icon5, url: 'https://succinctlover.netlify.app/' },
    { id: 'proj6', name: 'Succinct Summer', icon: Icon6, url: 'https://succinctsummer.vercel.app/' },
    { id: 'proj7', name: 'Succinct Badge', icon:Icon7, url: 'https://succinctbadge.vercel.app/' },
    { id: 'proj8', name: 'ZK Egg', icon: Icon8, url: 'https://zkegg-omega.vercel.app/' },
    { id: 'proj9', name: 'Succinct Jump', icon: Icon9, url: 'https://www.roblox.com/games/107841367088672/Succint-Jump' },
    { id: 'proj10', name: 'Succinct Strategy', icon: Icon10, url: 'https://succinct-strategist.vercel.app/' },
    { id: 'proj16', name: 'Succinct Memories', icon: Icon16, url: 'https://succinct-memories.vercel.app/' },
    { id: 'proj17', name: 'Pic Breaker', icon: Icon17, url: 'https://pic-breaker.vercel.app/' },
    { id: 'proj18', name: 'Game edit', icon: Icon18, url: 'https://succinct-game-videoedits.vercel.app/' },
    // New project for the X (Twitter) video tweet
    { id: 'proj19', name: 'Journey So Far', icon: Icon18, url: 'https://x.com/oyetoludan01/status/1945520936184139864' }, // Updated with the actual URL
  ];

  // Data for the mosaic images to be displayed directly on the desktop
  const mosaicImages = [
    { id: 'mosaic1', src: Icon11, alt: 'Team Blue Mosaic', name: 'Team Blue Mosaic' },
    { id: 'mosaic2', src: Icon12, alt: 'Team Pink Mosaic', name: 'Team Pink Mosaic' },
    { id: 'mosaic3', src: Icon13, alt: 'Team Purple Mosaic', name: 'Team Purple Mosaic' },
    { id: 'mosaic4', src: Icon14, alt: 'Team Green Mosaic', name: 'Team Green Mosaic' },
    { id: 'mosaic5', src: Icon15, alt: 'Team Orange Mosaic', name: 'Team Orange Mosaic' },
  ];

  // Projects to show in the taskbar (a subset of all projects)
  const taskbarProjects = projects.slice(0, 3); // Example: first 3 projects in taskbar

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${ghibliBackground})` }}
    >
      {/* Overlay for a soft, atmospheric effect that blends with the Ghibli background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-green-100/20 opacity-60"></div>

      {/* Top Bar - Date, Time, Welcome Message, PFP, and X Handle */}
      <div className="relative z-10 flex justify-between items-center p-4 bg-gradient-to-b from-blue-400/70 to-green-300/70 text-white shadow-lg rounded-b-3xl m-2 border-b-2 border-blue-200/50">
        <DateTimeDisplay />
        <span className="text-xl font-semibold hidden sm:block text-shadow-lg">Welcome, {username}!</span>
        <div className="flex items-center gap-4">
          {pfpUrl && (
            <img
              src={pfpUrl}
              alt="Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-3 border-white shadow-xl"
            />
          )}
          {/* Pass the username to XHandleDisplay for the link */}
          <XHandleDisplay usernameForLink={username} />
        </div>
      </div>

      {/* Desktop Content Area - Uses flexbox to arrange images and icons */}
      <div className="relative z-0 flex-grow p-6 flex flex-col sm:flex-row justify-between items-start overflow-auto">
        {/* Container for the mosaic images - uses flexbox for responsive layout */}
        <div className="flex flex-wrap gap-4 p-3 bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-2xl shadow-2xl border border-blue-400/60 mb-6 sm:mb-0 sm:mr-6 max-w-full sm:max-w-[40%] lg:max-w-[30%]">
          <h3 className="w-full text-lg font-bold text-white mb-2 text-shadow-md">Team Mosaics</h3>
          {mosaicImages.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center p-1.5 bg-gray-900/70 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-20 h-20 object-cover rounded-md shadow-sm border border-gray-600"
              />
              <span className="mt-1 text-white text-xs font-medium text-shadow-sm">{image.name}</span>
            </div>
          ))}
        </div>

        {/* Wrapper div for the grid layout of icons, pushed to the right */}
        {/* Pass the openProjectInModal function to DesktopIcons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow justify-end">
          <DesktopIcons projects={projects} openProjectInModal={openProjectInModal} />
        </div>
      </div>

      {/* Taskbar - Outer container styling removed, now just positions the Taskbar component */}
      <div className="relative z-20 w-full flex justify-center items-center m-2">
        {/* Pass the openProjectInModal function to Taskbar as well */}
        <Taskbar projects={taskbarProjects} openProjectInModal={openProjectInModal} />
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="relative w-full h-full max-w-6xl bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-2xl border border-blue-600 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-t-lg shadow-md">
              <h4 className="text-lg font-semibold truncate">{modalTitle}</h4>
              <button
                onClick={closeModal}
                className="p-1 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-sm leading-none flex items-center justify-center transition-colors duration-200"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Modal Body - Conditional rendering based on embeddability */}
            <div className="flex-grow bg-white p-1 flex items-center justify-center">
              {isEmbeddable ? (
                <iframe
                  src={modalContentUrl}
                  title={modalTitle}
                  className="w-full h-full border-none rounded-b-lg"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <p className="text-gray-800 text-lg mb-4">
                    This content cannot be embedded directly due to security policies (e.g., from X/Twitter).
                  </p>
                  <a
                    href={modalContentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-base font-semibold"
                  >
                    Open in New Tab
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopScreen;
