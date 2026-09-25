import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer",
  description:
    "Portfolio of Salma Shaik, a Microsoft Power Apps and Dynamics 365 CE Developer specializing in Dynamics 365, Dataverse, Power Apps, Power Automate, C#.NET, JavaScript and enterprise CRM solutions.",
  keywords: [
    "Salma Shaik",
    "Power Apps Developer",
    "Dynamics 365 CE",
    "Microsoft Dynamics",
    "Power Automate",
    "Dataverse",
    "CRM Developer",
    "Power Platform",
    "C# .NET",
    "Model-Driven Apps",
  ],
  openGraph: {
    title: "Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer",
    description:
      "Portfolio of Salma Shaik — Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
