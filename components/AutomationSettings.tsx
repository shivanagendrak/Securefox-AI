"use client"

import { Bell, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function AutomationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Automation Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="auto-scan" className="flex items-center space-x-2">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>Auto Scan</span>
          </Label>
          <Select>
            <SelectTrigger id="auto-scan" className="w-full">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="off">Off</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="alert-notification" className="flex items-center space-x-2">
            <Bell className="h-4 w-4 flex-shrink-0" />
            <span>Alert Notifications</span>
          </Label>
          <Select>
            <SelectTrigger id="alert-notification" className="w-full">
              <SelectValue placeholder="Select alert level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="off">Off</SelectItem>
              <SelectItem value="critical">Critical Only</SelectItem>
              <SelectItem value="high">High and Above</SelectItem>
              <SelectItem value="all">All Alerts</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}