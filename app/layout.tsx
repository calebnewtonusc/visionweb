import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trojan Technology Solutions | USC Builder Club",
  description:
    "USC's AI builder club. Workshops, client work, and speaker nights open to every major. No experience required. No gatekeeping.",
  openGraph: {
    title: "Trojan Technology Solutions",
    description:
      "USC's AI builder club. Open to every major. No experience required. No gatekeeping.",
    url: "https://usctts.com",
    siteName: "Trojan Technology Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trojan Technology Solutions",
    description:
      "USC's AI builder club. Open to every major. No experience required.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('tts-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className={`min-h-full bg-white antialiased`}>
        {children}
        <Toaster theme="light" />
        <Analytics />
      </body>
    </html>
  );
}
