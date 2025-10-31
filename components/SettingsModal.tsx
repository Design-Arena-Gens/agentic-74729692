"use client";

import React, { useState } from 'react';
import { X, Moon, Sun, User as UserIcon, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface SettingsModalProps {
  onClose: () => void;
}

export default function SettingsModal({ onClose }: SettingsModalProps) {
  const { theme, toggleTheme, assistantName, setAssistantName } = useTheme();
  const [tempName, setTempName] = useState(assistantName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setAssistantName(tempName.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Theme Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Appearance
            </label>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
                <span className="text-gray-900 dark:text-white font-medium">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'
              } relative`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </div>
            </button>
          </div>

          {/* Assistant Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Assistant Name
            </label>
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onBlur={handleSaveName}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter name..."
                />
              </div>
            </div>
          </div>

          {/* About */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              About
            </label>
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐼</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Panda AI by Max</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Version 1.0.0</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Your friendly AI voice assistant with intelligent chat, voice commands, and smart actions.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Features
            </label>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Voice recognition and text-to-speech</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Open apps and websites</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Web search integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Time, date, and system info</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Chat history storage</span>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Privacy & Security
            </label>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                <strong>🔒 Your Privacy Matters</strong>
              </p>
              <ul className="space-y-1 list-disc list-inside text-xs">
                <li>All voice processing happens in your browser</li>
                <li>Chat history is stored locally on your device</li>
                <li>API requests are sent securely over HTTPS</li>
                <li>We don't collect or share your personal data</li>
                <li>You can clear your data anytime</li>
                <li>No hidden background processes</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                By using this app, you agree to our privacy practices and terms of service.
              </p>
            </div>
          </div>

          {/* Voice Commands Help */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Voice Commands
            </label>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <p>Try saying:</p>
              <ul className="list-disc list-inside space-y-0.5 ml-2">
                <li>"Open YouTube"</li>
                <li>"Search Google for cats"</li>
                <li>"What time is it?"</li>
                <li>"Open WhatsApp"</li>
                <li>"Show me the date"</li>
              </ul>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Created with 💜 by Max
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Powered by OpenAI & Web Speech API
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
