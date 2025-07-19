import Link from "next/link"
import { Button } from "./components/ui/button"
import { ArrowRight, Zap, Shield, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-green-400 glow-text">Claim Your XRPB Tokens!</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12 p-8 rounded-2xl border-2 border-green-500/30 bg-black/50 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6">
              XRPB Token Launch: Dual-Chain Powerhouse
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The XRPB token powers the RippleBids decentralized marketplace across two leading blockchains, offering
              unmatched versatility for transactions and premium features. Join the future of e-commerce!
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-green-400">XRPB on XRPL EVM Sidechain:</p>
                    <p className="text-gray-300 text-sm">
                      The primary currency for all marketplace transactions, leveraging smart contracts for secure,
                      fast, and low-cost payments. Liquidity pool available on{" "}
                      <Link href="https://xrise33.com" className="text-green-400 hover:underline">
                        Xrise33.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-green-400">XRPB-SOL on Solana:</p>
                    <p className="text-gray-300 text-sm">
                      Used for premium features such as advanced analytics, priority listings, and exclusive marketplace
                      tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/claim">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg">
                Start Claiming Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/whitepaper">
              <Button
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg bg-transparent"
              >
                Read Whitepaper
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            Learn more in our{" "}
            <Link href="/whitepaper" className="text-green-400 hover:underline">
              Whitepaper
            </Link>{" "}
            or contact{" "}
            <Link href="mailto:support@ripplebids.com" className="text-green-400 hover:underline">
              support@ripplebids.com
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-green-400">Why Choose XRPB?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-green-500/20 bg-black/30 backdrop-blur-sm">
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-green-400">Lightning Fast</h3>
              <p className="text-gray-300">
                Experience ultra-fast transactions with minimal fees across both XRPL and Solana networks.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-green-500/20 bg-black/30 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-green-400">Secure & Reliable</h3>
              <p className="text-gray-300">
                Built on proven blockchain technology with smart contract security and decentralized governance.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl border border-green-500/20 bg-black/30 backdrop-blur-sm">
              <Globe className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-green-400">Cross-Chain Power</h3>
              <p className="text-gray-300">
                Seamlessly operate across multiple blockchains with unified token utility and liquidity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
