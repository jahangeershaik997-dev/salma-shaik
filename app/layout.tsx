import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer",
  description: "Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience. Specializing in Dynamics 365, Dataverse, Power Apps, Power Automate, C#.NET, JavaScript.",
  keywords: ["Salma Shaik","Power Apps Developer","Dynamics 365 CE","Microsoft Dynamics","Power Platform","Dataverse","CRM Developer","Power Automate","C# .NET"],
  openGraph: {
    title: "Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer",
    description: "Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience.",
    type: "website",
    url: "https://salma-shaik-nine.vercel.app",
  },
  twitter: { card: "summary_large_image", title: "Salma Shaik | Power Apps & Dynamics 365 CE Developer" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased bg-[#04091a] text-[#e8edf5]">{children}</body>
    </html>
  );
}
