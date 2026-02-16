// AI Model Configuration - Practical Real-World Specializations
const AI_MODELS = {
    'chatgpt-5.2': {
        name: 'ChatGPT-5.2',
        icon: '',
        provider: 'OpenAI',
        apiEndpoint: '/api/openai/chat',
        specialization: 'Documentation & Content Writing',
        strengths: ['Technical documentation', 'Tutorial creation', 'Content writing', 'Explanations', 'General chat'],
        useCases: [
            'Writing README files and documentation',
            'Creating tutorials and how-to guides',
            'Blog posts and articles',
            'Product descriptions',
            'General knowledge Q&A',
            'Email and professional writing'
        ],
        bestFor: ['documentation', 'writing', 'tutorials', 'content', 'explanations', 'general chat'],
        keywords: ['document', 'readme', 'tutorial', 'guide', 'write', 'explain', 'how to', 'what is', 'tell me', 'describe', 'article', 'blog', 'email', 'letter'],
        taskTypes: ['documentation', 'content-writing', 'general-chat', 'explanation'],
        speed: 'fast',
        cost: 'medium'
    },
    'claude-opus': {
        name: 'Claude Opus',
        icon: '',
        provider: 'Anthropic',
        apiEndpoint: '/api/anthropic/opus',
        specialization: 'Research & Deep Analysis',
        strengths: ['Complex research', 'Data analysis', 'Critical thinking', 'Long-form analysis', 'Academic work'],
        useCases: [
            'Research papers and analysis',
            'Complex problem solving',
            'Data interpretation and insights',
            'Strategic planning',
            'Market research and trends',
            'Academic writing'
        ],
        bestFor: ['research', 'analysis', 'strategy', 'planning', 'insights'],
        keywords: ['research', 'analyze', 'study', 'investigate', 'compare', 'evaluate', 'assess', 'trends', 'insights', 'data', 'statistics', 'strategy', 'plan'],
        taskTypes: ['research', 'analysis', 'strategy', 'planning'],
        speed: 'medium',
        cost: 'premium'
    },
    'claude-sonnet': {
        name: 'Claude Sonnet',
        icon: '',
        provider: 'Anthropic',
        apiEndpoint: '/api/anthropic/sonnet',
        specialization: 'Coding & Web Development',
        strengths: ['Full-stack development', 'Code debugging', 'Web development', 'API design', 'Software architecture'],
        useCases: [
            'Frontend development (React, Vue, HTML/CSS/JS)',
            'Backend development (Node.js, Python, APIs)',
            'Code debugging and optimization',
            'Database queries and design',
            'Web application architecture',
            'Code review and refactoring'
        ],
        bestFor: ['coding', 'programming', 'web development', 'debugging', 'software'],
        keywords: ['code', 'coding', 'program', 'programming', 'develop', 'development', 'web', 'website', 'app', 'application', 'frontend', 'backend', 'html', 'css', 'javascript', 'js', 'react', 'vue', 'node', 'python', 'api', 'database', 'sql', 'debug', 'fix', 'error', 'bug', 'function', 'class', 'component'],
        taskTypes: ['coding', 'web-development', 'debugging', 'software-development'],
        speed: 'fast',
        cost: 'medium'
    },
    'claude-haiku': {
        name: 'Claude Haiku',
        icon: '',
        provider: 'Anthropic',
        apiEndpoint: '/api/anthropic/haiku',
        specialization: 'Quick Answers & Summaries',
        strengths: ['Lightning-fast responses', 'Text summarization', 'Quick Q&A', 'Simple tasks', 'Instant help'],
        useCases: [
            'Quick factual questions',
            'Text summarization',
            'Simple definitions',
            'Fast translations',
            'Brief explanations',
            'Quick code snippets'
        ],
        bestFor: ['quick answers', 'summaries', 'simple questions', 'definitions'],
        keywords: ['quick', 'fast', 'summarize', 'summary', 'tldr', 'brief', 'short', 'simple', 'what', 'who', 'when', 'where', 'define', 'definition', 'mean', 'translate'],
        taskTypes: ['quick-answer', 'summary', 'simple-question'],
        speed: 'fastest',
        cost: 'low'
    },
    'gemini-pro': {
        name: 'Gemini 1.5 Pro',
        icon: '',
        provider: 'Google',
        apiEndpoint: '/api/google/gemini-pro',
        specialization: 'Documentation & Long Context',
        strengths: ['Long document processing', 'Technical docs', 'Context understanding', 'Multi-file analysis', 'Comprehensive documentation'],
        useCases: [
            'Processing long documents (up to 2M tokens)',
            'Technical specification writing',
            'API documentation generation',
            'Code documentation',
            'Multi-file codebase analysis',
            'Large-scale content review'
        ],
        bestFor: ['long documents', 'technical specs', 'large context', 'documentation'],
        keywords: ['document', 'documentation', 'spec', 'specification', 'manual', 'reference', 'long', 'large', 'multiple files', 'codebase', 'technical', 'api doc'],
        taskTypes: ['documentation', 'long-context', 'technical-writing'],
        speed: 'medium',
        cost: 'medium'
    },
    'gemini-flash': {
        name: 'Gemini 2.0 Flash',
        icon: '',
        provider: 'Google',
        apiEndpoint: '/api/google/gemini-flash',
        specialization: 'Real-time & General Chat',
        strengths: ['Real-time responses', 'Conversational AI', 'General knowledge', 'Fast processing', 'Natural dialogue'],
        useCases: [
            'Real-time chat conversations',
            'General knowledge questions',
            'Casual conversations',
            'Quick information lookup',
            'Interactive assistance',
            'Brainstorming sessions'
        ],
        bestFor: ['chat', 'conversation', 'general questions', 'real-time'],
        keywords: ['chat', 'talk', 'conversation', 'discuss', 'help', 'assist', 'tell', 'show', 'general', 'anything', 'question', 'ask'],
        taskTypes: ['general-chat', 'conversation', 'real-time'],
        speed: 'fastest',
        cost: 'low'
    },
    'gemini-nano': {
        name: 'Gemini Nano',
        icon: '',
        provider: 'Google',
        apiEndpoint: '/api/google/gemini-nano',
        specialization: 'Image Generation & Visual Tasks',
        strengths: ['Image generation', 'Image descriptions', 'Visual creativity', 'Design suggestions', 'Image understanding'],
        useCases: [
            'Generating image prompts',
            'Describing images',
            'Visual design suggestions',
            'UI/UX design ideas',
            'Creative visual concepts',
            'Image-to-text conversion'
        ],
        bestFor: ['image generation', 'visual tasks', 'design', 'graphics'],
        keywords: ['image', 'picture', 'photo', 'visual', 'generate', 'create image', 'design', 'graphic', 'draw', 'illustration', 'ui', 'ux', 'interface', 'mockup', 'icon', 'logo', 'art'],
        taskTypes: ['image-generation', 'visual-design', 'creative-visual'],
        speed: 'fast',
        cost: 'minimal'
    },
    'perplexity': {
        name: 'Perplexity',
        icon: '',
        provider: 'Perplexity AI',
        apiEndpoint: '/api/perplexity/chat',
        specialization: 'Real-time Web Search & Research',
        strengths: ['Web search', 'Real-time information', 'Source citations', 'Current events', 'Fact-checking'],
        useCases: [
            'Real-time news and current events',
            'Market trends and latest information',
            'Fact-checking with sources',
            'Research with web citations',
            'Latest developments in any field',
            'Current statistics and data'
        ],
        bestFor: ['web search', 'current events', 'latest information', 'research', 'citations'],
        keywords: ['latest', 'current', 'recent', 'today', 'now', 'news', 'update', 'search', 'find', 'source', 'citation', 'fact', 'verify', 'check', 'trend', 'market', 'price', 'stock', 'weather'],
        taskTypes: ['web-search', 'research', 'current-events', 'fact-checking'],
        speed: 'medium',
        cost: 'medium'
    }
};

