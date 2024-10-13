"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import VulnerabilityDashboard from '@/components/VulnerabilityDashboard';

type ChatMessage = {
  role: 'system' | 'user';
  content: string;
};

export default function ScanResults() {
  const searchParams = useSearchParams();
  const target = searchParams.get('target');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Simulate initial scan results in a single message
    setChatMessages([
      { 
        role: 'system', 
        content: `Scan results for ${target}:\n\nVulnerabilities detected: 3 Critical, 5 High, 10 Medium\n\nWhat would you like to know about these vulnerabilities?`
      },
    ]);
  }, [target]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setChatMessages(prev => [...prev, { role: 'user', content: userInput }]);
      setUserInput('');
      // Simulate AI response (replace with actual AI integration later)
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'system', content: 'Here\'s some information about the vulnerabilities...' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-2/3 overflow-y-auto pr-4">
        <VulnerabilityDashboard />
      </div>
      <Card className="w-1/3 flex flex-col">
        <CardHeader>
          <CardTitle>Security Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  {message.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Ask about vulnerabilities..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}