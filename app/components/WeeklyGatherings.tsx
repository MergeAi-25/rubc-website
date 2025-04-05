'use client';

import React from 'react';
import { FaPray, FaChurch } from 'react-icons/fa';

const WeeklyGatherings = () => {
  const gatherings = [
    {
      day: 'Tuesday',
      events: [
        {
          time: '16:00',
          type: 'Prayer',
          icon: <FaPray className="h-6 w-6" />,
        },
      ],
    },
    {
      day: 'Sunday',
      events: [
        {
          time: '09:30',
          type: 'Prayer',
          icon: <FaPray className="h-6 w-6" />,
        },
        {
          time: '10:00',
          type: 'Main Service',
          icon: <FaChurch className="h-6 w-6" />,
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Gatherings</h2>
          <p className="text-xl text-gray-600">Join us in worship and fellowship</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gatherings.map((gathering) => (
            <div
              key={gathering.day}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{gathering.day}</h3>
              <div className="space-y-4">
                {gathering.events.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">{event.icon}</div>
                    <div>
                      <p className="text-lg font-medium text-gray-900">{event.type}</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All are welcome to join us for worship, prayer, and fellowship.
            <br />
            Come experience the presence of God with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeeklyGatherings; 