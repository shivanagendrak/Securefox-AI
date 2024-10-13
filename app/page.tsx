import { Shield } from 'lucide-react';
import ScanForm from '@/components/ScanForm';
import SecurityOverview from '@/components/SecurityOverview';
import AutomationSettings from '@/components/AutomationSettings';
import AIInsights from '@/components/AIInsights';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to SecureFox AI</h1>
        <p className="text-lg md:text-xl font-semibold text-primary">
          AI-Powered Advanced Cybersecurity Scanning and Automation Platform
        </p>
      </section>

      <ScanForm />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SecurityOverview />
        <AutomationSettings />
      </div>

      <AIInsights />
    </div>
  );
}