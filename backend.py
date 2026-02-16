"""
SeptemberAI - Groq-Powered AI Backend
====================================================
Unified backend using Groq API for all model routing

Author: SeptemberAI Team
Version: 3.0.0 - Groq Only
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
from groq import Groq
import asyncio
import logging
from datetime import datetime
import time
from collections import defaultdict
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('septemberai.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="SeptemberAI API",
    description="Groq-powered multi-model AI routing system",
    version="2.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================================
# Configuration
# ============================================================================

class Config:
    """Centralized configuration management"""
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    RATE_LIMIT_REQUESTS: int = 100
    RATE_LIMIT_WINDOW: int = 60
    CACHE_ENABLED: bool = True
    CACHE_TTL: int = 3600
    DEFAULT_TEMPERATURE: float = 0.7
    MAX_TOKENS: int = 4096
    REQUEST_TIMEOUT: int = 60

config = Config()

# ============================================================================
# Data Models
# ============================================================================

class ChatMessage(BaseModel):
    role: str = Field(..., description="Message role: user, assistant, or system")
    content: str = Field(..., description="Message content")

class ChatRequest(BaseModel):
    message: str = Field(..., description="User message")
    model: str = Field(..., description="Model identifier")
    conversation_history: List[ChatMessage] = Field(default=[], description="Previous messages")
    temperature: float = Field(default=0.7, ge=0, le=2)
    max_tokens: int = Field(default=4096, ge=1, le=8192)
    system_prompt: Optional[str] = Field(default=None)

class ChatResponse(BaseModel):
    response: str
    model: str
    timestamp: str
    cached: bool = False

class ModelInfo(BaseModel):
    name: str
    provider: str
    status: str
    description: str

class HealthResponse(BaseModel):
    status: str
    timestamp: str
    models: dict

# ============================================================================
# Rate Limiter
# ============================================================================

class RateLimiter:
    def __init__(self):
        self.requests = defaultdict(list)
    
    def is_allowed(self, client_ip: str) -> bool:
        now = time.time()
        window_start = now - config.RATE_LIMIT_WINDOW
        
        self.requests[client_ip] = [
            req_time for req_time in self.requests[client_ip]
            if req_time > window_start
        ]
        
        if len(self.requests[client_ip]) >= config.RATE_LIMIT_REQUESTS:
            return False
        
        self.requests[client_ip].append(now)
        return True

rate_limiter = RateLimiter()

# ============================================================================
# Cache System
# ============================================================================

class SimpleCache:
    def __init__(self):
        self.cache = {}
        self.timestamps = {}
    
    def get(self, key: str) -> Optional[str]:
        if not config.CACHE_ENABLED:
            return None
        
        if key in self.cache:
            if time.time() - self.timestamps[key] < config.CACHE_TTL:
                logger.info(f"Cache hit for key: {key[:50]}...")
                return self.cache[key]
            else:
                del self.cache[key]
                del self.timestamps[key]
        return None
    
    def set(self, key: str, value: str):
        if config.CACHE_ENABLED:
            self.cache[key] = value
            self.timestamps[key] = time.time()

cache = SimpleCache()

# ============================================================================
# AI Manager with Groq
# ============================================================================

class AIManager:
    """Manages Groq API client"""
    
    def __init__(self):
        self.groq_client = None
        self.initialize_clients()
    
    def initialize_clients(self):
        """Initialize API clients"""
        try:
            if config.GROQ_API_KEY:
                self.groq_client = Groq(api_key=config.GROQ_API_KEY)
                logger.info("Groq client initialized successfully")
            else:
                logger.error("Groq API key not configured")
        except Exception as e:
            logger.error(f"Error initializing clients: {str(e)}")
    
    async def chat_groq(self, request: ChatRequest) -> str:
        """Unified Groq API chat for all models"""
        if not self.groq_client or not config.GROQ_API_KEY:
            raise HTTPException(status_code=503, detail="Groq API not configured")
        
        try:
            # Build messages array
            messages = [{"role": msg.role, "content": msg.content} 
                       for msg in request.conversation_history]
            
            # Add system prompt based on selected model
            system_prompts = {
                'chatgpt-5.2': "You are a documentation and content writing expert. Provide clear, professional, and well-structured documentation.",
                'claude-opus': "You are a research and analysis expert. Provide comprehensive, well-researched insights and deep analysis.",
                'claude-sonnet': "You are a coding and web development expert. Provide clean, efficient code with best practices and detailed explanations.",
                'claude-haiku': "You are a quick response expert. Provide concise, accurate, and fast answers.",
                'gemini-pro': "You are a technical documentation expert with long-context understanding. Handle complex technical specifications.",
                'gemini-flash': "You are a versatile general chat assistant. Provide helpful, natural conversations.",
                'gemini-nano': "You are a visual and creative design expert. Help with image generation, UI/UX design, and visual concepts.",
                'perplexity': "You are a research expert with web search capabilities. Provide comprehensive answers with context about current information."
            }
            
            system_prompt = request.system_prompt or system_prompts.get(request.model, "You are a helpful AI assistant.")
            messages.insert(0, {"role": "system", "content": system_prompt})
            
            messages.append({"role": "user", "content": request.message})
            
            # Use Groq's llama-3.3-70b-versatile model (fast and capable)
            response = await asyncio.to_thread(
                self.groq_client.chat.completions.create,
                model="llama-3.3-70b-versatile",
                messages=messages,
                temperature=request.temperature,
                max_tokens=request.max_tokens
            )
            
            return response.choices[0].message.content
        
        except Exception as e:
            logger.error(f"Groq API error: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Groq error: {str(e)}")
    
    async def chat(self, request: ChatRequest) -> str:
        """Main chat router - uses Groq for all models"""
        logger.info(f"Using Groq for model: {request.model}")
        return await self.chat_groq(request)

ai_manager = AIManager()

# ============================================================================
# API Endpoints
# ============================================================================

@app.get("/api/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint with model status"""
    models_status = {
        "chatgpt-5.2": ModelInfo(
            name="ChatGPT-5.2",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Documentation & Content Writing"
        ),
        "claude-opus": ModelInfo(
            name="Claude Opus",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Research & Deep Analysis"
        ),
        "claude-sonnet": ModelInfo(
            name="Claude Sonnet",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Coding & Web Development"
        ),
        "claude-haiku": ModelInfo(
            name="Claude Haiku",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Quick Answers & Summaries"
        ),
        "gemini-pro": ModelInfo(
            name="Gemini 1.5 Pro",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Documentation & Long Context"
        ),
        "gemini-flash": ModelInfo(
            name="Gemini 2.0 Flash",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Real-time & General Chat"
        ),
        "gemini-nano": ModelInfo(
            name="Gemini Nano",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Image Generation & Visual Tasks"
        ),
        "perplexity": ModelInfo(
            name="Perplexity",
            provider="Groq (Llama 3.3 70B)",
            status="available" if config.GROQ_API_KEY else "not_configured",
            description="Current Events & Information"
        )
    }
    
    return HealthResponse(
        status="healthy",
        timestamp=datetime.utcnow().isoformat(),
        models=models_status
    )

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest, req: Request):
    """Unified chat endpoint for all models via Groq"""
    client_ip = req.client.host
    
    # Rate limiting
    if not rate_limiter.is_allowed(client_ip):
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
    
    # Validate model
    valid_models = ['chatgpt-5.2', 'claude-opus', 'claude-sonnet', 'claude-haiku', 
                    'gemini-pro', 'gemini-flash', 'gemini-nano', 'perplexity']
    if request.model not in valid_models:
        raise HTTPException(status_code=400, detail=f"Invalid model. Choose from: {valid_models}")
    
    # Check cache
    cache_key = f"{request.model}:{request.message}:{request.temperature}"
    cached_response = cache.get(cache_key)
    if cached_response:
        return ChatResponse(
            response=cached_response,
            model=request.model,
            timestamp=datetime.utcnow().isoformat(),
            cached=True
        )
    
    # Get AI response through Groq
    logger.info(f"Processing request - Model: {request.model}, IP: {client_ip}")
    
    try:
        response_text = await ai_manager.chat(request)
        
        # Cache the response
        cache.set(cache_key, response_text)
        
        logger.info(f"Response generated successfully for model: {request.model}")
        
        return ChatResponse(
            response=response_text,
            model=request.model,
            timestamp=datetime.utcnow().isoformat(),
            cached=False
        )
    
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        raise

