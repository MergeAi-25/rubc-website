'use client';

import { FaUnity, FaHandshake, FaStar, FaHeart, FaBook } from 'react-icons/fa';

const VisionMissionValues = () => {
  const values = [
    {
      icon: <FaUnity className="h-8 w-8" />,
      title: 'Unity',
      description: 'Standing together as one body in Christ.',
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: 'Respect',
      description: 'Honoring God and one another in all we do.',
    },
    {
      icon: <FaStar className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Striving for excellence in service to God.',
    },
    {
      icon: <FaHeart className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Living with honesty and moral uprightness.',
    },
    {
      icon: <FaBook className="h-8 w-8" />,
      title: 'Reading the Bible',
      description: 'Committed to studying and living by God\'s Word.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Our Vision</h2>
          <p className="text-xl text-gray-600 animate-slide-up">
            "Raising The Lord's Army For The End-time Harvest"
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-slide-up">
            "Connecting and equipping believers for the effective work of ministry through preaching,
            teaching, and small group discipleship so that together we reach the unsaved with good
            news."
          </p>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-primary mb-4 flex justify-center transform hover:rotate-12 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues; 