import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ian-tc-yang.github.io'),
  title: 'Ian Yang — Research Engineer & UC Berkeley EECS',
  description:
    'Ian Yang is a research engineer and UC Berkeley EECS student working in multimodal AI, computer vision, robotics, and intelligent design systems.',
  keywords: [
    'Ian Yang',
    'UC Berkeley EECS',
    'Artificial Intelligence',
    'Computer Vision',
    'Robotics',
    'Multimodal AI',
    'Machine Learning',
  ],
  authors: [{ name: 'Ian Yang', url: 'https://github.com/Ian-tc-Yang' }],
  openGraph: {
    title: 'Ian Yang — Research Engineer & UC Berkeley EECS',
    description: 'Experience, research, projects, and contact information for Ian Yang.',
    url: 'https://ian-tc-yang.github.io',
    siteName: 'Ian Yang',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ian Yang — Research Engineer and UC Berkeley EECS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Yang — Research Engineer & UC Berkeley EECS',
    description: 'Experience, research, projects, and contact information for Ian Yang.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
