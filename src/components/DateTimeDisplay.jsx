import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="text-sm sm:text-base font-mono text-shadow-sm">
      <span className="block sm:inline">{formattedDate}</span>
      <span className="block sm:inline ml-0 sm:ml-2">{formattedTime}</span>
    </div>
  );
};

export default DateTimeDisplay;
