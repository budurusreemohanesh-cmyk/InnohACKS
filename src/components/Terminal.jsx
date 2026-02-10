import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'response', html: "<span class='text-neon-cyan'>Welcome to InnoHack 2026 Terminal v2.0.0</span><br>Type <span class='text-yellow-400'>'help'</span> to see available commands or <span class='text-green-400'>'register'</span> to join." }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

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
          <br>  <span class='text-blue-400'>whoami</span>    - Current user info
          <br>  <span class='text-gray-400'>exit</span>      - Close terminal`;
          break;
        case 'about':
          response = 'InnoHack 2026 is the largest student-run hackathon in the region. 24 hours. 500+ hackers. Infinite possibilities.';
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
          response = 'Closing session...';
          setTimeout(onClose, 800); 
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            className={`w-full max-w-3xl bg-[#1e1e1e]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden ${isMaximized ? 'fixed inset-4 h-auto' : 'h-[500px]'}`}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Mac-style Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-black/50 select-none" onDoubleClick={() => setIsMaximized(!isMaximized)}>
              <div className="flex items-center gap-2">
                <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors border border-[#e0443e]" title="Close" />
                <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors border border-[#dea123]" title="Minimize" />
                <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors border border-[#1aab29]" title="Maximize" />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-medium opacity-80">
                <TerminalIcon className="w-3 h-3" />
                <span>innohack_terminal -- -zsh -- 80x24</span>
              </div>
              <div className="w-14" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div 
              className="p-4 h-[calc(100%-44px)] overflow-y-auto font-mono text-sm" 
              ref={terminalBodyRef}
              onClick={handleContainerClick}
            >
              <div className="space-y-1">
                {history.map((item, index) => (
                  item.type === 'command' ? (
                    <div key={index} className="flex items-center gap-2 text-gray-300 mt-2">
                      <span className="text-neon-purple">➜</span>
                      <span className="text-neon-cyan">~</span>
                      <span>{item.text}</span>
                    </div>
                  ) : (
                    <div 
                      key={index} 
                      className="text-gray-400 leading-relaxed break-words" 
                      dangerouslySetInnerHTML={{ __html: item.html }} 
                    />
                  )
                ))}
                
                <div className="flex items-center gap-2 text-gray-300 mt-2">
                  <span className="text-neon-purple">➜</span>
                  <span className="text-neon-cyan">~</span>
                  <div className="relative flex-1">
                    <input 
                      ref={inputRef}
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0 h-6 caret-white"
                      autoComplete="off" 
                      spellCheck="false" 
                      autoFocus 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
