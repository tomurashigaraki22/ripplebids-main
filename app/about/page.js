import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Users, Target, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">About RippleBids</h1>
          <p className="text-xl text-gray-300">Pioneering the future of decentralized e-commerce</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                RippleBids envisions a world where e-commerce is truly decentralized, transparent, and accessible to
                everyone. By leveraging the power of blockchain technology across multiple networks, we're creating a
                marketplace that empowers both buyers and sellers with unprecedented control, security, and efficiency.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  To revolutionize online commerce by creating a decentralized marketplace that eliminates
                  intermediaries, reduces fees, and provides a secure, transparent trading environment for users
                  worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  We're pioneering dual-chain architecture that combines the strengths of XRPL EVM Sidechain and Solana,
                  offering users the best of both worlds in terms of speed, cost, and functionality.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">Why Choose RippleBids?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-400 mb-1">Security First</h3>
                      <p className="text-gray-300 text-sm">
                        Built with enterprise-grade security features and audited smart contracts to protect user
                        assets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-400 mb-1">Community Driven</h3>
                      <p className="text-gray-300 text-sm">
                        Governed by the community with transparent decision-making and democratic processes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-black text-xs font-bold">$</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 mb-1">Low Fees</h3>
                      <p className="text-gray-300 text-sm">
                        Minimal transaction costs compared to traditional e-commerce platforms and centralized
                        exchanges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-black text-xs font-bold">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 mb-1">Fast Transactions</h3>
                      <p className="text-gray-300 text-sm">
                        Lightning-fast transaction processing across both XRPL and Solana networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">The Team</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                RippleBids is built by a team of experienced blockchain developers, e-commerce experts, and
                cryptocurrency enthusiasts who are passionate about creating the future of decentralized commerce.
              </p>
              <p>
                Our diverse team brings together expertise from traditional finance, blockchain technology, user
                experience design, and marketplace operations to deliver a world-class platform.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-500/10 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-4">Join Our Journey</h3>
              <p className="text-gray-300 mb-4">
                Be part of the decentralized commerce revolution. Claim your XRPB tokens today and help shape the future
                of online marketplaces.
              </p>
              <p className="text-sm text-gray-400">
                Together, we're building more than just a marketplace – we're creating a new economy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