// Intelligent Model Router - Practical Real-World Implementation
class ModelRouter {
    constructor() {
        this.currentModel = null;
        this.taskPatterns = this.initializeTaskPatterns();
    }

    initializeTaskPatterns() {
        return {
            'coding': {
                patterns: [/code/i, /program/i, /debug/i, /function/i, /class/i, /component/i, /api/i, /html/i, /css/i, /javascript/i, /python/i, /react/i, /node/i, /sql/i],
                model: 'claude-sonnet',
                weight: 10
            },
            'web-development': {
                patterns: [/website/i, /web app/i, /frontend/i, /backend/i, /full.?stack/i, /web dev/i, /web page/i],
                model: 'claude-sonnet',
                weight: 10
            },
            'documentation': {
                patterns: [/readme/i, /documentation/i, /tutorial/i, /guide/i, /how.?to/i, /manual/i, /technical doc/i],
                model: 'chatgpt-5.2',
                weight: 9
            },
            'image-generation': {
                patterns: [/generate.+image/i, /create.+image/i, /draw/i, /design.+ui/i, /design.+logo/i, /generate.+picture/i, /visual.+design/i],
                model: 'gemini-nano',
                weight: 10
            },
            'web-search': {
                patterns: [/latest/i, /current/i, /recent/i, /today/i, /now/i, /news/i, /update/i, /what's new/i, /happening/i, /trending/i, /real.?time/i],
                model: 'perplexity',
                weight: 10
            },
            'current-events': {
                patterns: [/price/i, /stock/i, /market/i, /weather/i, /score/i, /result/i, /live/i, /breaking/i],
                model: 'perplexity',
                weight: 10
            },
            'research': {
                patterns: [/research/i, /analyze/i, /study/i, /investigate/i, /compare/i, /evaluate/i, /trends/i, /insights/i],
                model: 'claude-opus',
                weight: 9
            },
            'quick-answer': {
                patterns: [/^what is/i, /^who is/i, /^define/i, /quick/i, /summarize/i, /tldr/i, /^explain in brief/i],
                model: 'claude-haiku',
                weight: 8
            },
            'general-chat': {
                patterns: [/chat/i, /talk/i, /discuss/i, /help me/i, /tell me/i, /^hi\b/i, /^hello\b/i],
                model: 'gemini-flash',
                weight: 5
            }
        };
    }

    analyzeQuery(query) {
        const lowerQuery = query.toLowerCase();
        const scores = {};
        const reasons = [];
        let detectedTask = null;

        // Initialize scores
        Object.keys(AI_MODELS).forEach(model => {
            scores[model] = 0;
        });

        // STEP 1: TASK PATTERN DETECTION (Highest Priority)
        for (const [taskType, taskInfo] of Object.entries(this.taskPatterns)) {
            for (const pattern of taskInfo.patterns) {
                if (pattern.test(lowerQuery)) {
                    scores[taskInfo.model] += taskInfo.weight;
                    if (!detectedTask) {
                        detectedTask = taskType;
                        reasons.push(`Detected ${taskType.replace('-', ' ')} task`);
                    }
                    break;
                }
            }
        }

        // STEP 2: KEYWORD MATCHING (Weight: 2 points per match)
        Object.entries(AI_MODELS).forEach(([modelId, modelData]) => {
            let keywordMatches = 0;
            modelData.keywords.forEach(keyword => {
                if (lowerQuery.includes(keyword)) {
                    scores[modelId] += 2;
                    keywordMatches++;
                }
            });
            if (keywordMatches >= 3) {
                scores[modelId] += 5; // Bonus for multiple keyword matches
            }
        });

        // STEP 3: QUERY LENGTH ANALYSIS
        const wordCount = query.split(' ').length;
        if (wordCount < 8) {
            // Short queries -> Fast models
            scores['claude-haiku'] += 3;
            scores['gemini-flash'] += 2;
            if (!detectedTask) {
                reasons.push('Short query - fast response prioritized');
            }
        } else if (wordCount > 40) {
            // Long queries -> Deep thinking models
            scores['claude-opus'] += 3;
            scores['gemini-pro'] += 2;
            if (!detectedTask) {
                reasons.push('Long-form query - comprehensive analysis needed');
            }
        }

        // STEP 4: SPECIFIC TASK INDICATORS
        // Coding tasks
        const codingIndicators = ['code', 'function', 'class', 'debug', 'error', 'bug', 'api', 'database'];
        const codingMatches = codingIndicators.filter(ind => lowerQuery.includes(ind)).length;
        if (codingMatches >= 2) {
            scores['claude-sonnet'] += 8;
            if (!reasons.includes('Detected coding task')) {
                reasons.push('Multiple coding indicators found');
            }
        }

        // Documentation tasks
        const docIndicators = ['write', 'document', 'readme', 'guide', 'tutorial', 'explain', 'how to'];
        const docMatches = docIndicators.filter(ind => lowerQuery.includes(ind)).length;
        if (docMatches >= 2) {
            scores['chatgpt-5.2'] += 7;
            scores['gemini-pro'] += 5;
            if (!reasons.includes('Detected documentation task')) {
                reasons.push('Documentation/writing task identified');
            }
        }

        // Image/Visual tasks
        const visualIndicators = ['image', 'picture', 'visual', 'design', 'ui', 'logo', 'graphic'];
        const visualMatches = visualIndicators.filter(ind => lowerQuery.includes(ind)).length;
        if (visualMatches >= 1) {
            scores['gemini-nano'] += 9;
            if (!reasons.includes('Detected image-generation task')) {
                reasons.push('Visual/image task detected');
            }
        }

        // Research/Analysis tasks
        const researchIndicators = ['research', 'analyze', 'study', 'compare', 'evaluate', 'trends'];
        const researchMatches = researchIndicators.filter(ind => lowerQuery.includes(ind)).length;
        if (researchMatches >= 1) {
            scores['claude-opus'] += 7;
            if (!reasons.includes('Detected research task')) {
                reasons.push('Research/analysis task identified');
            }
        }

        // STEP 5: QUESTION TYPE DETECTION
        // Simple questions -> Quick models
        if (/^(what|who|when|where|which|define|meaning of)/i.test(lowerQuery) && wordCount < 15) {
            scores['claude-haiku'] += 5;
            scores['gemini-flash'] += 4;
        }

        // Complex questions -> Deep thinking models
        if (/^(why|how|explain|analyze|compare)/i.test(lowerQuery) && wordCount > 10) {
            scores['claude-opus'] += 4;
            scores['chatgpt-5.2'] += 3;
        }

        // STEP 6: GENERAL CHAT FALLBACK
        // If no strong indicators, favor general chat models
        const totalScores = Object.values(scores).reduce((a, b) => a + b, 0);
        if (totalScores < 10) {
            scores['gemini-flash'] += 6;
            scores['chatgpt-5.2'] += 4;
            if (reasons.length === 0) {
                reasons.push('General conversation - versatile model selected');
            }
        }

        // Find the best model
        let bestModel = 'gemini-flash'; // Default for general chat
        let highestScore = 0;

        Object.entries(scores).forEach(([model, score]) => {
            if (score > highestScore) {
                highestScore = score;
                bestModel = model;
            }
        });

        // If no clear winner or low scores, use intelligent defaults based on query type
        if (highestScore < 5) {
            bestModel = 'gemini-flash';
            reasons.push('General chat - using versatile model');
        }

        return {
            model: bestModel,
            score: highestScore,
            reasons: reasons,
            allScores: scores,
            detectedTask: detectedTask
        };
    }

    getRoutingReason(modelId, query, analysisReasons, allScores) {
        const model = AI_MODELS[modelId];
        
        // Build comprehensive reasoning without emojis
        let reasoning = `Selected Model: ${model.name}\n\n`;
        reasoning += `Specialization: ${model.specialization}\n\n`;
        reasoning += `Selection Reasoning:\n`;
        
        if (analysisReasons.length > 0) {
            analysisReasons.forEach(reason => {
                reasoning += `  - ${reason}\n`;
            });
        } else {
            reasoning += `  - Best suited for this type of task\n`;
        }
        
        reasoning += `\nModel Strengths:\n`;
        model.bestFor.slice(0, 3).forEach(skill => {
            reasoning += `  - ${skill.charAt(0).toUpperCase() + skill.slice(1)}\n`;
        });

        reasoning += `\nPerformance: Speed ${model.speed.toUpperCase()} | Cost ${model.cost.toUpperCase()}`;

        return reasoning;
    }
}

// Chat Manager
class ChatManager {
    constructor() {
        this.router = new ModelRouter();
        this.messages = [];
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.selectedModelDisplay = document.getElementById('selectedModel');
    }

