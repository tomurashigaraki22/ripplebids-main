"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import Image from "next/image"
import Logo from '../../public/logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rules & Policy", href: "/rules-policy" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Affiliate", href: "/affiliate" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-card border-b border-[#39FF14]/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#39FF14]/20 flex items-center justify-center group-hover:bg-[#39FF14]/30 transition-all duration-300">
                  {/* Using Zap icon as placeholder since we can't access the logo file */}
                  <Image className="rounded-full" src={Logo}/>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#39FF14]/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span
                className="text-xl font-bold glow-text-subtle group-hover:glow-text transition-all duration-300"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                RippleBids
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-[#39FF14] transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-[#39FF14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#39FF14] group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-[#39FF14]/20 flex items-center justify-center hover:bg-[#39FF14]/30 transition-all duration-300 group"
            >
              <div className="relative">
                <Menu
                  className={`w-6 h-6 text-[#39FF14] transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 text-[#39FF14] absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] glass-card border-l border-[#39FF14]/20 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#39FF14]/20">
            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#39FF14]" />
              </div>
              <span className="text-xl font-bold glow-text-subtle" style={{ fontFamily: "Orbitron, sans-serif" }}>
                RippleBids
              </span>
            </Link>
          </div>

          {/* Mobile Navigation Items */}
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-4 rounded-lg text-lg font-medium text-gray-300 hover:text-[#39FF14] transition-all duration-300 group overflow-hidden border border-transparent hover:border-[#39FF14]/30`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideInRight 0.3s ease-out forwards" : "none",
                }}
              >
                <span className="relative z-10 flex items-center">
                  <div className="w-2 h-2 bg-[#39FF14] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-[#39FF14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#39FF14]/20">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Join the Revolution</p>
              <div className="flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
