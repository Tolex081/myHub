import React from 'react';

const DesktopIcons = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/30 hover:bg-white/40 transition-colors duration-200 cursor-pointer group backdrop-blur-sm shadow-lg m-2 border border-white/50"
        >
          {/* Changed from div with text/emoji to img tag */}
          <img
            src={project.icon} // project.icon should now be an image URL
            alt={`${project.name} icon`} // Alt text for accessibility
            className="w-8 h-8 sm:w-10 sm:h-12 md:w-14 md:h-16 object-contain mb-1 group-hover:scale-110 transition-transform duration-200"
            // Adding onerror to provide a fallback placeholder image
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/50x50/cccccc/333333?text=Icon`; }}
          />
          <span className="text-xs sm:text-sm md:text-base font-medium text-center drop-shadow-md">
            {project.name}
          </span>
        </a>
      ))}
    </>
  );
};

export default DesktopIcons;
