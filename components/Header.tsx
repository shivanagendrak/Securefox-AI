"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Bot, Menu, X, User, LogOut, FileText, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/securefox-logo.png"
              alt="SecureFox AI Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold">SecureFox AI</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li><Link href="/"><Button variant="ghost">Dashboard</Button></Link></li>
              <li><Link href="/reports"><Button variant="ghost">Reports</Button></Link></li>
              <li><Link href="/settings"><Button variant="ghost">Settings</Button></Link></li>
              <li><ModeToggle /></li>
              <li>
                <Link href="/ai-assistant">
                  <Button variant="outline" className="flex items-center bg-white text-black hover:bg-gray-100 hover:text-black">
                    <Bot className="mr-2 h-4 w-4" />
                    AI Assistant
                  </Button>
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <Link href="/profile">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>My Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/"><Button variant="ghost" className="w-full justify-start">Dashboard</Button></Link></li>
              <li><Link href="/reports"><Button variant="ghost" className="w-full justify-start">Reports</Button></Link></li>
              <li><Link href="/settings"><Button variant="ghost" className="w-full justify-start">Settings</Button></Link></li>
              <li><ModeToggle /></li>
              <li>
                <Link href="/ai-assistant">
                  <Button variant="outline" className="w-full justify-start">
                    <Bot className="mr-2 h-4 w-4" />
                    AI Assistant
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-700">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}