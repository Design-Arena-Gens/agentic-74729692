"use client";

import React from 'react';
import { User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  assistantName: string;
}

export default function ChatMessage({ message, assistantName }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex items-start space-x-3 ${isAI ? '' : 'flex-row-reverse space-x-reverse'}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isAI
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
          : 'bg-gradient-to-br from-gray-600 to-gray-700'
      }`}>
        {isAI ? (
          <span className="text-sm">🐼</span>
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>

      {/* Message Bubble */}
      <div className="flex flex-col max-w-[80%]">
        <div
          className={`rounded-2xl px-4 py-3 shadow-md ${
            isAI
              ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
              : 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
          }`}
        >
          <p className="text-sm md:text-base whitespace-pre-wrap break-words">
            {message.text}
          </p>
        </div>
        <span className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-2 ${
          isAI ? 'text-left' : 'text-right'
        }`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
