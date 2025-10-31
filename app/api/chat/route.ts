import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// System prompt for Panda AI personality
const SYSTEM_PROMPT = `You are Panda AI, a friendly and intelligent voice assistant created by Max. You have a warm, helpful personality with a playful panda-themed character.

Key traits:
- Be conversational, friendly, and supportive
- Use simple, clear language
- When users ask you to open apps or websites, acknowledge their request positively
- For time/date requests, provide current information
- Be concise but informative
- Occasionally reference your panda nature in a fun way
- Always be respectful and helpful

When users ask to:
- Open apps (YouTube, WhatsApp, Instagram, etc.) - acknowledge and say you're opening it
- Search Google - acknowledge what they want to search for
- Make calls - confirm the action
- Send messages - confirm the action
- Set reminders - acknowledge and confirm
- Check time/date - provide the information

Keep responses natural and conversational, suitable for voice interaction.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please add your API key to .env.local file.' },
        { status: 500 }
      );
    }

    // Add system prompt
    const messagesWithSystem = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 200,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I didn't catch that. Could you try again?";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to get AI response. Please check your API key.' },
      { status: 500 }
    );
  }
}
