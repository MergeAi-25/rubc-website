import os
import json
import datetime
import requests

def get_api_key():
    """Get the Grok AI API key from environment variable or user input."""
    api_key = os.environ.get("GROK_API_KEY")
    if not api_key:
        api_key = input("Please enter your Grok AI API key: ")
        # Store temporarily for this session
        os.environ["GROK_API_KEY"] = api_key
    return api_key

def save_conversation(messages, filename=None):
    """Save the conversation to a JSON file."""
    if not filename:
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"conversation_{timestamp}"
    
    # Create a logs directory if it doesn't exist
    os.makedirs("logs", exist_ok=True)
    
    # Save JSON format
    json_filepath = os.path.join("logs", f"{filename}.json")
    with open(json_filepath, 'w', encoding='utf-8') as f:
        json.dump(messages, f, indent=2, ensure_ascii=False)
    
    # Save text format (human-readable)
    text_filepath = os.path.join("logs", f"{filename}.txt")
    with open(text_filepath, 'w', encoding='utf-8') as f:
        f.write(f"Conversation Transcript - {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        for msg in messages:
            role = msg.get("role").capitalize()
            content = msg.get("content")
            if role != "System":  # Skip system messages in the transcript
                f.write(f"{role}: {content}\n\n")
    
    return json_filepath

def load_conversation(filepath):
    """Load a conversation from a JSON file."""
    try:
        # If the user provided .txt extension, convert to .json
        if filepath.endswith('.txt'):
            filepath = filepath.replace('.txt', '.json')
        # If no extension was provided, add .json
        elif not filepath.endswith('.json'):
            filepath = f"{filepath}.json"
            
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, FileNotFoundError) as e:
        print(f"Error loading conversation: {e}")
        return []

def print_help():
    """Print help information."""
    print("\nAvailable commands:")
    print("  /help          - Show this help message")
    print("  /save [name]   - Save the conversation (optional filename)")
    print("  /load <name>   - Load a conversation file")
    print("  /clear         - Clear the current conversation")
    print("  /list          - List saved conversations")
    print("  /exit          - Exit the chatbot")

def list_saved_conversations():
    """List all saved conversations."""
    try:
        if not os.path.exists("logs"):
            print("No saved conversations found.")
            return
            
        files = os.listdir("logs")
        json_files = [f for f in files if f.endswith('.json')]
        
        if not json_files:
            print("No saved conversations found.")
            return
            
        print("\nSaved conversations:")
        for i, f in enumerate(sorted(json_files), 1):
            print(f"  {i}. {f}")
    except Exception as e:
        print(f"Error listing conversations: {e}")

def chat_with_llama():
    """Run a simple chat interface with the Grok model."""
    # Initialize the API key
    try:
        api_key = get_api_key()
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    except Exception as e:
        print(f"Error initializing Grok API: {e}")
        return
    
    # System prompt to guide the model's behavior
    system_prompt = {
        "role": "system", 
        "content": "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question is asked that doesn't have a known factual answer, admit that you don't know rather than making something up. If you're not sure about something, you should indicate uncertainty."
    }
    
    # Initialize conversation history with system prompt
    messages = [system_prompt]
    
    print("\n" + "="*60)
    print("Welcome to Grok AI Chat!".center(60))
    print("="*60)
    print("Type '/help' to see available commands")
    
    while True:
        # Get user input
        user_input = input("\nYou: ")
        
        # Handle special commands
        if user_input.startswith('/'):
            cmd_parts = user_input.split()
            cmd = cmd_parts[0].lower()
            
            if cmd in ['/exit', '/quit', '/bye']:
                print("Goodbye!")
                break
                
            elif cmd == '/help':
                print_help()
                continue
                
            elif cmd == '/save':
                filename = cmd_parts[1] if len(cmd_parts) > 1 else None
                # Make a copy of messages excluding system prompt for saving
                save_messages = messages[1:] if messages and messages[0].get("role") == "system" else messages
                filepath = save_conversation(save_messages, filename)
                print(f"Conversation saved to: {filepath}")
                continue
                
            elif cmd == '/load':
                if len(cmd_parts) < 2:
                    print("Error: Please specify a file to load")
                    continue
                filepath = os.path.join("logs", cmd_parts[1])
                loaded_messages = load_conversation(filepath)
                if loaded_messages:
                    # Prepend system prompt to loaded messages
                    messages = [system_prompt] + loaded_messages
                    print(f"Conversation loaded from: {filepath}")
                continue
                
            elif cmd == '/clear':
                messages = [system_prompt]  # Reset but keep system prompt
                print("Conversation cleared")
                continue
                
            elif cmd == '/list':
                list_saved_conversations()
                continue
        
        # Add user message to history
        messages.append({"role": "user", "content": user_input})
        
        try:
            # Show typing indicator
            print("Assistant: ", end="", flush=True)
            
            # Prepare the request payload
            payload = {
                "messages": messages,
                "temperature": 0.7,
                "max_tokens": 1024
            }
            
            # Make API request to Grok
            response = requests.post(
                "https://api.grok.ai/v1/chat/completions",
                headers=headers,
                json=payload
            )
            response.raise_for_status()
            response_data = response.json()
            
            # Get assistant message
            assistant_message = response_data["choices"][0]["message"]["content"]
            
            # Add assistant message to history
            messages.append({"role": "assistant", "content": assistant_message})
            
            # Print response (clear the typing indicator line first)
            print(f"\rAssistant: {assistant_message}")
            
        except Exception as e:
            print(f"\rError: {e}")
            
if __name__ == "__main__":
    chat_with_llama() 