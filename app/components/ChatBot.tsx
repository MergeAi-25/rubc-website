'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';

type MessageRole = 'system' | 'user' | 'assistant';

interface Message {
  text: string;
  isUser: boolean;
  role: MessageRole;
  verses?: string[];
  explanation?: string;
  relatedTopics?: string[];
  suggestedTopics?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Hello! I\'m here to help you with Bible study and answer questions about Rise-Up Bible Church. What would you like to know about?',
      isUser: false,
      role: 'assistant',
      suggestedTopics: ['salvation', 'prayer', 'faith', 'grace', 'church', 'worship', 'baptism']
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleTopicClick = (topic: string) => {
    setInputText(`Tell me about ${topic}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const newUserMessage: Message = { text: inputText, isUser: true, role: 'user' };
    const newMessages = [...messages, newUserMessage];
    
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.text
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const assistantMessage: Message = {
        text: data.message,
        isUser: false,
        role: 'assistant',
        verses: data.verses || [],
        explanation: data.explanation,
        relatedTopics: data.relatedTopics || [],
        suggestedTopics: data.suggestedTopics
      };
      
      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        text: 'I apologize, but I encountered an error. Please try asking your question again.',
        isUser: false,
        role: 'assistant'
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="text-lg font-semibold">Bible Study Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about the Bible or our church</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  } transform transition-all duration-300 hover:scale-102`}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>

                  {message.verses && message.verses.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="font-semibold text-gray-700">Scripture References:</p>
                      <ul className="list-none space-y-2">
                        {message.verses.map((verse, i) => (
                          <li key={i} className={`${message.isUser ? 'bg-primary-light' : 'bg-blue-50'} p-2 rounded`}>
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
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Bible topics, verses, or church teachings..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`bg-primary text-white p-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
                }`}
                disabled={isLoading}
              >
                <FaPaperPlane className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;