'use client';

import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  const leaders = [
    {
      name: 'Dr. Joel Motlafi',
      role: 'Founder & Senior Pastor (Benoni Branch)',
      image: '/images/Dr J & Mrs E Motlafi.jpeg',
      bio: 'Dr. Joel Motlafi, alongside his wife Mrs. Ellen Motlafi, founded Rise-Up Bible Church with a vision to raise an army for the Lord\'s end-time harvest.',
    },
    {
      name: 'Pastor Thulani Nkosi',
      role: 'Branch Pastor (Osizweni, Newcastle)',
      image: '/images/Pastor T & Mrs N Nkosi.png',
      bio: 'Pastor Thulani Nkosi, together with his wife Mrs. Noluthando Nkosi, leads our Newcastle branch with dedication and passion for community transformation.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Rise-Up Bible Church</h1>
          <p className="text-xl text-gray-300">Our History, Leadership, and Ministry</p>
        </div>
      </div>

      {/* Church History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Main Branch (Benoni, Gauteng)</h3>
              <p className="text-gray-600 mb-4">
                Rise-Up Bible Church was founded with a clear vision to raise an army for the Lord's
                end-time harvest. Under the leadership of Dr. Joel Motlafi and his wife Mrs. Ellen
                Motlafi, our main branch in Benoni has grown into a vibrant community of believers
                dedicated to spreading the Gospel.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Newcastle Branch (Osizweni)</h3>
              <p className="text-gray-600 mb-4">
                Our Newcastle branch, led by Pastor Thulani Nkosi and Mrs. Noluthando Nkosi, extends
                our ministry's reach into the KwaZulu-Natal region. This branch carries forward our
                vision while serving the unique needs of the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-primary mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Approach Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Ministry Approach</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              At Rise-Up Bible Church, we believe in a holistic approach to ministry that encompasses:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Strong Biblical teaching and preaching</li>
              <li>Small group discipleship for deeper spiritual growth</li>
              <li>Community outreach and evangelism</li>
              <li>Prayer and intercession</li>
              <li>Youth and children's ministry</li>
            </ul>
            <p>
              Our focus is on equipping believers for effective ministry while creating an environment
              where everyone can experience God's presence and grow in their faith journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 