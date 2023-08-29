"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/Components/Header'
import Footer from '@/Components/Footer'
import Modals from '@/Components/Modals'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col bg-[#1E1E1E] min-w-[1300px]'>
        <Modals />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
