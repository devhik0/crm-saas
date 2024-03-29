import { Text, Title } from "@tremor/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Login from "./login";
import Sidebar from "./side-bar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "CRMSaaS",
  description: "A CRM SaaS for your all needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const login = true;

  return (
    <html lang="en">
      <body className={poppins.className}>
        {login ? (
          <div className="flex flex-row gap-4">
            <Sidebar />
            <div className="w-full p-4">
              <Title>Dashboard</Title>
              <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
              {children}
            </div>
          </div>
        ) : (
          <Login login={login} />
        )}
      </body>
    </html>
  );
}
