"use client"

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download } from 'lucide-react';

type Report = {
  id: string;
  date: string;
  type: string;
  status: string;
};

const initialReports: Report[] = [
  { id: '1', date: '2023-06-01', type: 'Vulnerability Scan', status: 'Completed' },
  { id: '2', date: '2023-05-15', type: 'Penetration Test', status: 'Completed' },
  { id: '3', date: '2023-05-01', type: 'Compliance Audit', status: 'In Progress' },
  { id: '4', date: '2023-04-15', type: 'Security Assessment', status: 'Completed' },
  { id: '5', date: '2023-04-01', type: 'Incident Response', status: 'Completed' },
];

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState<Report[]>(initialReports);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredReports = initialReports.filter(report => 
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.date.includes(searchTerm) ||
      report.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setReports(filteredReports);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Previous Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>{report.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}