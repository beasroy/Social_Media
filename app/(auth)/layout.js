import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css"
export const metadata = {
    title: 'auth',
    description: 'Next-14 social-media Pulse',
}

const inter =Inter({subsets:['latin']})
  
  export default function RootLayout({ children }) {
   return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-light_blue mx-auto`}>{children}</body>
      </html>
    </ClerkProvider>
    )
  }
  