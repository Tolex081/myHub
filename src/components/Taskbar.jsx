import React from 'react';

const Taskbar = ({ projects }) => {
  // Take only the first three projects for the taskbar as requested
  const threeProjects = projects.slice(0, 3);

  return (
    // Main taskbar container: Now has the subtle transparent white background, rounded corners, and shadow.
    // This container wraps all three icons.
    <div className="flex justify-center items-center gap-4 p-3 rounded-3xl bg-white/20 shadow-lg">
      {threeProjects.map((project) => ( // Iterate over only the first three projects
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          // Individual icon container: Removed background and rounded corners, as they are now on the parent div.
          // Maintained hover effect and padding.
          className="flex items-center justify-center p-2 sm:p-3 transition-all duration-200 cursor-pointer transform hover:scale-105"
        >
          <img
            src={project.icon} // project.icon should now be an image URL
            alt={`${project.name} icon`} // Alt text for accessibility
            // Image sizing to fit well within the new icon container padding.
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            // Adding onerror to provide a fallback placeholder image
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/60x60/cccccc/333333?text=Icon`; }}
          />
        </a>
      ))}
    </div>
  );
};

export default Taskbar;
