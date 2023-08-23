"use client"
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/Components/Header'
import Footer from '@/Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#1E1E1E]'>
          <Header />
          {children}
      </body>
    </html>
  )
}
