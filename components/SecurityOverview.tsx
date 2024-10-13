"use client"

import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SecurityOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="mr-2 h-5 w-5" />
          Security Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium mb-2 sm:mb-0">Risk Assessment</span>
          <span className="text-2xl font-bold text-green-500">Low</span>
        </div>
        <Progress value={20} className="w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
            <span>3 Potential Vulnerabilities</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>98% Threats Mitigated</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}