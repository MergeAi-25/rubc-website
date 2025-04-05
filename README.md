# Rise-Up Bible Church Website

A modern, responsive website for Rise-Up Bible Church built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- Interactive Bible Study Chat Assistant
- Weekly gatherings information
- Vision, Mission, and Values
- Church events and blog
- Contact information

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- Together.ai API for chat functionality

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Together.ai API key:
   ```
   TOGETHER_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This website is deployed on Vercel. For deployment:

1. Push your changes to GitHub
2. Connect your GitHub repository to Vercel
3. Add your Together.ai API key to Vercel's environment variables
4. Deploy!

## Project Structure

```
rise-up-bible-church/
├── app/
│   ├── components/     # React components
│   ├── pages/         # Next.js pages
│   └── styles/        # CSS styles
├── public/            # Static assets
└── ...configuration files
```

## Contributing

Please read our contributing guidelines before submitting any changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact:
- Email: info@riseupchurch.org
- Phone: +27 76 025 0626 

# Together AI Chatbot

A simple chatbot application using Together AI's API to access the Llama-3.3-70B-Instruct-Turbo model.

## Prerequisites

- Python 3.8+
- Together AI API key (get one from [together.ai](https://together.ai))

## Installation

1. Install the required package:

```bash
pip install together
```

## Usage

1. Run the chatbot:

```bash
python chatbot.py
```

2. When prompted, enter your Together AI API key (or set it as an environment variable named `TOGETHER_API_KEY` before running).

3. Start chatting with the model! Type 'exit', 'quit', or 'bye' to end the conversation.

## Features

- Maintains conversation history for contextual responses
- Simple command-line interface
- Error handling for API issues

## Configuration

You can modify the following parameters in `chatbot.py`:
- `temperature`: Controls randomness (0.7 by default)
- `max_tokens`: Maximum length of responses (1024 by default) 