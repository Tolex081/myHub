import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import XHandleDisplay from './XHandleDisplay';
import DesktopIcons from './DesktopIcons';
import Taskbar from './Taskbar';
import Icon1 from '../assets/WWTBAP.png'; // Import your icon image
import Icon2 from '../assets/crab.png'; // Import your icon image
import Icon3 from '../assets/notepsd.png'; // Import your icon image
import Icon4 from '../assets/emojisaga.png'; // Import your icon image
import Icon5 from '../assets/lover.png'; // Import your icon image     
import Icon6 from '../assets/summer.png'; // Import your icon image
import Icon7 from '../assets/badge.png'; // Import your icon image
import Icon8 from '../assets/Egg.png'; // Import your icon image
import Icon9 from '../assets/jump.png'; // Import your icon image

const DesktopScreen = ({ username, pfpUrl, ghibliBackground }) => {
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

      {/* Desktop Content Area - Now uses flexbox to push the grid to the right, and the grid itself is 3 columns */}
      <div className="relative z-0 flex-grow p-6 flex justify-end items-start overflow-auto">
        {/* Wrapper div for the grid layout */}
        <div className="grid grid-cols-3 gap-6">
          <DesktopIcons projects={projects} />
        </div>
      </div>

      {/* Taskbar - Outer container styling removed, now just positions the Taskbar component */}
      <div className="relative z-20 w-full flex justify-center items-center m-2">
        <Taskbar projects={taskbarProjects} />
      </div>
    </div>
  );
};

export default DesktopScreen;
