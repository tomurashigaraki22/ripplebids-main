import { Button } from "../components/ui/button"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
      <section className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-green-500/20 shadow-lg">
          <div className="glass-container">
            <h1 className="text-4xl font-bold text-green-400 glow-text glow-text mb-6">The Marketplace of the Future</h1>
            <p className="text-xl text-gray-300 mb-8">
              RippleBids is revolutionizing e-commerce by building a decentralized marketplace on the XRP Ledger (XRPL). Powered by the XRPB token, we offer a fast, low-cost, and transparent alternative to Amazon and eBay, fostering a global, inclusive economy.
            </p>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Introduction: Ripple and XRP</h2>
            <p className="text-gray-300 mb-4">
              Ripple Labs, Inc., founded in 2012 in San Francisco, is a leader in enterprise blockchain solutions for global payments. Using the XRP Ledger and its native cryptocurrency, XRP, Ripple enables faster, cheaper, and transparent cross-border transactions, challenging systems like SWIFT. Ripple’s infrastructure supports:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              <li><span className="highlight font-semibold">Cross-Border Payments</span>: Near-instant settlements.</li>
              <li><span className="highlight font-semibold">Digital Asset Management</span>: Secure and scalable.</li>
              <li><span className="highlight font-semibold">Stablecoin Development</span>: For financial institutions.</li>
              <li><span className="highlight font-semibold">Central Bank Digital Currencies</span>: Future-ready solutions.</li>
            </ul>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Problems with Traditional Marketplaces</h2>
            <p className="text-gray-300 mb-4">Amazon and eBay dominate e-commerce but have significant drawbacks:</p>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Amazon’s Challenges</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>High seller fees and subscription costs.</li>
              <li>Centralized control with limited transparency.</li>
              <li>Currency conversion issues for cross-border trade.</li>
              <li>Restricted payment options, excluding crypto users.</li>
              <li>Counterfeit products and trust issues.</li>
              <li>Poor customer service experiences.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">eBay’s Challenges</h3>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              <li>High transaction fees and complex fee structures.</li>
              <li>Slow, costly cross-border payments.</li>
              <li>Fraud and dispute risks.</li>
              <li>Limited access for unbanked users.</li>
              <li>Currency fluctuations impacting pricing.</li>
              <li>Outdated user interface.</li>
            </ul>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">RippleBids Solutions</h2>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Solving Amazon’s Problems</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><span className="highlight font-semibold">Lower Fees</span>: Blockchain enables direct transactions, reducing costs.</li>
              <li><span className="highlight font-semibold">Smart Contracts</span>: Automate payments, minimizing overhead.</li>
              <li><span className="highlight font-semibold">Transparency</span>: Verified payments and terms on XRPL.</li>
              <li><span className="highlight font-semibold">Decentralized Control</span>: Empowers buyers and sellers, reducing bias.</li>
              <li><span className="highlight font-semibold">Cross-Border Efficiency</span>: Payments settle in ~5 seconds for ~$0.01.</li>
              <li><span className="highlight font-semibold">Inclusivity</span>: Supports unbanked and crypto users.</li>
              <li><span className="highlight font-semibold">Authenticity</span>: Blockchain tracks products; escrow ensures delivery.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Solving eBay’s Problems</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><span className="highlight font-semibold">Low Fees</span>: Eliminates costly middlemen like PayPal.</li>
              <li><span className="highlight font-semibold">Fast Settlements</span>: Instant global payments via XRPL.</li>
              <li><span className="highlight font-semibold">Fraud Reduction</span>: Auditable transactions on blockchain.</li>
              <li><span className="highlight font-semibold">Accessibility</span>: Smartphone-based wallets for unbanked users.</li>
              <li><span className="highlight font-semibold">Stable Pricing</span>: Single cryptocurrency avoids exchange rate risks.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Additional Benefits</h3>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              <li><span className="highlight font-semibold">Decentralized Reviews</span>: Blockchain-based reputation scores reduce fake reviews.</li>
              <li><span className="highlight font-semibold">Data Privacy</span>: Minimal data collection, leveraging XRPL’s anonymity.</li>
              <li><span className="highlight font-semibold">Global Inclusivity</span>: Attracts users from underserved regions.</li>
            </ul>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">How It Works</h2>
            <p className="text-gray-300 mb-8">
              A seller lists an item for 50 XRPB. A buyer with XRPB in their Xaman Wallet clicks “Buy” and approves the transaction. The XRP Ledger processes it in ~3 seconds. RippleBids confirms payment, notifies the seller to ship, and releases funds from escrow upon delivery confirmation.
            </p>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Token Allocation</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><span className="highlight font-semibold">Presale/DEX</span>: 20% (600,000,000 XRPB) – Available Q2 2025 at 5,000 XRPB per 1 XRP.</li>
              <li><span className="highlight font-semibold">Community</span>: 15% (450,000,000 XRPB) – Referral, affiliate, and airdrop rewards.</li>
              <li><span className="highlight font-semibold">Payroll</span>: 1.67% (50,010,000 XRPB) – Employee and contractor compensation.</li>
              <li><span className="highlight font-semibold">Treasury</span>: 1.67% (50,010,000 XRPB) – Operational reserves.</li>
              <li><span className="highlight font-semibold">Locked Liquidity</span>: 10.67% (320,010,000 XRPB) – Locked for exchange trading stability.</li>
              <li><span className="highlight font-semibold">Vested Liquidity</span>: 2.67% (80,010,000 XRPB) – Gradual release for market support.</li>
              <li><span className="highlight font-semibold">Marketing/Development</span>: 11.67% (350,010,000 XRPB) – Global campaigns, platform upgrades, apps, NFTs.</li>
              <li><span className="highlight font-semibold">Burn</span>: 11.83% (354,990,000 XRPB) – Designated for future burns.</li>
              <li><span className="highlight font-semibold">Ecosystem Grants</span>: 1.67% (50,010,000 XRPB) – Community projects and partnerships.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Token Utility</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><span className="highlight font-semibold">Marketplace Savings</span>: Vendors save XRP by paying with XRPB.</li>
              <li><span className="highlight font-semibold">Affiliate & Influencer Rewards</span>: Paid in XRPB from Community Fund.</li>
              <li><span className="highlight font-semibold">Airdrops/Loyalty</span>: Distributed to active users, partners, and affiliates.</li>
              <li><span className="highlight font-semibold">Fees</span>: 1.5–3.5% transaction fees with discounts for XRPB use.</li>
              <li><span className="highlight font-semibold">Memberships</span>: Access to verified seller badges and analytics.</li>
              <li><span className="highlight font-semibold">NFTs</span>: Creation and trading of NFTs on the XRPL EVM Sidechain.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Supply Control</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><span className="highlight font-semibold">Fixed Supply</span>: 3,000,000,000 XRPB, no future minting allowed.</li>
              <li><span className="highlight font-semibold">Optional Burn Model</span>: Potential buybacks or milestone-based burns.</li>
              <li><span className="highlight font-semibold">Public Wallets</span>: Monthly updates on Liquidity, Treasury, and Community Fund wallets.</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 glow-text mb-2">Transparency Practices</h3>
            <ul className="list-disc list-inside text-gray-300 mb-8">
              <li><span className="highlight font-semibold">Regular Reports</span>: Issued by CFO and team.</li>
              <li><span className="highlight font-semibold">Monthly CFO Reports</span>: Detail allocation usage, liquidity health, and circulating supply.</li>
              <li><span className="highlight font-semibold">Public Ledger Access</span>: Viewable XRPB trustline, holder stats, and DEX volume.</li>
              <li><span className="highlight font-semibold">Airdrop & Payout Logs</span>: Published for affiliate rewards and community distributions.</li>
            </ul>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Company Account</h2>
            <p className="text-gray-300 mb-8">
              Funds are held in a secure multi-signature wallet requiring full board consensus (5/5 quorum) for withdrawals. Each board member has a signer wallet, managed via Xaman and XRPL Toolkit. An optional 3/5 escape hatch is available for emergencies.
            </p>

            <div className="section-divider border-t border-green-500 my-8"></div>

            <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Team</h2>
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
              <div className="team-member">
                <h3 className="text-lg font-semibold">Brendyn T.</h3>
                <p>CFO</p>
              </div>
              <div className="team-member">
                <h3 className="text-lg font-semibold">Devin H.</h3>
                <p>CEO (FOUNDER)</p>
              </div>
              <div className="team-member">
                <h3 className="text-lg font-semibold">Tim T.</h3>
                <p>COO</p>
              </div>
              <div className="team-member">
                <h3 className="text-lg font-semibold">Michael K.</h3>
                <p>CMO</p>
              </div>
              <div className="team-member">
                <h3 className="text-lg font-semibold">Cole C.</h3>
                <p>CTO</p>
              </div>
              <div className="team-member">
                <h3 className="text-lg font-semibold">Open Positions</h3>
                <p>Join our team!</p>
              </div>
            </div>

            <div className="section-divider border-t border-green-500 my-8">
                  <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Open Positions</h2>
    <p className="text-gray-300 mb-4">We’re hiring passionate individuals for:</p>
    <ul className="list-disc list-inside text-gray-300 mb-6">
      <li>Graphic Designer</li>
      <li>Community Lead</li>
      <li>Security Advisor</li>
      <li>Senior Compliance Officer</li>
      <li>Senior Developer</li>
      <li>Relations Manager</li>
      <li>Sales Manager</li>
      <li>Customer Support</li>
      <li>Onboarding Support</li>
    </ul>
    <p className="text-gray-300 mb-8">Applications opening soon, rolled out in phases.</p>

    <div className="section-divider border-t border-green-500 my-8"></div>

    <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Investor Opportunities</h2>
    <p className="text-gray-300 mb-4">Invest in RippleBids to receive tokens, memberships, and equity:</p>
    <ul className="list-disc list-inside text-gray-300 mb-6">
      <li><span className="highlight font-semibold">Tier 1</span> ($1–$100): Minor XRPB allocation, free beginner membership ($25/mo).</li>
      <li><span className="highlight font-semibold">Tier 2</span> ($101–$1,000): XRPB allocation, free premium membership ($50/mo).</li>
      <li><span className="highlight font-semibold">Tier 3</span> ($1,001+): Major XRPB allocation, premium membership, 0.05% equity.</li>
    </ul>
    <p className="text-gray-300 mb-8">Contact our board for advanced tiers and applications.</p>

    <div className="section-divider border-t border-green-500 my-8"></div>

    <h2 className="text-2xl font-semibold text-green-400 glow-text mb-4">Affiliate Marketing</h2>
    <p className="text-gray-300 mb-8">Join our affiliate program to promote RippleBids and earn XRPB and merchandise. Use referral links across social media (X, Discord, etc.) to drive users to the marketplace. Top affiliates receive bonus payouts.</p>

    <div className="section-divider border-t border-green-500 my-8"></div>

   <h2 className="text-2xl font-semibold text-green-400 glow-text mb-6">Common Questions</h2>
<div className="space-y-6 text-gray-300">
  <div>
    <p className="font-semibold text-white">Q: Is XRPL decentralized?</p>
    <p className="pl-4">A: Yes, with over 150 global validators and 80% consensus required for any protocol changes.</p>
  </div>

  <div>
    <p className="font-semibold text-white">Q: How secure is XRPL?</p>
    <p className="pl-4">A: It uses cryptographic signing and consensus to prevent double-spending. For added security, use hardware wallets like Ledger.</p>
  </div>

  <div>
    <p className="font-semibold text-white">Q: Do I need a destination tag?</p>
    <p className="pl-4">A: Not usually. Personal XRPL wallets and most marketplace transactions don’t require one.</p>
  </div>

  <div>
    <p className="font-semibold text-white">Q: How do I store XRP?</p>
    <p className="pl-4">A: You can use hardware wallets like Ledger, software wallets like Toast, or mobile wallets like Xaman.</p>
  </div>
</div>


    {/* <a href="/assets/whitepaper.pdf" className="btn-primary" download>Download Full Whitepaper</a> */}
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}