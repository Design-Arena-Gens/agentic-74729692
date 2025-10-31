# 🐼 Panda AI by Max

Your friendly AI voice assistant with intelligent chat, voice commands, and smart actions!

![Panda AI](https://img.shields.io/badge/AI-Voice%20Assistant-6366f1)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)

## ✨ Features

- 🎤 **Voice Recognition** - Talk to Panda AI using your voice
- 🔊 **Text-to-Speech** - Panda AI responds with a natural voice
- 💬 **Intelligent Chat** - Powered by OpenAI GPT
- 🌐 **Web Actions** - Open websites and apps with voice commands
- 🔍 **Smart Search** - Search Google with voice or text
- 🕐 **System Info** - Get time, date, and more
- 🎨 **Beautiful UI** - Material Design with dark mode
- 💾 **Chat History** - Save and review conversations
- 🔒 **Privacy-First** - All data stored locally

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API key**
   
   Create a `.env.local` file in the root directory:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Voice Commands

Try these commands:

- "Open YouTube"
- "Open WhatsApp"
- "Search Google for cats"
- "What time is it?"
- "What's the date today?"
- "Open Gmail"
- "Open Instagram"

## 🛠️ Technology Stack

- **Framework:** Next.js 14
- **UI:** React 18 + Tailwind CSS
- **AI:** OpenAI GPT-3.5-turbo
- **Voice:** Web Speech API
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📱 Progressive Web App

Panda AI works as a PWA - install it on your device for a native app experience!

## 🔐 Privacy & Security

- ✅ All voice processing happens in your browser
- ✅ Chat history stored locally
- ✅ Secure HTTPS API communication
- ✅ No data collection or sharing
- ✅ Clear data anytime
- ✅ No hidden background processes

## 🎨 Customization

### Change Assistant Name

Go to Settings → Assistant Name

### Toggle Dark Mode

Click the sun/moon icon in the header or go to Settings

### Clear Chat History

Click the trash icon in the header

## 📝 Development

### Project Structure

```
panda-ai-by-max/
├── app/
│   ├── api/chat/       # AI chat API endpoint
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/
│   ├── ChatInterface.tsx    # Main chat UI
│   ├── ChatMessage.tsx      # Message bubbles
│   ├── SettingsModal.tsx    # Settings panel
│   └── WelcomeScreen.tsx    # Splash screen
├── context/
│   └── ThemeContext.tsx     # Theme state
├── utils/
│   └── intentHandler.ts     # Voice command processing
└── public/
    ├── manifest.json        # PWA manifest
    └── icons/               # App icons
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👤 Author

**Max**

Created with 💜 using Next.js and OpenAI

## 🙏 Acknowledgments

- OpenAI for GPT API
- Web Speech API team
- Material Design guidelines
- The amazing open-source community

---

**Note:** This is a web-based implementation. For Android native version, check out the Android Studio project.
