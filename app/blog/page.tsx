'use client';

import React, { useState } from 'react';
import { FaSearch, FaTag } from 'react-icons/fa';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'devotionals', name: 'Devotionals' },
    { id: 'church-news', name: 'Church News' },
    { id: 'bible-studies', name: 'Bible Studies' },
    { id: 'testimonies', name: 'Testimonies' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Power of Prayer',
      category: 'devotionals',
      excerpt: 'Discover how prayer can transform your life and deepen your relationship with God...',
      author: 'Dr. Joel Motlafi',
      date: 'February 15, 2024',
      image: '/images/church building.jpg',
      tags: ['Prayer', 'Spiritual Growth'],
    },
    {
      id: 2,
      title: 'Passover Conference 2024 Highlights',
      category: 'church-news',
      excerpt: 'Relive the powerful moments from our annual Passover Conference...',
      author: 'Church Media Team',
      date: 'February 10, 2024',
      image: '/images/Ministers Seminar Poster.jpg',
      tags: ['Events', 'Conference'],
    },
    {
      id: 3,
      title: 'Bible Study: The Book of Revelation',
      category: 'bible-studies',
      excerpt: 'An in-depth study of the Book of Revelation and its relevance today...',
      author: 'Pastor Thulani Nkosi',
      date: 'February 5, 2024',
      image: '/images/background.jpg',
      tags: ['Bible Study', 'Prophecy'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">Insights, Devotionals, and Church Updates</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaTag className="text-primary" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm text-primary bg-primary bg-opacity-10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 text-primary hover:text-primary-dark font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest blog posts and church updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 