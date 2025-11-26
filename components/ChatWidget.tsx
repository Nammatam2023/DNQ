import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'สวัสดีค่ะ มีข้อสงสัยเกี่ยวกับขั้นตอน Flow Home Ward สอบถามได้เลยนะคะ'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    // Filter loading states from history sent to API
    const history = messages.filter(m => !m.isLoading).map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToGemini(userMsg.text, history);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsThinking(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-dnq-teal/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-dnq-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">DNQ Assistant</h3>
                <p className="text-[10px] text-dnq-light opacity-90">Powered by Gemini AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-dnq-teal text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-gray-700 rounded-tl-none border border-gray-100 shadow-sm'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                   <Loader2 className="w-4 h-4 animate-spin text-dnq-teal" />
                   <span className="text-xs text-gray-400">กำลังคิด...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="พิมพ์คำถามของคุณ..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-dnq-teal/50 text-sm transition-all"
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isThinking}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-dnq-dark text-white rounded-lg hover:bg-dnq-teal disabled:opacity-50 disabled:hover:bg-dnq-dark transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-full shadow-xl transition-all duration-300
          ${isOpen ? 'bg-gray-200 text-gray-600 rotate-0' : 'bg-dnq-dark text-white hover:bg-dnq-teal hover:scale-105'}
        `}
      >
        <span className={`${isOpen ? 'hidden' : 'block'} font-bold hidden md:block`}>สอบถามข้อมูล</span>
        <div className="relative">
           {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
           {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />}
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