@app.get("/api/models")
async def get_models():
    """Get available models with their capabilities"""
    return {
        "models": [
            {
                "id": "chatgpt-5.2",
                "name": "ChatGPT-5.2",
                "specialization": "Documentation & Content Writing",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["documentation", "writing", "tutorials", "explanations"],
                "speed": "fast",
                "cost": "low"
            },
            {
                "id": "claude-opus",
                "name": "Claude Opus",
                "specialization": "Research & Deep Analysis",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["research", "analysis", "strategic-planning", "comprehensive-research"],
                "speed": "fast",
                "cost": "low"
            },
            {
                "id": "claude-sonnet",
                "name": "Claude Sonnet",
                "specialization": "Coding & Web Development",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["coding", "web-dev", "debugging", "software-architecture"],
                "speed": "fast",
                "cost": "low"
            },
            {
                "id": "claude-haiku",
                "name": "Claude Haiku",
                "specialization": "Quick Answers",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["quick-answers", "summaries", "simple-questions"],
                "speed": "fastest",
                "cost": "low"
            },
            {
                "id": "gemini-pro",
                "name": "Gemini 1.5 Pro",
                "specialization": "Documentation & Long Context",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["long-context", "technical-docs", "specifications", "complex-analysis"],
                "speed": "fast",
                "cost": "low"
            },
            {
                "id": "gemini-flash",
                "name": "Gemini 2.0 Flash",
                "specialization": "Real-time & General Chat",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["general-chat", "real-time", "conversations"],
                "speed": "fastest",
                "cost": "low"
            },
            {
                "id": "gemini-nano",
                "name": "Gemini Nano",
                "specialization": "Image Generation & Visual Tasks",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["image-generation", "visual-design", "ui-ux"],
                "speed": "fast",
                "cost": "low"
            },
            {
                "id": "perplexity",
                "name": "Perplexity",
                "specialization": "Current Events & Information",
                "provider": "Groq (Llama 3.3 70B)",
                "capabilities": ["current-events", "information-retrieval", "research", "fact-checking"],
                "speed": "fast",
                "cost": "low"
            }
        ]
    }

# ============================================================================
# Run Server
# ============================================================================

if __name__ == "__main__":
    import uvicorn
    print("Starting SeptemberAI with Groq API...")
    print(f"Groq API Key: {'Configured' if config.GROQ_API_KEY else 'Missing'}")
    print(f"All Models: Powered by Groq (Llama 3.3 70B)")
    uvicorn.run(app, host="0.0.0.0", port=8000)
