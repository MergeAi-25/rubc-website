import React from 'react';
import Hero from './components/Hero';
import VisionMissionValues from './components/VisionMissionValues';
import WeeklyGatherings from './components/WeeklyGatherings';
import FloatingChatButton from './components/FloatingChatButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <VisionMissionValues />
      <WeeklyGatherings />
      <FloatingChatButton />
    </main>
  );
} 