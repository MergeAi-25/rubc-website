import { NextResponse } from 'next/server';

interface BibleTopic {
  verses: string[];
  explanation: string;
  relatedTopics: string[];
  subtopics: {
    [key: string]: string;
  };
}

type BibleTopics = Record<string, BibleTopic>;

interface TopicMatch {
  topic: string;
  score: number;
  subtopic?: string;
}

// Extended Bible topics with comprehensive coverage
const bibleTopics: BibleTopics = {
  salvation: {
    verses: [
      "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "Romans 10:9-10 - If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
      "Ephesians 2:8-9 - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works.",
      "Acts 4:12 - Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
      "Titus 3:5 - He saved us, not because of righteous things we had done, but because of his mercy."
    ],
    explanation: "Salvation is God's gift of eternal life through faith in Jesus Christ. It involves acknowledging our sin, believing in Jesus's death and resurrection, and accepting Him as Lord and Savior. This gift is freely given by God's grace, not earned through works.",
    relatedTopics: ["faith", "grace", "repentance", "eternal life"],
    subtopics: {
      "steps to salvation": "1. Acknowledge your sin\n2. Believe in Jesus Christ\n3. Confess Jesus as Lord\n4. Repent of your sins\n5. Be baptized\n6. Live a new life in Christ",
      "assurance of salvation": "We can be assured of our salvation through faith in Christ's finished work, the witness of the Holy Spirit, and the evidence of a transformed life."
    }
  },
  prayer: {
    verses: [
      "Philippians 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "1 Thessalonians 5:17 - Pray continually.",
      "Matthew 6:9-13 - The Lord's Prayer",
      "James 5:16 - The prayer of a righteous person is powerful and effective.",
      "John 15:7 - If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you."
    ],
    explanation: "Prayer is our direct communication with God. It includes praise, thanksgiving, confession, and requests. Through prayer, we build our relationship with God, seek His guidance, and align our will with His.",
    relatedTopics: ["worship", "meditation", "fasting"],
    subtopics: {
      "types of prayer": "1. Adoration\n2. Confession\n3. Thanksgiving\n4. Supplication (ACTS)",
      "how to pray": "1. Find a quiet place\n2. Begin with praise\n3. Be honest and specific\n4. Listen for God's response\n5. End with thanksgiving",
      "prayer postures": "Standing, kneeling, prostrate, sitting, walking - any position that helps you focus on God"
    }
  },
  faith: {
    verses: [
      "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
      "Romans 10:17 - Faith comes from hearing the message, and the message is heard through the word about Christ.",
      "James 2:14-26 - Faith without works is dead.",
      "Matthew 17:20 - If you have faith as small as a mustard seed, nothing will be impossible for you."
    ],
    explanation: "Faith is trust and confidence in God and His promises. It's both a gift from God and something that grows through study of His Word and experience of His faithfulness. True faith produces action and changes how we live.",
    relatedTopics: ["trust", "belief", "obedience"],
    subtopics: {
      "growing in faith": "1. Regular Bible study\n2. Prayer\n3. Fellowship with believers\n4. Putting faith into action\n5. Trusting God in difficulties",
      "faith vs works": "Faith and works are inseparable - true faith naturally produces good works as evidence of salvation",
      "examples of faith": "Abraham, Moses, David, Daniel, and many others demonstrated great faith in God's promises"
    }
  },
  grace: {
    verses: [
      "Ephesians 2:8-9 - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.",
      "2 Corinthians 12:9 - My grace is sufficient for you, for my power is made perfect in weakness.",
      "Romans 6:14 - For sin shall no longer be your master, because you are not under the law, but under grace."
    ],
    explanation: "Grace is God's unmerited favor and love toward humanity. It's His gift that we cannot earn or deserve. Through grace, we receive salvation, forgiveness, and the power to live the Christian life.",
    relatedTopics: ["mercy", "forgiveness", "salvation"],
    subtopics: {
      "types of grace": "1. Saving grace\n2. Sustaining grace\n3. Sanctifying grace\n4. Serving grace",
      "grace vs law": "Grace frees us from the law's condemnation while empowering us to live holy lives",
      "experiencing grace": "We experience God's grace through salvation, forgiveness, spiritual growth, and daily provision"
    }
  },
  church: {
    verses: [
      "Matthew 16:18 - On this rock I will build my church, and the gates of Hades will not overcome it.",
      "Acts 2:42 - They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
      "1 Corinthians 12:27 - Now you are the body of Christ, and each one of you is a part of it."
    ],
    explanation: "The Church is both the universal body of believers and local communities of Christians. It exists for worship, discipleship, fellowship, and mission. The Church is called to be Christ's representative on earth, sharing His love and message.",
    relatedTopics: ["worship", "fellowship", "ministry"],
    subtopics: {
      "church purpose": "1. Worship\n2. Fellowship\n3. Discipleship\n4. Ministry\n5. Evangelism",
      "church leadership": "Biblical roles include pastors, elders, and deacons who serve and guide the congregation",
      "church ordinances": "Baptism and Communion are the two primary ordinances practiced by most churches"
    }
  },
  worship: {
    verses: [
      "John 4:24 - God is spirit, and his worshipers must worship in the Spirit and in truth.",
      "Psalm 95:6 - Come, let us bow down in worship, let us kneel before the Lord our Maker.",
      "Romans 12:1 - Offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship."
    ],
    explanation: "Worship is our response to God's greatness and goodness. It includes not just singing and praise, but offering our whole lives to God. True worship involves both spirit and truth, engaging our emotions and our minds.",
    relatedTopics: ["praise", "prayer", "service"],
    subtopics: {
      "elements of worship": "1. Praise\n2. Prayer\n3. Scripture reading\n4. Giving\n5. Communion",
      "personal worship": "Daily devotions, prayer, Bible study, and living a life that honors God",
      "corporate worship": "Gathering with other believers for praise, prayer, teaching, and fellowship"
    }
  },
  baptism: {
    verses: [
      "Matthew 28:19 - Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
      "Acts 2:38 - Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.",
      "Romans 6:4 - We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead, we too may live a new life."
    ],
    explanation: "Baptism is a public declaration of faith in Christ and identification with His death and resurrection. It symbolizes the washing away of sins and the beginning of a new life in Christ. It's an important step of obedience for every believer.",
    relatedTopics: ["salvation", "repentance", "communion"],
    subtopics: {
      "meaning of baptism": "Symbolizes death to sin and resurrection to new life in Christ",
      "types of baptism": "1. Water baptism\n2. Spirit baptism\n3. Baptism by immersion vs sprinkling",
      "requirements for baptism": "1. Faith in Christ\n2. Repentance of sin\n3. Understanding of baptism's meaning"
    }
  }
};

