import React from 'react';

const XHandleDisplay = ({ usernameForLink }) => {
  return (
    <a
      // Construct the Twitter link using the provided username
      href={`https://twitter.com/${usernameForLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-200 transition-colors duration-200 text-sm sm:text-base font-semibold flex items-center gap-1 p-2 rounded-lg bg-blue-600/50 hover:bg-blue-700/60 shadow-md"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.714 11.24h-6.78l-5.453-7.02L5.067 22H1.75l7.393-8.456L2.25 2.25h7.227l4.816 6.208L18.244 2.25zM17.292 20l-1.155-1.155L5.067 4h2.427l10.308 14.845L17.292 20z" />
      </svg>
      {/* Display the username with an '@' prefix */}
      {usernameForLink}
    </a>
  );
};

export default XHandleDisplay;
