"use client"

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackIntegration, setSlackIntegration] = useState(false);
  const [scanFrequency, setScanFrequency] = useState('weekly');
  const [apiKey, setApiKey] = useState('');
  const [autoRemediation, setAutoRemediation] = useState(false);
  const [threatIntelFeed, setThreatIntelFeed] = useState(false);
  const [jiraIntegration, setJiraIntegration] = useState(false);
  const [githubIntegration, setGithubIntegration] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save these settings to a backend
    console.log('Settings saved:', {
      emailNotifications,
      slackIntegration,
      scanFrequency,
      apiKey,
      autoRemediation,
      threatIntelFeed,
      jiraIntegration,
      githubIntegration,
    });
    // You could also show a success message to the user here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="notifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            <form onSubmit={handleSaveSettings} className="space-y-6 mt-6">
              <TabsContent value="notifications">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-notifications" className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <Switch
                        id="email-notifications"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive email alerts for critical security events.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slack-integration" className="flex items-center justify-between">
                      <span>Slack Integration</span>
                      <Switch
                        id="slack-integration"
                        checked={slackIntegration}
                        onCheckedChange={setSlackIntegration}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Send notifications to a Slack channel.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automation">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="scan-frequency">Automated Scan Frequency</Label>
                    <Select value={scanFrequency} onValueChange={setScanFrequency}>
                      <SelectTrigger id="scan-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="auto-remediation" className="flex items-center justify-between">
                      <span>Automatic Remediation</span>
                      <Switch
                        id="auto-remediation"
                        checked={autoRemediation}
                        onCheckedChange={setAutoRemediation}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Automatically apply fixes for known vulnerabilities when possible.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="threat-intel-feed" className="flex items-center justify-between">
                      <span>Threat Intelligence Feed</span>
                      <Switch
                        id="threat-intel-feed"
                        checked={threatIntelFeed}
                        onCheckedChange={setThreatIntelFeed}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Automatically update threat intelligence from external sources.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="integrations">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="jira-integration" className="flex items-center justify-between">
                      <span>Jira Integration</span>
                      <Switch
                        id="jira-integration"
                        checked={jiraIntegration}
                        onCheckedChange={setJiraIntegration}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Automatically create Jira tickets for security issues.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github-integration" className="flex items-center justify-between">
                      <span>GitHub Integration</span>
                      <Switch
                        id="github-integration"
                        checked={githubIntegration}
                        onCheckedChange={setGithubIntegration}
                      />
                    </Label>
                    <p className="text-sm text-muted-foreground">Scan repositories and create pull requests for security fixes.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input
                      id="api-key"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your API key"
                    />
                    <p className="text-sm text-muted-foreground">Used for integrating with external tools and services.</p>
                  </div>
                </div>
              </TabsContent>

              <Button type="submit">Save Settings</Button>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}