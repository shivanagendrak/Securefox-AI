"use client"

import { Brain, TrendingUp, ShieldAlert, AlertTriangle, Database } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InsightBlock
            icon={<TrendingUp className="h-5 w-5 text-blue-500" />}
            title="Attack Pattern Increase"
            description="15% increase in sophisticated attack patterns detected"
          />
          <InsightBlock
            icon={<ShieldAlert className="h-5 w-5 text-red-500" />}
            title="Zero-day Vulnerability"
            description="New vulnerability identified in common CMS platforms"
          />
          <InsightBlock
            icon={<AlertTriangle className="h-5 w-5 text-yellow-500" />}
            title="Emerging Threat"
            description="Rise in AI-powered phishing attempts targeting employees"
          />
          <InsightBlock
            icon={<Database className="h-5 w-5 text-purple-500" />}
            title="Potential Data Breach"
            description="Unusual data access patterns detected in customer database"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function InsightBlock({ icon, title, description }) {
  return (
    <div className="bg-secondary/50 p-4 rounded-lg">
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}