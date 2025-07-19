import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { PieChart, TrendingUp, Coins, Users } from "lucide-react"

export default function TokenomicsPage() {
  const distributionData = [
    { category: "Community Airdrop", percentage: 40, amount: "400,000,000", color: "bg-green-500" },
    { category: "Liquidity Pool", percentage: 25, amount: "250,000,000", color: "bg-blue-500" },
    { category: "Development Fund", percentage: 15, amount: "150,000,000", color: "bg-purple-500" },
    { category: "Team & Advisors", percentage: 10, amount: "100,000,000", color: "bg-yellow-500" },
    { category: "Marketing & Partnerships", percentage: 7, amount: "70,000,000", color: "bg-red-500" },
    { category: "Reserve Fund", percentage: 3, amount: "30,000,000", color: "bg-gray-500" },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">XRPB Tokenomics</h1>
          <p className="text-xl text-gray-300">Comprehensive breakdown of XRPB token economics and distribution</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Token Overview */}
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Coins className="mr-2 h-5 w-5" />
                Token Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h3 className="text-green-400 font-semibold mb-1">Total Supply</h3>
                  <p className="text-2xl font-bold text-white">1,000,000,000</p>
                  <p className="text-sm text-gray-400">XRPB Tokens</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h3 className="text-blue-400 font-semibold mb-1">Initial Price</h3>
                  <p className="text-2xl font-bold text-white">$0.001</p>
                  <p className="text-sm text-gray-400">Per Token</p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-1">Market Cap</h3>
                  <p className="text-2xl font-bold text-white">$1,000,000</p>
                  <p className="text-sm text-gray-400">At Launch</p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <h3 className="text-yellow-400 font-semibold mb-1">Decimals</h3>
                  <p className="text-2xl font-bold text-white">18</p>
                  <p className="text-sm text-gray-400">Standard ERC-20</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dual Chain Architecture */}
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Dual Chain Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h3 className="text-green-400 font-semibold mb-2">XRPB on XRPL EVM Sidechain</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Primary marketplace currency</li>
                    <li>• Smart contract functionality</li>
                    <li>• Low transaction fees (~$0.001)</li>
                    <li>• 3-5 second confirmation times</li>
                    <li>• DEX liquidity on Xrise33.com</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">XRPB-SOL on Solana</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Premium features access</li>
                    <li>• Advanced analytics tools</li>
                    <li>• Priority listing privileges</li>
                    <li>• Staking rewards program</li>
                    <li>• Governance voting rights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Token Distribution */}
        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <PieChart className="mr-2 h-5 w-5" />
              Token Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Distribution Chart */}
              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-gray-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="text-white font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{item.percentage}%</div>
                      <div className="text-gray-400 text-sm">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Distribution Details */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h3 className="text-green-400 font-semibold mb-2">Community Airdrop (40%)</h3>
                  <p className="text-gray-300 text-sm">
                    Distributed to early supporters, community members, and ecosystem participants through various claim
                    mechanisms.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h3 className="text-blue-400 font-semibold mb-2">Liquidity Pool (25%)</h3>
                  <p className="text-gray-300 text-sm">
                    Allocated for DEX liquidity provision and market making activities across both chains.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">Development Fund (15%)</h3>
                  <p className="text-gray-300 text-sm">
                    Reserved for ongoing platform development, security audits, and technical improvements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Utility & Use Cases */}
        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Token Utility & Use Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-green-400 font-semibold text-lg">Marketplace Functions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transaction fees and payment processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seller listing fees and premium placements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Escrow services and dispute resolution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advertising and promotional campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-green-400 font-semibold text-lg">Premium Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advanced analytics and reporting tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Priority customer support access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exclusive marketplace features</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Governance voting and proposal rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vesting Schedule */}
        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-400">Vesting Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-500/20">
                    <th className="text-left py-3 text-green-400">Category</th>
                    <th className="text-left py-3 text-green-400">TGE Release</th>
                    <th className="text-left py-3 text-green-400">Cliff Period</th>
                    <th className="text-left py-3 text-green-400">Vesting Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3">Community Airdrop</td>
                    <td className="py-3">100%</td>
                    <td className="py-3">None</td>
                    <td className="py-3">Immediate</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3">Liquidity Pool</td>
                    <td className="py-3">50%</td>
                    <td className="py-3">None</td>
                    <td className="py-3">6 months linear</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3">Development Fund</td>
                    <td className="py-3">10%</td>
                    <td className="py-3">6 months</td>
                    <td className="py-3">24 months linear</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3">Team & Advisors</td>
                    <td className="py-3">0%</td>
                    <td className="py-3">12 months</td>
                    <td className="py-3">36 months linear</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3">Marketing</td>
                    <td className="py-3">25%</td>
                    <td className="py-3">3 months</td>
                    <td className="py-3">12 months linear</td>
                  </tr>
                  <tr>
                    <td className="py-3">Reserve Fund</td>
                    <td className="py-3">0%</td>
                    <td className="py-3">24 months</td>
                    <td className="py-3">60 months linear</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
