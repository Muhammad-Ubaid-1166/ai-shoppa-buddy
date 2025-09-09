import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Product } from "@/pages/Index";

interface ChatWidgetProps {
  products: Product[];
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatWidget = ({ products }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI shopping assistant. I can help you find products, compare prices, and get recommendations. Try asking me something like 'Show me laptops under $1500' or 'What's the cheapest phone?'",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateAIResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple AI responses based on keywords
    let response = "";
    
    if (lowerMessage.includes("laptop") || lowerMessage.includes("computer")) {
      const laptops = products.filter(p => p.category === "laptops");
      if (laptops.length > 0) {
        response = `I found ${laptops.length} laptops for you! Here are some options:\n\n${laptops.map(p => `• ${p.name} - $${p.price}`).join('\n')}`;
      } else {
        response = "I don't see any laptops in our current inventory, but you can add some using the 'Add Product' button!";
      }
    } else if (lowerMessage.includes("phone") || lowerMessage.includes("mobile")) {
      const phones = products.filter(p => p.category === "mobiles_phones");
      if (phones.length > 0) {
        response = `Here are our available phones:\n\n${phones.map(p => `• ${p.name} - $${p.price}`).join('\n')}`;
      } else {
        response = "No phones available right now, but you can add some to the marketplace!";
      }
    } else if (lowerMessage.includes("tablet") || lowerMessage.includes("ipad")) {
      const tablets = products.filter(p => p.category === "tablets");
      if (tablets.length > 0) {
        response = `Check out these tablets:\n\n${tablets.map(p => `• ${p.name} - $${p.price}`).join('\n')}`;
      } else {
        response = "No tablets currently available. Want to add one?";
      }
    } else if (lowerMessage.includes("cheap") || lowerMessage.includes("budget")) {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      const cheapest = sortedProducts.slice(0, 3);
      if (cheapest.length > 0) {
        response = `Here are our most budget-friendly options:\n\n${cheapest.map(p => `• ${p.name} - $${p.price} (${p.category})`).join('\n')}`;
      } else {
        response = "No products available yet. Be the first to add one!";
      }
    } else if (lowerMessage.includes("expensive") || lowerMessage.includes("premium")) {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      const expensive = sortedProducts.slice(0, 3);
      if (expensive.length > 0) {
        response = `Here are our premium products:\n\n${expensive.map(p => `• ${p.name} - $${p.price} (${p.category})`).join('\n')}`;
      } else {
        response = "No products available yet. Start building our inventory!";
      }
    } else if (lowerMessage.includes("all") || lowerMessage.includes("show")) {
      if (products.length > 0) {
        response = `We have ${products.length} products available:\n\n${products.map(p => `• ${p.name} - $${p.price}`).join('\n')}`;
      } else {
        response = "Our marketplace is ready for products! Use the 'Add Product' button to get started.";
      }
    } else {
      response = `I understand you're asking about "${userMessage}". I can help you with:\n\n• Finding specific products\n• Comparing prices\n• Product recommendations\n• Category searches\n\nTry asking "Show me all laptops" or "What's the cheapest product?"`;
    }
    
    return response;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage(userMessage, true);

    setIsTyping(true);
    
    // Simulate API delay
    setTimeout(() => {
      const response = simulateAIResponse(userMessage);
      addMessage(response, false);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-16 w-16 rounded-full primary-gradient text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${isOpen ? '' : 'animate-float'}`}
          data-chat-widget
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            AI Assistant
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] z-50 flex flex-col shadow-2xl border-0 animate-slide-in-right">
          {/* Header */}
          <div className="primary-gradient text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Shopping Assistant</h3>
                <p className="text-sm opacity-90">I know about every product in the store!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-muted/20 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-primary' : 'bg-muted'}`}>
                    {message.isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-foreground" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-2 ${message.isUser ? 'bg-primary text-white' : 'bg-card border'}`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="bg-card border rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-card rounded-b-lg">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about products..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isTyping}
                className="primary-gradient text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};