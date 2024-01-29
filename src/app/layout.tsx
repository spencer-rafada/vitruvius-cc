import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Flex, Theme, ThemePanel } from '@radix-ui/themes'
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
      <body className='h-full'>
        <Theme accentColor='gray'>
          <SearchProvider>
            <Flex className='h-dvh' direction='column'>
              <Navbar />
              {children}
              {/* <Box className='grow shrink-0 box-border'></Box> */}
              <Footer />
              {/* <ThemePanel /> */}
            </Flex>
          </SearchProvider>
        </Theme>
      </body>
    </html>
  )
}
