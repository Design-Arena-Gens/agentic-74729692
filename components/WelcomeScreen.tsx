"use client";

import React, { useEffect } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Panda Logo */}
        <div className="relative">
          <div className="w-40 h-40 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
            <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Panda Face */}
              <circle cx="100" cy="100" r="80" fill="white"/>
              {/* Left ear */}
              <circle cx="60" cy="50" r="25" fill="black"/>
              {/* Right ear */}
              <circle cx="140" cy="50" r="25" fill="black"/>
              {/* Left eye patch */}
              <ellipse cx="75" cy="85" rx="18" ry="22" fill="black"/>
              {/* Right eye patch */}
              <ellipse cx="125" cy="85" rx="18" ry="22" fill="black"/>
              {/* Left eye */}
              <circle cx="75" cy="88" r="8" fill="white"/>
              {/* Right eye */}
              <circle cx="125" cy="88" r="8" fill="white"/>
              {/* Nose */}
              <ellipse cx="100" cy="110" rx="12" ry="10" fill="black"/>
              {/* Mouth */}
              <path d="M 100 110 Q 90 125 80 120 M 100 110 Q 110 125 120 120" stroke="black" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-indigo-400 opacity-30 blur-xl animate-glow"></div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Hey, I'm Panda AI by Max!
          </h1>
          <p className="text-xl text-white/90 font-light">
            Your friendly voice assistant
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex space-x-2 justify-center pt-4">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
