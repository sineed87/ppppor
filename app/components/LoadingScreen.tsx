import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(1); // Start at 1%

  useEffect(() => {
    // Progress bar logic
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 30); // Adjust speed here

      return () => clearInterval(interval); // Cleanup
    } else {
      onComplete(); // Once complete, move to the main page
    }
  }, [progress, onComplete]);

  // Generate matrix effect on the screen using text
  useEffect(() => {
    const matrixContainer = document.getElementById('matrix');
    const columns = Array(60).fill(0); // Number of columns of falling text

    const interval = setInterval(() => {
      matrixContainer!.innerHTML = columns
        .map((_, i) =>
          Math.random() > 0.975
            ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) // Random ASCII characters
            : ' '
        )
        .join(' ');
    }, 50); // Interval for text falling effect

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-green-500">
      {/* Matrix effect area */}
      <div id="matrix" className="text-green-500 text-[20px] leading-relaxed"></div>
      
      {/* Loading text and progress bar */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold mb-6">Loading {progress}%</h1>
        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
