import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "../components/ui/button"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">XRPB Token Whitepaper</h1>
          <p className="text-xl text-gray-300">
            Comprehensive documentation of the RippleBids ecosystem and XRPB tokenomics
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>
                The XRPB token represents a revolutionary approach to decentralized marketplace economics, operating
                seamlessly across two leading blockchain networks: XRPL EVM Sidechain and Solana.
              </p>
              <p>
                This dual-chain architecture provides unmatched versatility, allowing users to leverage the unique
                advantages of each blockchain while maintaining unified token utility and liquidity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">Token Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">XRPB on XRPL EVM Sidechain</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Primary marketplace currency</li>
                    <li>• Smart contract enabled</li>
                    <li>• Low transaction fees</li>
                    <li>• High throughput</li>
                    <li>• Liquidity pool on Xrise33.com</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">XRPB-SOL on Solana</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Premium features access</li>
                    <li>• Advanced analytics</li>
                    <li>• Priority listings</li>
                    <li>• Exclusive marketplace tools</li>
                    <li>• In-app credits system</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">Technology Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <h3 className="text-green-400 font-semibold">Cross-Chain Bridge Technology</h3>
              <p>
                Our innovative bridge technology enables seamless token transfers between XRPL EVM Sidechain and Solana
                networks, providing users with maximum flexibility and utility.
              </p>

              <h3 className="text-green-400 font-semibold mt-6">Smart Contract Security</h3>
              <p>
                All smart contracts undergo rigorous security audits and implement industry-standard security practices
                to ensure user funds and data remain protected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">Marketplace Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>
                The RippleBids marketplace leverages XRPB tokens to create a comprehensive e-commerce ecosystem with the
                following features:
              </p>
              <ul className="space-y-2">
                <li>• Decentralized product listings and transactions</li>
                <li>• Automated escrow and dispute resolution</li>
                <li>• Reputation and review systems</li>
                <li>• Multi-currency payment processing</li>
                <li>• Advanced search and filtering capabilities</li>
                <li>• Seller analytics and performance metrics</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">
              <Download className="mr-2 h-4 w-4" />
              Download Full Whitepaper (PDF)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
