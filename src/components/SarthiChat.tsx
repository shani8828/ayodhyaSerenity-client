import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import api from "@/lib/axios";
import { Link } from "react-router-dom";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function SarthiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Pass the previous messages excluding system prompts to the backend
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
            className="mb-4 w-[90vw] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white/70 dark:bg-black/80 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20 bg-gradient-saffron text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">Ayodhya Sarthi</h3>
                  <p className="text-xs font-medium text-white/80">Digital Pilgrimage Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-saffron flex items-center justify-center shrink-0 shadow-sm">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-white dark:bg-neutral-800 text-foreground border border-black/5 dark:border-white/10 rounded-bl-sm"
                      } prose prose-sm dark:prose-invert max-w-none`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" />,
                        h1: ({ node, ...props }) => <h1 {...props} className="text-xl font-bold my-2" />,
                        h2: ({ node, ...props }) => <h2 {...props} className="text-lg font-bold my-1" />,
                        p: ({ node, ...props }) => <p {...props} className="mb-4 last:mb-0" />,
                        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-4 mb-4" />,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User size={16} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-end gap-2 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-saffron flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-neutral-800 p-3 rounded-2xl rounded-bl-sm border border-black/5 dark:border-white/10 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/50 dark:bg-black/50 border-t border-white/20 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ayodhya..."
                  className="w-full bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-inner"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-50 hover:bg-primary/90 transition-all shadow-md active:scale-95"
                  aria-label="Send message"
                >
                  <Send size={16} className="ml-px" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating close/open Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-saffron text-white shadow-xl flex items-center justify-center hover:shadow-primary/30 hover:shadow-2xl transition-all border-2 border-white/20 z-50 backdrop-blur-sm"
        aria-label="Toggle Sarthi Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
