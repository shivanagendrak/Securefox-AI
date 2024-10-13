"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ScanForm() {
  const [target, setTarget] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate scan process for 10 seconds
    await new Promise(resolve => setTimeout(resolve, 10000));
    setIsLoading(false);
    router.push(`/scan-results?target=${encodeURIComponent(target)}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Scan</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/securefox-logo.png"
              alt="SecureFox AI Logo"
              width={100}
              height={100}
              className="animate-pulse"
            />
            <h2 className="text-2xl font-bold">SecureFox AI</h2>
            <p>Scanning in progress...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter domain or IP address"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Scan
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}