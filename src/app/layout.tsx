import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fund Her Health',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className={styles.main}>
      <div className={styles.description}>
        {children}
      </div>
    </main></body>
    </html>
  )
}
