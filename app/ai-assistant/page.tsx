"use client"

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Bot } from 'lucide-react';

type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

export default function AIAssistant() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Initial greeting message
    setChatMessages([
      { role: 'assistant', content: 'Hello! I\'m your AI Security Assistant. How can I help you with your cybersecurity needs today? I can provide information on vulnerabilities, suggest security best practices, or assist with threat analysis.' },
    ]);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setChatMessages(prev => [...prev, { role: 'user', content: userInput }]);
      setUserInput('');
      // Simulate AI response (replace with actual AI integration later)
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'I understand your concern about security. Here\'s some information that might help...' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="mr-2" />
            AI Security Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(100vh-16rem)] flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Ask about cybersecurity..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}