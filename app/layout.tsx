import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer',
  description:
    'Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience at Starlite Infotech. Specializing in Dataverse, C#.NET plugins, JavaScript form scripts, Power Automate, and full lifecycle CRM delivery.',
  keywords: [
    'Salma Shaik',
    'Power Apps Developer',
    'Dynamics 365 CE Developer',
    'Microsoft Dynamics 365 CRM',
    'Power Platform Developer',
    'Microsoft Dataverse',
    'C# Plugins',
    'Power Automate',
    'CRM Developer Guntur',
    'Starlite Infotech',
  ],
  authors: [{ name: 'Salma Shaik' }],
  creator: 'Salma Shaik',
  openGraph: {
    title: 'Salma Shaik | Microsoft Power Apps & Dynamics 365 CE Developer',
    description:
      'Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience. Specializing in Dataverse, C#.NET plugins, JavaScript, and Power Automate.',
    url: 'https://salma-shaik-nine.vercel.app',
    siteName: 'Salma Shaik Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salma Shaik | Power Apps & Dynamics 365 CE Developer',
    description:
      'Microsoft Power Apps and Dynamics 365 CE Developer with 4+ years of enterprise CRM experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
