"use client"
import { Inter } from "next/font/google";
import "./../globals.css";
import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { ReduxProvider } from "../../redux/provider"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname()

  // List of routes where you want to hide the layout
  const routesWithoutLayout = ['/auth/signin', '/auth/signup']; // Add more routes as needed

  // Check if the current route is in the list of routes without layout
  const hideLayout = routesWithoutLayout.includes(pathname);

  if (!hideLayout) return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div>
            <Header />
            <Sidebar />
          </div>
          {children}
        </ReduxProvider>
      </body>
    </html>
  ); else return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
