import React, { useEffect, useState } from 'react';

export default function TipScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prev + 0.5;
      });
    }, 50); // 0.5% every 50ms = 100% in 10s

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      <h1 className="text-1xl md:text-3xl font-bold mb-6 ">
        Tip: This site contains high-quality images
      </h1>
      <p className="text-sm md:text-lg mb-8 text-center max-w-lg">
        It can take time to load images, so please be patient and scroll slowly for a better experience.
      </p>
      <div className="w-full max-w-sm bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="bg-white h-full transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
