import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square, ChevronRight } from 'lucide-react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'response', html: "<span class='text-neon-cyan'>Welcome to InnoHack 2026 Terminal v2.0.0</span><br>Type <span class='text-yellow-400'>'help'</span> to see available commands or <span class='text-green-400'>'register'</span> to join." }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const commandText = input.trim();
      if (!commandText) return;

      const args = commandText.toLowerCase().split(/\s+/);
      const command = args[0];

      const newHistory = [...history, { type: 'command', text: commandText }];
      let response = '';
      
      switch(command) {
        case 'help':
          response = `Available commands:
          <br>  <span class='text-yellow-400'>help</span>      - Show this list
          <br>  <span class='text-neon-cyan'>about</span>     - About InnoHack
          <br>  <span class='text-neon-purple'>tracks</span>    - List 2026 tracks
          <br>  <span class='text-green-400'>register</span>  - Registration link
          <br>  <span class='text-red-400'>clear</span>     - Clear terminal
          <br>  <span class='text-blue-400'>whoami</span>    - Current user info`;
          break;
        case 'about':
          response = 'InnoHack 2026 is the largest student-run hackathon in the region. 36 hours. 500+ hackers. Infinite possibilities.';
          break;
        case 'tracks':
          response = `1. <span class='text-neon-cyan'>HealthTech</span>
          <br> 2. <span class='text-yellow-400'>EdTech</span>
          <br> 3. <span class='text-green-400'>FinTech</span>
          <br> 4. <span class='text-red-400'>Sustainability</span>
          <br> 5. <span class='text-neon-purple'>Open Innovation</span>`;
          break;
        case 'register':
        case 'join':
          response = 'Redirecting to registration...';
          setTimeout(() => {
            window.location.href = '/register';
          }, 1000);
          break;
        case 'clear':
        case 'cls':
          setHistory([
             { type: 'response', html: "<span class='text-neon-cyan'>Welcome to InnoHack 2026 Terminal v2.0.0</span><br>Type <span class='text-yellow-400'>'help'</span> to see available commands." }
          ]);
          setInput('');
          return;
        case 'whoami':
          response = 'guest@innohack-2026';
          break;
        case 'ls':
        case 'dir':
          response = 'index.html  css/  js/  assets/  README.md';
          break;
        case 'sudo':
          response = `<span class='text-red-500'>Permission denied:</span> you are not root. Try "admin"?`;
          break;
        case 'date':
          response = new Date().toString();
          break;
        case 'exit':
          response = 'Closing session... (just kidding, stay a while!)';
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 2000); // Re-open for demo purposes
          break;
        default:
          response = `<span class='text-red-400'>zsh: command not found: ${commandText}</span>`;
      }

      if (response) {
        newHistory.push({ type: 'response', html: response });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full mx-auto font-mono text-sm shadow-2xl overflow-hidden border border-white/10 rounded-xl bg-black/80 backdrop-blur-xl ${isMaximized ? 'fixed inset-4 z-50 h-[calc(100vh-2rem)]' : 'relative h-[400px] max-w-3xl my-12'}`}
      onClick={handleContainerClick}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 select-none cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-neon-cyan" />
          <span className="text-gray-400 text-xs">innohack_terminal -- -zsh -- 80x24</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-white/10 rounded-md transition-colors">
            <Minus className="w-3 h-3 text-gray-400" />
          </button>
          <button onClick={() => setIsMaximized(!isMaximized)} className="p-1 hover:bg-white/10 rounded-md transition-colors">
            <Square className="w-3 h-3 text-gray-400" />
          </button>
          <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-red-500/20 rounded-md transition-colors group">
            <X className="w-3 h-3 text-gray-400 group-hover:text-red-400" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-4 h-[calc(100%-40px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent custom-scrollbar" 
        ref={terminalBodyRef}
      >
        <div className="space-y-2">
          {history.map((item, index) => (
            item.type === 'command' ? (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <span className="text-neon-purple">➜</span>
                <span className="text-neon-cyan">~</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <div 
                key={index} 
                className="text-gray-400 pl-6 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: item.html }} 
              />
            )
          ))}
          
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-neon-purple">➜</span>
            <span className="text-neon-cyan">~</span>
            <div className="relative flex-1">
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none outline-none text-white placeholder-gray-600 focus:ring-0 p-0 m-0 h-6"
                autoComplete="off" 
                spellCheck="false" 
                autoFocus 
              />
              {/* Blinking Cursor Simulation (optional, but input caret is usually enough) */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
