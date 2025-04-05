'use client';

import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription functionality
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/background.jpg"
          alt="Rise-Up Bible Church"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rise-Up Bible Church
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Raising The Lord's Army For The End-time Harvest
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Connecting and equipping believers for the effective work of ministry through preaching,
            teaching, and small group discipleship.
          </p>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-300">
              Subscribe to receive updates and news from our church.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 