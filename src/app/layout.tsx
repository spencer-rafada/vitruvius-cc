import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Box, Theme, ThemePanel } from '@radix-ui/themes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SearchProvider } from './providers/SearchProvider'

export const metadata: Metadata = {
  title: 'VITLIB',
  description: 'Get your books here',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Theme accentColor='gray'>
          <SearchProvider>
            <Navbar />
            <Box p={{ initial: '5', md: '8' }}>{children}</Box>
            <Footer />
            {/* <ThemePanel /> */}
          </SearchProvider>
        </Theme>
      </body>
    </html>
  )
}
