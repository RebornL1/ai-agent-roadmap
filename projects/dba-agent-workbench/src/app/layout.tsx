import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBA Agent Workbench",
  description: "AI Agent workbench mock UI for DBA incident workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
