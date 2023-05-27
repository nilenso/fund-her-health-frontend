'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <WithSubnavigation />
          <main>
            {children}
          </main>
        </ChakraProvider>
      </body>
    </html>
  )
}
