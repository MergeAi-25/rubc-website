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

3. Start chatting with the model!

## Commands

The chatbot supports the following commands:

- `/help` - Show available commands
- `/save [filename]` - Save the conversation (optional filename)
- `/load <filename>` - Load a saved conversation
- `/clear` - Clear the current conversation history
- `/list` - List all saved conversations
- `/exit` or `/quit` or `/bye` - Exit the chatbot

## Features

- Maintains conversation history for contextual responses
- System prompt to guide model behavior and ensure responsible responses
- Conversation saving and loading in both JSON and human-readable text formats
- Simple command-line interface with typing indicator
- Error handling for API issues

## Configuration

You can modify the following parameters in `chatbot.py`:
- `temperature`: Controls randomness (0.7 by default)
- `max_tokens`: Maximum length of responses (1024 by default)
- `system_prompt`: The guidance instructions for the model's behavior

## Saved Conversations

Conversations are saved in the `logs` directory in two formats:
- JSON format (`.json`) for reloading into the chatbot
- Text format (`.txt`) for easy human reading

Files are named with timestamps (`conversation_YYYYMMDD_HHMMSS`) or with a custom name if specified when using the `/save` command. The system prompt is excluded from saved conversations and automatically prepended when loading conversations.

You can load a conversation by providing either the filename with or without the extension. 