    attachEventListeners() {
        // Send button
        this.sendBtn.addEventListener('click', () => this.handleSend());

        // Enter key (Shift+Enter for new line)
        this.userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            }
        });

        // Auto-resize textarea
        this.userInput.addEventListener('input', () => {
            this.userInput.style.height = 'auto';
            this.userInput.style.height = this.userInput.scrollHeight + 'px';
        });

        // Example buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.getAttribute('data-query');
                this.userInput.value = query;
                this.handleSend();
            });
        });

        // Model cards
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('click', () => {
                const modelId = card.getAttribute('data-model');
                this.showModelInfo(modelId);
            });
        });
    }

    handleSend() {
        const message = this.userInput.value.trim();
        if (!message) return;

        // Clear welcome message on first send
        const welcomeMsg = document.querySelector('.welcome-message');
        if (welcomeMsg) {
            welcomeMsg.remove();
        }

        // Add user message
        this.addMessage('user', message);

        // Clear input
        this.userInput.value = '';
        this.userInput.style.height = 'auto';

        // Route to appropriate model using intelligent analysis
        const routing = this.router.analyzeQuery(message);
        routing.query = message; // Store query for API call

        // Update current model display
        this.updateCurrentModel(routing.model);

        // Get real AI response from backend
        this.simulateResponse(routing);
    }

    addMessage(sender, text, model = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = sender === 'user' ? 'U' : 'AI';

        const content = document.createElement('div');
        content.className = 'message-content';

        const header = document.createElement('div');
        header.className = 'message-header';

        const senderName = document.createElement('span');
        senderName.className = 'message-sender';
        senderName.textContent = sender === 'user' ? 'You' : 'AI Assistant';

        header.appendChild(senderName);

        if (model) {
            const modelBadge = document.createElement('span');
            modelBadge.className = 'message-model';
            modelBadge.textContent = AI_MODELS[model].name;
            header.appendChild(modelBadge);
        }

        const messageText = document.createElement('div');
        messageText.className = 'message-text';
        
        // Format the text for better readability
        if (sender === 'assistant') {
            messageText.innerHTML = this.formatResponse(text);
        } else {
            messageText.textContent = text;
        }

        content.appendChild(header);
        content.appendChild(messageText);

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatResponse(text) {
        // Convert markdown-style formatting to HTML
        let formatted = text;

        // Convert **bold** to <strong>
        formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Convert numbered lists (1. 2. 3.) to proper list items
        formatted = formatted.replace(/^\d+\.\s+\*\*(.+?)\*\*:/gm, '<div class="list-header">$1</div>');
        
        // Convert bullet points with * to proper bullets
        formatted = formatted.replace(/^\*\s+(.+)$/gm, '<div class="bullet-item">• $1</div>');

        // Convert lines starting with # to headers
        formatted = formatted.replace(/^#+\s+(.+)$/gm, '<div class="section-header">$1</div>');

        // Add line breaks for paragraphs (double newlines)
        formatted = formatted.replace(/\n\n/g, '</p><p>');
        formatted = '<p>' + formatted + '</p>';

        // Single newlines become <br> within paragraphs
        formatted = formatted.replace(/\n/g, '<br>');

        return formatted;
    }

    async simulateResponse(routing) {
        // First, show the routing decision with detailed reasoning
        this.addRoutingDecision(routing);

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant';
        typingDiv.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();

        try {
            // Get the last user message from chat history
            const userMessage = routing.query || this.userInput.value;

            // Call backend API
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    model: routing.model
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            typingDiv.remove();

            this.addMessage(
                'assistant',
                data.response,
                routing.model
            );
        } catch (error) {
            console.error('Error calling backend:', error);
            typingDiv.remove();
            this.addMessage(
                'assistant',
                `Error connecting to backend. Please ensure backend.py is running on port 8000. Error: ${error.message}`,
                routing.model
            );
        }
    }

    addRoutingDecision(routing) {
        const decisionDiv = document.createElement('div');
        decisionDiv.className = 'routing-decision';

        const model = AI_MODELS[routing.model];
        const reasoningText = this.router.getRoutingReason(
            routing.model, 
            '', 
            routing.reasons,
            routing.allScores
        );

        decisionDiv.innerHTML = `
            <div class="routing-content">
                <div class="routing-title">Model Selected: ${model.name}</div>
                <div class="routing-text">${reasoningText.replace(/\n/g, '<br>')}</div>
            </div>
        `;

        this.chatMessages.appendChild(decisionDiv);
        this.scrollToBottom();
    }

    updateCurrentModel(modelId) {
        const model = AI_MODELS[modelId];
        this.selectedModelDisplay.textContent = `Using ${model.name}`;

        // Highlight the model card
        document.querySelectorAll('.model-card').forEach(card => {
            card.classList.remove('active');
        });
        const activeCard = document.querySelector(`[data-model="${modelId}"]`);
        if (activeCard) {
            activeCard.classList.add('active');
            activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    showModelInfo(modelId) {
        const model = AI_MODELS[modelId];
        const info = `${model.icon} ${model.name} (${model.provider})

Strengths:
${model.strengths.map(s => `• ${s}`).join('\n')}

Common Use Cases:
${model.useCases.map(u => `• ${u}`).join('\n')}

Performance: Speed - ${model.speed.toUpperCase()} | Cost - ${model.cost.toUpperCase()}

This model is automatically selected when your query matches its capabilities.`;

        this.addMessage('assistant', info, modelId);
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new ChatManager();
});