// Enhanced topic matching
function findBestMatch(message: string): TopicMatch | null {
  const words = message.toLowerCase().split(/\s+/);
  let bestMatch: TopicMatch = { topic: '', score: 0, subtopic: undefined };

  for (const [topic, info] of Object.entries(bibleTopics)) {
    let score = 0;
    let currentSubtopic: string | undefined = undefined;
    
    // Direct topic mention
    if (words.includes(topic)) {
      score += 10;
    }

    // Check for related topics
    for (const related of info.relatedTopics) {
      if (words.includes(related)) {
        score += 5;
      }
    }

    // Check subtopics
    for (const [subtopic, content] of Object.entries(info.subtopics)) {
      if (message.toLowerCase().includes(subtopic)) {
        score += 8;
        currentSubtopic = subtopic;
      }
      // Check content of subtopics
      const subtopicWords = content.toLowerCase().split(/\s+/);
      const matchingWords = words.filter(w => subtopicWords.includes(w));
      score += matchingWords.length * 2;
    }

    // Check for words from verses and explanation
    const topicContent = [
      ...info.verses,
      info.explanation,
      ...info.relatedTopics,
    ].join(' ').toLowerCase();

    for (const word of words) {
      if (word.length > 3 && topicContent.includes(word)) {
        score += 2;
      }
    }

    if (score > bestMatch.score) {
      bestMatch = { topic, score, subtopic: currentSubtopic };
    }
  }

  return bestMatch.score > 0 ? bestMatch : null;
}

interface ChatResponse {
  message: string;
  verses: string[];
  explanation: string;
  relatedTopics?: string[];
  suggestedTopics?: string[];
}

function generateResponse(match: TopicMatch): ChatResponse {
  const topic = bibleTopics[match.topic];
  let response: ChatResponse = {
    message: `Here's what I know about ${match.topic}:`,
    verses: topic.verses,
    explanation: topic.explanation,
    relatedTopics: topic.relatedTopics
  };

  // If there's a subtopic, add specific information
  if (match.subtopic && topic.subtopics[match.subtopic]) {
    response = {
      ...response,
      message: `Here's specific information about ${match.subtopic} in relation to ${match.topic}:`,
      explanation: `${topic.subtopics[match.subtopic]}\n\n${topic.explanation}`
    };
  }

  return response;
}

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;
const MODEL = 'meta-llama/Llama-3-70b-chat-hf';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate that messages exists and is an array
    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          message: 'Invalid request format. Messages array is required.',
          verses: [],
          explanation: '',
          suggestedTopics: Object.keys(bibleTopics)
        },
        { status: 400 }
      );
    }

    const lastMessage = body.messages[body.messages.length - 1];
    
    // Validate the last message has the required properties
    if (!lastMessage || typeof lastMessage.content !== 'string') {
      return NextResponse.json(
        {
          message: 'Invalid message format. Each message must have a content property.',
          verses: [],
          explanation: '',
          suggestedTopics: Object.keys(bibleTopics)
        },
        { status: 400 }
      );
    }

    // Try to find a matching topic in our local database first
    const match = findBestMatch(lastMessage.content);
    if (match) {
      const response = generateResponse(match);
      return NextResponse.json(response);
    }

    // If no local match and API key is available, try the Together.ai API
    if (TOGETHER_API_KEY) {
      const response = await fetch('https://api.together.xyz/inference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOGETHER_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: body.messages,
          max_tokens: 1024,
          temperature: 0.7,
          top_p: 0.7,
          top_k: 50,
          repetition_penalty: 1,
          stop: ['</s>', '[/INST]'],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from Together.ai API');
      }

      const data = await response.json();
      return NextResponse.json({
        message: data.output.choices[0].text,
        verses: [],
        explanation: '',
        suggestedTopics: Object.keys(bibleTopics)
      });
    }

    // If no API key and no local match, return a default response
    return NextResponse.json({
      message: "I can help you with topics like salvation, prayer, faith, grace, church, worship, and baptism. What would you like to know about?",
      verses: [],
      explanation: '',
      suggestedTopics: Object.keys(bibleTopics)
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      {
        message: 'I apologize, but I encountered an error. Please try asking your question again.',
        verses: [],
        explanation: '',
        suggestedTopics: Object.keys(bibleTopics)
      },
      { status: 500 }
    );
  }
} 