import ConvexClientProvider from "@/providers/convex-client-provider";
import { Title } from "@tremor/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Login from "./login";
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
        <ConvexClientProvider>
          {login ? (
            <div className="flex flex-row">
              <Sidebar />
              <div className="w-full p-4">
                <Title>Dashboard</Title>
                {children}
              </div>
            </div>
          ) : (
            <Login
            // login={login}
            />
          )}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
