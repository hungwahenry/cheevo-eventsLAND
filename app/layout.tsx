import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cheevo.events"),
  title: {
    default: "cheevo — find what's on, be there",
    template: "%s — cheevo",
  },
  description:
    "Every event Nigeria is throwing — in one app. Discover events, RSVP, and grab tickets in seconds.",
  applicationName: "cheevo",
  keywords: [
    "events",
    "tickets",
    "event tickets",
    "concerts",
    "parties",
    "nightlife",
    "things to do",
    "Nigeria",
    "Lagos",
    "RSVP",
    "cheevo",
  ],
  authors: [{ name: "cheevo", url: "https://cheevo.events" }],
  creator: "cheevo",
  publisher: "Issorite",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: "cheevo",
    title: "cheevo — find what's on, be there",
    description:
      "Every event Nigeria is throwing — in one app. Discover events, RSVP, and grab tickets in seconds.",
    url: "https://cheevo.events",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "cheevo — find what's on, be there",
    description:
      "Every event Nigeria is throwing — in one app. Discover events, RSVP, and grab tickets in seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "events",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        sans.variable,
        mono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
