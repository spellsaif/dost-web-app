import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dost - Your AI Companion',
  description: 'Dost is a AI Companion application which take use of companion.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider attribute="class" forcedTheme='dark'>
          <body>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
