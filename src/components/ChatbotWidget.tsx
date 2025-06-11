import React, { useState } from 'react';

/**
 * ChatbotWidget Component
 * Simple chatbot UI for user interaction.
 */
const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you with your energy needs today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: "I'm just a demo bot, but I'll connect you to an advisor soon!" }]);
    }, 800);
    setInput('');
  };

  return (
    <div className="flex flex-col h-80 w-full max-w-xs bg-white rounded-lg shadow-lg p-4">
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.from === 'bot' ? 'text-left' : 'text-right'}`}> 
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.from === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-primary text-white'}`}>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
        />
        <button
          className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-secondary transition-colors"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;
