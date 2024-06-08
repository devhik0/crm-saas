import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "@tremor/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LandingPage from "./landing-page";
import Sidebar from "./side-bar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Customer Nexus",
  description:
    "CustomerNexus is an innovative CRM (Customer Relationship Management) software designed to streamline your business operations and foster stronger connections with your clients. This powerful app enables you to manage and analyze customer interactions, track sales opportunities, and optimize your marketing strategies all in one centralized platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const login = true;

  return (
    <html lang="en">
      <body className={poppins.className}>
        {login ? (
          <div className="flex flex-row">
            <Sidebar />
            <div className="w-full">
              <div className="flex w-full items-center justify-between bg-gray-900 p-3">
                <div className="flex w-full max-w-sm items-center space-x-2 rounded-md bg-gray-900 p-2">
                  <Input type="search" placeholder="Search in all your data..." />
                  <Button type="submit" className="bg-gray-800">
                    Search
                  </Button>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-row items-center gap-1">
                    <SunIcon className="size-5" />
                    <Switch checked={true} />
                    <MoonIcon className="size-4" />
                  </div>
                  <BellIcon className="size-5" />
                  <div className="flex flex-row items-center gap-2 border-l-2 border-l-gray-800 p-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span>User1</span>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        ) : (
          <LandingPage />
        )}
      </body>
    </html>
  );
}
