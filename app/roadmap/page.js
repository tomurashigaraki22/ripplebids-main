import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <section className="hero">
          <div className="glass-container">
            <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">RippleBids Roadmap</h1>
            <p className="text-xl text-gray-300 mb-8">
              RippleBids is forging the future of e-commerce with a decentralized marketplace on the XRP Ledger, powered by the XRPB token. Our plan from 2025 to 2030 will disrupt Amazon and eBay, delivering low fees, instant payments, and global inclusivity.
            </p>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <div className="roadmap-timeline space-y-8">
              <div className="roadmap-item">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Q1-Q2 2025: Foundation & Presale</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Launch website and social channels (X, Telegram, TikTok, Discord).</li>
                  <li>Deploy XRPB token (3B total supply) with multi-signature wallet (5/5 quorum).</li>
                  <li>Start presale: 500M XRPB for 100k XRP (1 XRP = 5,000 XRPB).</li>
                  <li>Release whitepaper detailing blockchain-based marketplace vision.</li>
                  <li>Hire initial team: Graphic Designer, Community Lead.</li>
                  <li>Establish investor tiers (Tier 1–3: $1–$1,001+).</li>
                </ul>
              </div>

              <div className="roadmap-item">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Q3-Q4 2025: Platform Alpha & Team Expansion</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Develop RippleBids alpha: XRPB payments, escrow, product authenticity tracking.</li>
                  <li>Distribute presale tokens to Xaman wallets.</li>
                  <li>Recruit developers, Security Advisor, Senior Compliance Officer.</li>
                  <li>Launch affiliate marketing program with referral links.</li>
                  <li>Partner with Ohio-based blockchain firms and XRPL validators.</li>
                  <li>Begin community engagement via Discord giveaways.</li>
                </ul>
              </div>

              <div className="roadmap-item">
                <h3 className="text-xl font-semibold text-green-400 mb-2">2026: Beta Launch & Global Outreach</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Launch RippleBids beta with NFT trading and decentralized reviews.</li>
                  <li>List XRPB on Uniswap for liquidity (10% pool allocation).</li>
                  <li>Expand marketing to Asia, Europe, and underbanked regions.</li>
                  <li>Integrate Xaman wallet for seamless mobile transactions.</li>
                  <li>Hire Relations Manager for investor outreach.</li>
                </ul>
              </div>

              <div className="roadmap-item">
                <h3 className="text-xl font-semibold text-green-400 mb-2">2027: Mainnet & Governance</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Launch RippleBids mainnet with 1.5–3.5% fees and $25–$50 memberships.</li>
                  <li>List XRPB on Binance, targeting $8.1T e-commerce market.</li>
                  <li>Release iOS/Android apps with Xaman integration.</li>
                  <li>Hire Sales Manager and Customer Support team.</li>
                  <li>Implement blockchain-based reputation scores.</li>
                </ul>
              </div>

              <div className="roadmap-item">
                <h3 className="text-xl font-semibold text-green-400 mb-2">2028-2030: Global Dominance</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Integrate AI analytics for sellers and cross-chain trading (Ethereum, Solana).</li>
                  <li>Reach 1M active users and $1B in transaction volume.</li>
                  <li>Establish RippleBids as the leading decentralized marketplace.</li>
                  <li>Support Central Bank Digital Currencies (CBDCs) via XRPL.</li>
                  <li>Expand with Onboarding Support for new users.</li>
                  <li>Launch global ad campaigns with top affiliates.</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 mt-8">
              Join the revolution! Invest in the <a href="/" className="highlight">XRPB presale</a> or contact <a href="/contact-html" className="btn-primary">Support</a> for investor and affiliate opportunities.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
