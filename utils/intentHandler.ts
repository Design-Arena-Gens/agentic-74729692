/**
 * Intent Handler - Processes voice commands and executes appropriate actions
 * Handles app opening, web searches, system commands, etc.
 */

interface IntentResult {
  handled: boolean;
  response: string;
  action?: () => void;
}

export function handleVoiceCommand(input: string): IntentResult {
  const lowerInput = input.toLowerCase().trim();

  // Open app/website commands
  if (lowerInput.includes('open')) {
    return handleOpenCommand(lowerInput);
  }

  // Search commands
  if (lowerInput.includes('search') || lowerInput.includes('google')) {
    return handleSearchCommand(lowerInput);
  }

  // Time and date commands
  if (lowerInput.includes('time')) {
    return handleTimeCommand();
  }

  if (lowerInput.includes('date') || lowerInput.includes('today')) {
    return handleDateCommand();
  }

  // Weather (note: would need API integration for real weather)
  if (lowerInput.includes('weather')) {
    return {
      handled: true,
      response: "I can help you check the weather! Opening a weather website for you.",
      action: () => window.open('https://weather.com', '_blank'),
    };
  }

  // No specific intent matched
  return {
    handled: false,
    response: '',
  };
}

function handleOpenCommand(input: string): IntentResult {
  const appMappings: { [key: string]: { url: string; name: string } } = {
    youtube: { url: 'https://youtube.com', name: 'YouTube' },
    whatsapp: { url: 'https://web.whatsapp.com', name: 'WhatsApp' },
    instagram: { url: 'https://instagram.com', name: 'Instagram' },
    facebook: { url: 'https://facebook.com', name: 'Facebook' },
    twitter: { url: 'https://twitter.com', name: 'Twitter' },
    x: { url: 'https://x.com', name: 'X (Twitter)' },
    gmail: { url: 'https://gmail.com', name: 'Gmail' },
    maps: { url: 'https://maps.google.com', name: 'Google Maps' },
    github: { url: 'https://github.com', name: 'GitHub' },
    reddit: { url: 'https://reddit.com', name: 'Reddit' },
    spotify: { url: 'https://spotify.com', name: 'Spotify' },
    netflix: { url: 'https://netflix.com', name: 'Netflix' },
    amazon: { url: 'https://amazon.com', name: 'Amazon' },
    linkedin: { url: 'https://linkedin.com', name: 'LinkedIn' },
    tiktok: { url: 'https://tiktok.com', name: 'TikTok' },
    discord: { url: 'https://discord.com', name: 'Discord' },
    slack: { url: 'https://slack.com', name: 'Slack' },
    zoom: { url: 'https://zoom.us', name: 'Zoom' },
    drive: { url: 'https://drive.google.com', name: 'Google Drive' },
    docs: { url: 'https://docs.google.com', name: 'Google Docs' },
    calendar: { url: 'https://calendar.google.com', name: 'Google Calendar' },
  };

  // Check which app/website to open
  for (const [key, { url, name }] of Object.entries(appMappings)) {
    if (input.includes(key)) {
      window.open(url, '_blank');
      return {
        handled: true,
        response: `Opening ${name} for you!`,
      };
    }
  }

  // Generic URL opening
  const urlMatch = input.match(/open\s+(.+)/i);
  if (urlMatch) {
    const site = urlMatch[1].trim();
    return {
      handled: true,
      response: `I'll try to open ${site} for you.`,
      action: () => {
        let url = site;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'https://' + url;
        }
        window.open(url, '_blank');
      },
    };
  }

  return {
    handled: true,
    response: "I'm not sure which app or website you want to open. Could you be more specific?",
  };
}

function handleSearchCommand(input: string): IntentResult {
  // Extract search query
  let query = '';

  const searchMatch = input.match(/search\s+(?:for\s+)?(.+)/i);
  const googleMatch = input.match(/google\s+(?:for\s+)?(.+)/i);

  if (searchMatch) {
    query = searchMatch[1].trim();
  } else if (googleMatch) {
    query = googleMatch[1].trim();
  }

  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
    return {
      handled: true,
      response: `Searching Google for "${query}"!`,
    };
  }

  return {
    handled: true,
    response: "What would you like me to search for?",
  };
}

function handleTimeCommand(): IntentResult {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return {
    handled: true,
    response: `The current time is ${timeString}.`,
  };
}

function handleDateCommand(): IntentResult {
  const now = new Date();
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    handled: true,
    response: `Today is ${dateString}.`,
  };
}

// System action handlers (for web context)
export function makePhoneCall(number: string): void {
  // In web context, open tel: link
  window.location.href = `tel:${number}`;
}

export function sendSMS(number: string, message?: string): void {
  // In web context, open sms: link
  const smsUrl = message
    ? `sms:${number}?body=${encodeURIComponent(message)}`
    : `sms:${number}`;
  window.location.href = smsUrl;
}

export function sendEmail(email: string, subject?: string, body?: string): void {
  let mailtoUrl = `mailto:${email}`;
  const params = [];

  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  if (params.length > 0) {
    mailtoUrl += '?' + params.join('&');
  }

  window.location.href = mailtoUrl;
}

export function openCamera(): void {
  // For web, can't directly open camera, but could implement camera capture
  alert('Camera feature would require camera permissions. This could be implemented with getUserMedia API.');
}

export function setReminder(message: string, time?: Date): void {
  // In web context, could use Notifications API or integrate with calendar
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Panda AI Reminder', {
      body: message,
      icon: '/panda-icon.png',
    });
  } else if ('Notification' in window && Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Panda AI Reminder', {
          body: message,
          icon: '/panda-icon.png',
        });
      }
    });
  } else {
    alert(`Reminder: ${message}`);
  }
}
