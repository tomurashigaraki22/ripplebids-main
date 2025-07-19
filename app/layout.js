import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RippleBids - Claim Your XRPB Tokens",
  description: "The XRPB token powers the RippleBids decentralized marketplace across two leading blockchains.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="hexagon-bg">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
