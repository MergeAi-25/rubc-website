'use client';

import { useState } from 'react';

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  verses?: string[];
  explanation?: string;
  relatedTopics?: string[];
  suggestedTopics?: string[];
}

export default function BibleChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    type: 'bot',
    content: 'Welcome! I can help you learn about various Bible topics. What would you like to know about?',
    suggestedTopics: ['salvation', 'prayer', 'faith', 'grace', 'church', 'worship', 'baptism']
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTopicClick = (topic: string) => {
    setInputMessage(`Tell me about ${topic}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      type: 'user',
      content: inputMessage,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      
      // Add bot response
      const botMessage: ChatMessage = {
        type: 'bot',
        content: data.message,
        verses: data.verses,
        explanation: data.explanation,
        relatedTopics: data.relatedTopics,
        suggestedTopics: data.suggestedTopics
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I apologize, but I encountered an error. Please try again.',
      }]);
    }

    setIsLoading(false);
    setInputMessage('');
  };

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.type === 'user'
                ? 'bg-blue-100 ml-auto max-w-[80%]'
                : 'bg-gray-100 mr-auto max-w-[90%]'
            }`}
          >
            <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
            
            {message.verses && message.verses.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="font-semibold text-gray-700">Scripture References:</p>
                <ul className="list-none space-y-2">
                  {message.verses.map((verse, i) => (
                    <li key={i} className="text-blue-600 bg-blue-50 p-2 rounded">
                      {verse}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {message.explanation && (
              <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                <p className="text-gray-700">{message.explanation}</p>
              </div>
            )}

            {message.relatedTopics && message.relatedTopics.length > 0 && (
              <div className="mt-3">
                <p className="font-semibold text-gray-700">Related Topics:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.relatedTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopicClick(topic)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {message.suggestedTopics && message.suggestedTopics.length > 0 && (
              <div className="mt-3">
                <p className="font-semibold text-gray-700">Available Topics:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {message.suggestedTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopicClick(topic)}
                      className="px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-500">Searching scripture and knowledge base...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about Bible topics, verses, or church teachings..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 transition-colors flex items-center gap-2"
        >
          <span>Send</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" 
            />
          </svg>
        </button>
      </form>
    </div>
  );
} 