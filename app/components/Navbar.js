"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Logo from '../../public/logo.jpg'
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Claim Tokens", href: "/claim" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rules & Policy", href: "/rules-policy" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Affiliate", href: "/affiliate" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={Logo} alt="RippleBids Logo"/>
              </div>
            <span className="text-xl font-bold text-green-400 glow-text">RippleBids</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-green-400 hover:bg-green-500/10 transition-colors border border-transparent hover:border-green-500/30"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400 glow-text">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-green-500/20 w-80">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={Logo} alt="RippleBids Logo"/>
              </div>
                  <span className="text-xl font-bold text-green-400 glow-text">RippleBids</span>
                </Link>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-md text-lg font-medium text-white hover:text-green-400 hover:bg-green-500/10 transition-colors border border-green-500/20 hover:border-green-500/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
