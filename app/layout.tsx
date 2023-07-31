'use client'
// components/Layout.tsx
import React from 'react'
import Navbar from '../components/Layout/NavBar'
import Footer from '../components/Layout/Footer'
import { NextAuthProvider } from './Providers'
import './globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
