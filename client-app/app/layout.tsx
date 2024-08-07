import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Notifications from "./notifications";
import { LightDarkTheme } from "./providers/light-dark-theme";
import { Search } from "./search";
import Sidebar from "./side-bar";
import Theme from "./theme";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Customer Nexus",
  description:
    "CustomerNexus is an innovative CRM (Customer Relationship Management) software designed to streamline your business operations and foster stronger connections with your clients. This powerful app enables you to manage and analyze customer interactions, track sales opportunities, and optimize your marketing strategies all in one centralized platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-gray-900`}>
        <ClerkProvider>
          <LightDarkTheme>
            <div className="flex flex-row bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
              <Sidebar />
              <div className="w-full">
                <div className="flex w-full items-center justify-between p-3 dark:bg-gray-900">
                  <div className="flex w-full max-w-sm flex-col items-center space-x-2 rounded-md p-2 dark:bg-gray-900">
                    <Search />
                  </div>
                  <div className="flex items-center gap-6">
                    <Theme />
                    <Notifications />
                    <div className="flex flex-row items-center gap-2 border-l-2 border-l-gray-800 px-4">
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </LightDarkTheme>
        </ClerkProvider>
      </body>
    </html>
  );
}
