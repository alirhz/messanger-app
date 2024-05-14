"use client"
import "./../globals.css";
import {React , useState} from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { ReduxProvider } from "../../redux/provider"

export default function RootLayout({ children }) {
  const [isMenu, openMenu] = useState(false);
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
            <Header openMenu={openMenu}/>
            <Sidebar data={isMenu} />
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
