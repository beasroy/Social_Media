import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";
import LeftSideBar from "@/components/layout/LeftSideBar";
import RightSideBar from "@/components/layout/RightSideBar";
import MainContainer from "@/components/layout/MainContainer";
import BottomBar from "@/components/layout/BottomBar";
import "../globals.css"
export const metadata = {
  title: 'Pulse',
  description: 'Stay Connected, Always',
}
const inter =Inter({subsets:['latin']})
export default function RootLayout({ children }) {
 return (
  <ClerkProvider>
    <html lang="en">
      <body  className={`${inter.className} bg-white mx-auto`}>
      <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
      </body>
    </html>
  </ClerkProvider>
  )
}
