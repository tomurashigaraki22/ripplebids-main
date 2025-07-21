import Link from "next/link"
import { ArrowRight, Zap, Shield, Globe, ExternalLink, Coins, TrendingUp, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#39FF14]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen px-6 py-10 flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span className="text-gradient">Welcome To</span>
            <br />
            <span className="glow-text">RippleBids!</span>
          </h1>

          {/* Main Token Info Box */}
          <div className="max-w-5xl mx-auto mb-12 glass-card p-8 md:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold glow-text-subtle mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              XRPB Token Launch: Multi-Chain Powerhouse
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The XRPB token powers the RippleBids decentralized marketplace across multiple leading blockchains,
              offering unmatched versatility for transactions and premium features. Join the future of e-commerce!
            </p>

            {/* Chain Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 text-left mb-10">
              <div className="space-y-6">
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#39FF14] glow-text-subtle mb-2">XRPB on XRPL EVM Sidechain:</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The primary currency for all marketplace transactions, leveraging smart contracts for secure,
                      fast, and low-cost payments. Full marketplace functionality including escrow-secured buying,
                      selling, and auctions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-purple-500/10 text-purple-400">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-400 mb-2">XRPB on Other Chains:</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Available on First Ledger and Solana for premium features such as advanced analytics, priority
                      listings, exclusive tools, and site perks. Not for core marketplace transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy XRPB Buttons Section */}
            <div className="glass-card p-6 mb-8 bg-[#39FF14]/5 border-[#39FF14]/30">
              <h3
                className="text-xl font-bold glow-text-subtle mb-6 text-center"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Buy XRPB Tokens
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* XRPL EVM Sidechain - Primary */}
                <a
                  href="https://xrise33.com/?inputCurrency=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outputCurrency=0x6d8630D167458b337A2c8b6242c354d2f4f75D96&blockchainID=1440000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="neon-button w-full py-4 px-6 text-center relative z-10 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 mr-2" />
                      <span className="font-bold">Buy XRPB</span>
                    </div>
                    <div className="text-sm opacity-90">(XRPL EVM)</div>
                    <div className="text-xs mt-1 opacity-75">Primary Chain</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39FF14]/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* First Ledger */}
                <a
                  href="https://firstledger.net/token/rsEaYfqdZKNbD3SK55xzcjPm3nDrMj4aUT/5852504200000000000000000000000000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="glass-card p-4 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="flex items-center justify-center mb-2 text-blue-400">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      <span className="font-bold">Buy XRPB</span>
                    </div>
                    <div className="text-sm text-blue-400 mb-1">(First Ledger)</div>
                    <div className="text-xs text-gray-400">Perks & Discounts</div>
                  </div>
                </a>

                {/* Solana */}
                <a
                  href="https://pump.fun/profile/ripplebids?tab=balances"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="glass-card p-4 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="flex items-center justify-center mb-2 text-purple-400">
                      <Coins className="w-5 h-5 mr-2" />
                      <span className="font-bold">Buy XRPB-SOL</span>
                    </div>
                    <div className="text-sm text-purple-400 mb-1">(Solana)</div>
                    <div className="text-xs text-gray-400">Premium Features</div>
                  </div>
                </a>
              </div>

              {/* Chain Usage Note */}
              <div className="glass-card p-4 mt-4 border-yellow-500/30 bg-yellow-500/5">
                <p className="text-sm text-gray-300 text-center">
                  <span className="text-yellow-400 font-semibold">Note:</span> XRPL EVM version supports full
                  marketplace functionality. First Ledger and Solana versions are for site perks, discounts, and premium
                  features only.
                </p>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/whitepaper">
                <button className="glass-card px-8 py-4 text-lg border-[#39FF14]/30 text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/10 transition-all duration-300 inline-flex items-center">
                  Read Whitepaper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              Learn more in our{" "}
              <Link
                href="/whitepaper"
                className="text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
              >
                Whitepaper
              </Link>{" "}
              or contact{" "}
              <a
                href="mailto:support@ripplebids.com"
                className="text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
              >
                support@ripplebids.com
              </a>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16 glow-text-subtle"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Why Choose XRPB?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text-subtle">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience ultra-fast transactions with minimal fees across XRPL, First Ledger, and Solana networks.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text-subtle">Secure & Reliable</h3>
              <p className="text-gray-300 leading-relaxed">
                Built on proven blockchain technology with smart contract security and decentralized governance.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text-subtle">Multi-Chain Power</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly operate across multiple blockchains with unified token utility and cross-chain liquidity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
