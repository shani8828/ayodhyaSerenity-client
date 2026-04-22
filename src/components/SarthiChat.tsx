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
    <div className="flex w-full justify-center items-center p-0">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 md:bottom-8 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl rounded-[2rem] p-1 md:p-1.5 pl-2 md:pl-5 flex items-center justify-center gap-1 md:gap-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all hover:shadow-primary/10 w-72 md:w-96"
          >
            <div className="relative w-full">
              <textarea
                ref={initialTextareaRef}
                rows={1}
                value={initialInput}
                onChange={handleInitialInput}
                onKeyDown={handleInitialKeyDown}
                className="w-full bg-transparent resize-none outline-none py-1 md:py-2 lg:py-3 text-[15px] max-h-[100px] flex-1 leading-relaxed no-scrollbar placeholder-transparent font-medium"
              />
              {!initialInput && (
                <div className="absolute top-1 md:top-2 lg:top-3 left-0 w-full overflow-hidden pointer-events-none">
                  <div
                    className="inline-block whitespace-nowrap animate-marquee text-neutral-500"
                    style={{ animationDuration: '9s' }}
                  >
                    Ask anything about Ayodhya Serenity...
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
              className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md mr-0.5"
            >
              {initialInput.trim() ? <Send size={18} className="translate-x-[1px]" /> : <MessageCircle size={22} />}
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
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-50 flex flex-col overflow-hidden bg-white dark:bg-neutral-900 backdrop-blur-2xl shadow-2xl transition-all inset-0 w-full h-full rounded-none md:inset-auto md:bottom-6 md:right-6 md:w-[420px] md:h-[650px] md:max-h-[85vh] md:rounded-3xl md:border md:border-black/5 md:dark:border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/5 bg-neutral-50/80 dark:bg-black/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 dark:bg-primary/20 flex items-center justify-center">
                  <Bot size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] leading-tight text-neutral-900 dark:text-neutral-100">Ayodhya Sarthi</h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Digital Pilgrimage Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar scroll-smooth">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex gap-3 max-w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Bot size={16} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-3 text-[14.5px] leading-relaxed shadow-sm ${msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-[1.3rem] rounded-tr-sm"
                      : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/5 dark:border-white/5 rounded-[1.3rem] rounded-tl-sm"
                      }`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline underline-offset-2 decoration-blue-200 hover:decoration-blue-600 transition-colors" />,
                        h1: ({ node, ...props }) => <h1 {...props} className="text-lg font-bold mt-4 mb-2 first:mt-0" />,
                        h2: ({ node, ...props }) => <h2 {...props} className="text-md font-bold mt-3 mb-2 first:mt-0" />,
                        h3: ({ node, ...props }) => <h3 {...props} className="text-base font-semibold mt-3 mb-1 first:mt-0" />,
                        p: ({ node, ...props }) => <p {...props} className="mb-3 last:mb-0" />,
                        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-5 mb-3 space-y-1" />,
                        ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-5 mb-3 space-y-1" />,
                        li: ({ node, ...props }) => <li {...props} className="pl-1" />,
                        strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-inherit" />,
                        code: ({ node, inline, ...props }: any) =>
                          inline ? <code {...props} className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-[13px] font-mono whitespace-pre-wrap" /> :
                            <code {...props} className="block w-full bg-neutral-100 dark:bg-neutral-900 p-3 rounded-xl text-[13px] font-mono overflow-x-auto mb-3 border border-black/5 dark:border-white/5" />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 justify-start max-w-full">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <div className="bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/5 px-4 py-4 rounded-[1.3rem] rounded-tl-sm shadow-sm flex items-center justify-center space-x-1.5 h-[46px]">
                    <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-neutral-900 border-t border-black/5 dark:border-white/5 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-end bg-neutral-100 dark:bg-neutral-800/50 rounded-3xl p-1.5 pl-4 border border-transparent focus-within:border-primary/20 focus-within:bg-white dark:focus-within:bg-neutral-900 focus-within:shadow-sm transition-all"
                style={{ borderRadius: '24px' }}
              >
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Reply to Sarthi..."
                  className="w-full bg-transparent resize-none outline-none py-2.5 text-[15px] xl:text-[15px] max-h-[120px] no-scrollbar placeholder:text-neutral-500 mb-0.5"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-[38px] h-[38px] shrink-0 mb-1 rounded-full bg-primary text-primary-foreground disabled:opacity-50 disabled:bg-neutral-200 disabled:text-neutral-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600 flex items-center justify-center transition-transform active:scale-95 ml-1 mr-0.5"
                  aria-label="Send message"
                >
                  <Send size={16} className="translate-x-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
