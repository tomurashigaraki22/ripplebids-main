import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Users, DollarSign, TrendingUp, Gift } from "lucide-react"

export default function AffiliatePage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">Affiliate Program</h1>
          <p className="text-xl text-gray-300">Earn rewards by referring new users to RippleBids</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Program Overview */}
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Gift className="mr-2 h-5 w-5" />
                Program Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h3 className="text-green-400 font-semibold mb-2">Referral Rewards</h3>
                <p className="text-2xl font-bold text-white mb-1">10% Commission</p>
                <p className="text-gray-300 text-sm">Earn 10% of all XRPB tokens claimed by your referrals</p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h3 className="text-blue-400 font-semibold mb-2">Bonus Tiers</h3>
                <p className="text-2xl font-bold text-white mb-1">Up to 15%</p>
                <p className="text-gray-300 text-sm">Higher commissions for top-performing affiliates</p>
              </div>

              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold mb-2">Monthly Bonuses</h3>
                <p className="text-2xl font-bold text-white mb-1">Extra XRPB</p>
                <p className="text-gray-300 text-sm">Additional rewards for meeting monthly targets</p>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold">Sign Up</h3>
                    <p className="text-gray-300 text-sm">
                      Register for our affiliate program and get your unique referral link
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold">Share</h3>
                    <p className="text-gray-300 text-sm">
                      Share your referral link with friends, family, and your network
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold">Earn</h3>
                    <p className="text-gray-300 text-sm">
                      Receive XRPB tokens for every successful referral that claims tokens
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commission Structure */}
        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Commission Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-500/20">
                    <th className="text-left py-3 text-green-400">Tier</th>
                    <th className="text-left py-3 text-green-400">Referrals Required</th>
                    <th className="text-left py-3 text-green-400">Commission Rate</th>
                    <th className="text-left py-3 text-green-400">Monthly Bonus</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3 font-semibold text-green-400">Bronze</td>
                    <td className="py-3">1-10 referrals</td>
                    <td className="py-3">10%</td>
                    <td className="py-3">-</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3 font-semibold text-blue-400">Silver</td>
                    <td className="py-3">11-25 referrals</td>
                    <td className="py-3">12%</td>
                    <td className="py-3">1,000 XRPB</td>
                  </tr>
                  <tr className="border-b border-gray-500/20">
                    <td className="py-3 font-semibold text-yellow-400">Gold</td>
                    <td className="py-3">26-50 referrals</td>
                    <td className="py-3">13%</td>
                    <td className="py-3">2,500 XRPB</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-purple-400">Diamond</td>
                    <td className="py-3">50+ referrals</td>
                    <td className="py-3">15%</td>
                    <td className="py-3">5,000 XRPB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Form */}
        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Join the Affiliate Program
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-green-400">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-green-400">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Your last name"
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-green-400">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
              />
            </div>

            <div>
              <Label htmlFor="wallet" className="text-green-400">
                XRPB Wallet Address
              </Label>
              <Input
                id="wallet"
                placeholder="Your XRPB wallet address for commission payments"
                className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
              />
            </div>

            <div>
              <Label htmlFor="experience" className="text-green-400">
                Marketing Experience (Optional)
              </Label>
              <Input
                id="experience"
                placeholder="Tell us about your marketing background"
                className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
              />
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">
              Apply for Affiliate Program
            </Button>

            <div className="text-center text-sm text-gray-400">
              <p>
                By applying, you agree to our affiliate terms and conditions. Commission payments will be made monthly
                in XRPB tokens.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
s