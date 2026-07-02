import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBA Agent Workbench",
  description: "面向 DBA 故障处理流程的 AI Agent 工作台模拟界面。",
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
