"use client";

import { useState, useEffect } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import ChatInterface from '@/components/ChatInterface';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        {showWelcome ? (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        ) : (
          <ChatInterface />
        )}
      </main>
    </ThemeProvider>
  );
}
