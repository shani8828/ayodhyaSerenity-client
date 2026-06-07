import { useState, useRef, useEffect, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import api from "@/lib/axios";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function SarthiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [initialInput, setInitialInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const initialTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Jai Shri Ram! I am Ayodhya Sarthi, your spiritual digital guide. How may I assist you with your pilgrimage or queries about Ayodhya today?",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Adjust textarea height automatically
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
    setInput(e.target.value);
  };

  const handleInitialInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
    setInitialInput(e.target.value);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMsg].filter(m => m.role !== "system");

      const response = await api.post("/api/chat", {
        messages: chatHistory
      });

      setMessages((prev) => [...prev, response.data.message]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Apologies, I am unable to connect to the divine knowledge base at the moment. Please ensure the backend server is running." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleInitialSubmit = () => {
    setIsOpen(true);
    if (!initialInput.trim()) return;
    sendMessage(initialInput);
    setInitialInput("");
    if (initialTextareaRef.current) {
      initialTextareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInitialKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleInitialSubmit();
    }
  };

  return (
    <div className="flex w-full justify-center items-center p-0 selection:bg-[#FF6B00] selection:text-black">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-6 z-50 bg-[#000000]/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-none p-1.5 pl-4 flex items-center justify-center gap-2 focus-within:border-[#FF6B00] transition-all duration-300 w-72 md:w-96"
          >
            <div className="relative w-full">
              <textarea
                ref={initialTextareaRef}
                rows={1}
                value={initialInput}
                onChange={handleInitialInput}
                onKeyDown={handleInitialKeyDown}
                className="w-full bg-transparent resize-none outline-none py-2 text-xs font-semibold uppercase tracking-widest text-[#F9F9F6] max-h-[100px] flex-1 leading-relaxed no-scrollbar placeholder-transparent font-['Plus_Jakarta_Sans']"
              />
              {!initialInput && (
                <div className="absolute top-2 left-0 w-full overflow-hidden pointer-events-none">
                  <div
                    className="inline-block whitespace-nowrap animate-marquee text-[#9AAB9B] text-[10px] uppercase font-bold tracking-widest font-['Plus_Jakarta_Sans']"
                    style={{ animationDuration: '10s' }}
                  >
                    Ask anything about Ayodhya...
                  </div>
                </div>
              )}
            </div>

            <style>{`
              @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              .animate-marquee {
                display: inline-block;
                white-space: nowrap;
                animation: marquee linear infinite;
              }
            `}</style>
            <button
              onClick={handleInitialSubmit}
              className="w-10 h-10 shrink-0 rounded-none bg-[#FF6B00] text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              {initialInput.trim() ? <Send size={14} strokeWidth={1.5} className="translate-x-[1px]" /> : <MessageCircle size={16} strokeWidth={1.5} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed z-50 flex flex-col overflow-hidden bg-[#000000]/90 backdrop-blur-2xl shadow-2xl transition-all inset-0 w-full h-full rounded-none md:inset-auto md:bottom-6 md:right-6 md:w-[420px] md:h-[650px] md:max-h-[85vh] md:border md:border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#000000]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-none bg-[#FF6B00]/10 flex items-center justify-center">
                  <Bot size={18} strokeWidth={1} className="text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="font-['Clash_Display'] font-bold text-sm tracking-tight text-[#F9F9F6]">Ayodhya Sarthi</h3>
                  <p className="text-[9px] text-[#9AAB9B] font-bold uppercase tracking-widest mt-0.5 font-['Plus_Jakarta_Sans']">Digital Pilgrimage Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center text-[#9AAB9B] hover:text-[#F9F9F6] hover:bg-white/10 transition-all"
                aria-label="Close Chat"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar scroll-smooth bg-[#000000]/20">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex gap-3 max-w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-none bg-white/5 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={14} strokeWidth={1} className="text-[#FF6B00]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed shadow-sm font-['Plus_Jakarta_Sans'] ${
                      msg.role === "user"
                        ? "bg-[#FF6B00] text-black rounded-none"
                        : "bg-white/5 text-[#F9F9F6]/90 border border-white/5 rounded-none"
                    }`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline underline-offset-2 hover:text-[#F9F9F6] transition-colors" />,
                        h1: ({ node, ...props }) => <h1 {...props} className="text-base font-['Clash_Display'] font-bold mt-4 mb-2 first:mt-0 text-[#F9F9F6]" />,
                        h2: ({ node, ...props }) => <h2 {...props} className="text-sm font-['Clash_Display'] font-bold mt-3 mb-2 first:mt-0 text-[#F9F9F6]" />,
                        h3: ({ node, ...props }) => <h3 {...props} className="text-xs font-['Clash_Display'] font-bold mt-3 mb-1 first:mt-0 text-[#F9F9F6]" />,
                        p: ({ node, ...props }) => <p {...props} className="mb-3 last:mb-0 text-[#F9F9F6]/80" />,
                        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-5 mb-3 space-y-1 text-[#F9F9F6]/75" />,
                        ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-5 mb-3 space-y-1 text-[#F9F9F6]/75" />,
                        li: ({ node, ...props }) => <li {...props} className="pl-1" />,
                        strong: ({ node, ...props }) => <strong {...props} className="font-bold text-[#F9F9F6]" />,
                        code: ({ node, inline, ...props }: any) =>
                          inline ? <code {...props} className="bg-white/5 px-1.5 py-0.5 text-xs font-mono text-[#FF6B00]" /> :
                            <code {...props} className="block w-full bg-black/40 p-3 rounded-none text-xs font-mono overflow-x-auto mb-3 border border-white/5 text-[#9AAB9B]" />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 justify-start max-w-full">
                  <div className="w-7 h-7 rounded-none bg-white/5 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={14} strokeWidth={1} className="text-[#FF6B00]" />
                  </div>
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-none flex items-center justify-center space-x-1.5 h-10">
                    <motion.div className="w-1 h-1 bg-[#FF6B00] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1 h-1 bg-[#FF6B00] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1 h-1 bg-[#FF6B00] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#000000] border-t border-white/5">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-end bg-white/5 rounded-none p-1.5 pl-4 border border-transparent focus-within:border-white/10 transition-all"
              >
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Reply to Sarthi..."
                  className="w-full bg-transparent resize-none outline-none py-2 text-xs font-semibold uppercase tracking-wider text-[#F9F9F6] max-h-[120px] no-scrollbar placeholder-[#9AAB9B] font-['Plus_Jakarta_Sans']"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 shrink-0 rounded-none bg-[#FF6B00] text-black disabled:opacity-30 disabled:bg-white/10 disabled:text-[#9AAB9B] flex items-center justify-center transition-all ml-1"
                  aria-label="Send message"
                >
                  <Send size={12} strokeWidth={2} className="translate-x-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
