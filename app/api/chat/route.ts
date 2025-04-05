import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    const GROK_API_KEY = process.env.GROK_API_KEY || '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';
    
    // Format messages for Grok AI
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    // Add system message if not present
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: `You are a helpful Bible study assistant for Rise-Up Bible Church. You help answer questions about the Bible, Christianity, and the church. 
        Here's information about the church:
        Vision: "Raising The Lord's Army For The End-time Harvest"
        Mission: "Connecting and equipping believers for the effective work of ministry through preaching, teaching, and small group discipleship."
        Values: Unity, Respect, Excellence, Integrity, and Bible Reading
        Weekly Gatherings:
        - Tuesday Prayer at 16:00
        - Sunday Prayer at 09:30
        - Sunday Main Service at 10:00
        Locations:
        - Main Branch: 123 Church Street, Benoni, Gauteng
        - Newcastle Branch: 456 Faith Avenue, Osizweni, Newcastle
        Contact: Phone: +27 12 345 6789, Email: info@riseupchurch.org`
      });
    }

    // Make request to Grok AI API
    const response = await fetch('https://api.grok.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Grok AI');
    }

    const data = await response.json();
    
    return NextResponse.json({
      message: data.choices[0].message.content,
      verses: [],  // These fields are kept for compatibility with the frontend
      explanation: '',
      relatedTopics: []
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 