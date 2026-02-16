#!/bin/bash

# SeptemberAI - Start Script
echo "Starting SeptemberAI System..."

# Kill any existing backend process
pkill -f "python3 backend.py" 2>/dev/null

# Start backend server
echo "Starting backend server..."
python3 backend.py &

# Wait for server to start
echo "Waiting for server initialization..."
sleep 3

# Open frontend in browser
echo "Opening chat interface..."
open index.html

echo ""
echo "SeptemberAI is running!"
echo "Backend: http://localhost:8000"
echo "Frontend: Opened in your default browser"
echo ""
echo "To stop the server, press Ctrl+C or run: pkill -f 'python3 backend.py'"
