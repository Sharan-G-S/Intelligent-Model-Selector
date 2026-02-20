# SeptemberAI - Intelligent AI Model Router
# Sharan G S
## Overview

Intelligent AI model router is an intelligent chat system that automatically selects the best AI model for your question. Instead of choosing a model yourself, the system analyzes your query and picks the most suitable model to give you the best answer.

## How It Works

### Simple 4-Step Process

1. **You ask a question** - Type your query in the chat box
2. **System analyzes your query** - Our intelligent router examines what you're asking
3. **Best model selected** - The system picks the most suitable AI model
4. **You get the answer** - The selected model provides the response

### Smart Model Selection

The system uses a 6-step scoring method to choose the right model:

**Step 1: Task Recognition**
- Identifies what type of task you need (coding, research, writing, etc.)
- Each task type has a preferred model

**Step 2: Keyword Analysis**
- Looks for important words in your question
- Matches these words to model specializations

**Step 3: Query Length Check**
- Short questions go to fast models
- Long questions go to detailed analysis models

**Step 4: Task Confirmation**
- Double-checks by looking for multiple related keywords
- Ensures accuracy in model selection

**Step 5: Question Type**
- Simple questions (what, who, when) → Quick answer models
- Complex questions (why, how, explain) → Deep thinking models

**Step 6: Default Selection**
- If no clear match, selects general-purpose models
- Ensures you always get a response

## Available Models

### ChatGPT-5.2
**Best for:** Documentation and writing
- Creates clear guides and tutorials
- Writes professional content
- Explains concepts simply

### Claude Opus
**Best for:** Research and analysis
- Deep analysis of complex topics
- Strategic planning and insights
- Comprehensive research

### Claude Sonnet
**Best for:** Coding and development
- Writes clean code
- Debugs errors
- Builds web applications

### Claude Haiku
**Best for:** Quick answers
- Fast responses
- Simple questions
- Brief explanations

### Gemini Pro
**Best for:** Long documents
- Handles large files
- Technical documentation
- Multi-file analysis

### Gemini Flash
**Best for:** General chat
- Natural conversations
- General questions
- Friendly assistance

### Gemini Nano
**Best for:** Visual design
- Image suggestions
- UI/UX ideas
- Design concepts

### Perplexity
**Best for:** Current information
- Latest news and trends
- Real-time data
- Current events

## Technical Details

### Architecture
- **Frontend:** HTML, CSS, JavaScript (intelligent routing)
- **Backend:** Python with FastAPI
- **AI Provider:** Groq API (Llama 3.3 70B model)

### How Models Are Selected

Each query is scored based on multiple factors. The model with the highest score wins.

**Example:**
Query: "How do I debug Python code?"

- Task pattern: Coding detected (+10 points to Claude Sonnet)
- Keywords: "debug", "Python", "code" (+6 points to Claude Sonnet)
- Task confirmation: Multiple coding words found (+8 points to Claude Sonnet)

**Result:** Claude Sonnet selected with 24 points

## Getting Started

### Run the Project

Single command to start everything:
```bash
./run.sh
```

This will:
1. Start the backend server
2. Open the chat interface in your browser
3. Ready to use!

### Requirements

- Python 3.8+
- Internet connection
- Groq API key (included)

## Key Features

- **Automatic Selection:** No manual model choosing needed
- **8 Specialized Models:** Each expert in different tasks
- **Smart Routing:** Uses 6-step intelligent analysis
- **Fast Responses:** Optimized for speed
- **Clean Interface:** Professional design with purple theme
- **Real-time Processing:** Instant model selection and routing

## Project Structure

```
System-Model/
├── index.html             # Chat interface
├── script.js              # Model routing logic
├── styles.css             # Professional styling
├── backend.py             # API server
├── requirements_groq.txt  # Dependencies
├── run.sh                 # Start script
└── README.md              # Documentation
```

## Why This Approach?

**Traditional approach:** User picks a model → May choose wrong one → Poor results

**Our approach:** System analyzes query → Picks best model → Optimal results

This ensures you always get the best answer from the most suitable AI model for your specific question.



# Sharan G S

