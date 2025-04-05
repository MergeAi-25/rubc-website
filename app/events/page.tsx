'use client';

import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const EventsPage = () => {
  const events = [
    {
      title: 'Passover Conference 2025',
      date: '18-20 April 2025',
      time: '09:00 - 17:00',
      location: 'Rise-Up Bible Church Main Auditorium',
      description: 'Join us for our annual Passover Conference as we celebrate and reflect on God\'s deliverance and grace. This three-day event will feature powerful worship, insightful teachings, and life-changing ministry sessions.',
    },
    {
      title: 'Pastors, Ministers, and Church Leaders Seminar',
      date: 'Monthly',
      time: '10:00 - 14:00',
      location: 'Rise-Up Bible Church Osizweni',
      description: 'A monthly gathering hosted by JMM-Joel Motlafi Ministries and Rise-Up Bible Church Osizweni, focused on equipping church leaders with practical ministry tools and spiritual insights.',
    },
  ];

  const weeklyEvents = [
    {
      day: 'Tuesday',
      events: [
        {
          title: 'Prayer Meeting',
          time: '16:00',
          description: 'Join us for our weekly prayer meeting as we intercede for our church, community, and nations.',
        },
      ],
    },
    {
      day: 'Sunday',
      events: [
        {
          title: 'Morning Prayer',
          time: '09:30',
          description: 'Start your Sunday with powerful corporate prayer.',
        },
        {
          title: 'Main Service',
          time: '10:00',
          description: 'Our weekly main service featuring worship, prayer, and the Word.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-300">
            Stay Informed About Our Ministry Gatherings and Special Conferences
          </p>
        </div>
      </div>

      {/* Special Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Special Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-primary mr-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-primary mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-primary mr-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Weekly Gatherings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weeklyEvents.map((day, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{day.day}</h3>
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-4 border-primary pl-4">
                      <h4 className="text-xl font-medium text-gray-900">{event.title}</h4>
                      <p className="text-primary mt-1">{event.time}</p>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Add our events to your calendar and never miss an important gathering.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
            Subscribe to Calendar
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage; 