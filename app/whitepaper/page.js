import {
  FileText,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Coins,
  Target,
  Award,
  Building,
  Brain,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Mail,
  Briefcase,
  PiggyBank,
  Crown,
  Star,
  Rocket,
} from "lucide-react"

export default function WhitepaperPage() {
  const teamMembers = [
    { name: "Brendyn T.", role: "CFO", icon: <PiggyBank className="w-6 h-6" /> },
    { name: "Devin H.", role: "CEO (FOUNDER)", icon: <Crown className="w-6 h-6" /> },
    { name: "Tim T.", role: "COO", icon: <Users className="w-6 h-6" /> },
    { name: "Michael K.", role: "CMO", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Cole C.", role: "CTO", icon: <Brain className="w-6 h-6" /> },
    { name: "Open Positions", role: "Join our team!", icon: <Star className="w-6 h-6" /> },
  ]

  const openPositions = [
    "Graphic Designer",
    "Community Lead",
    "Security Advisor",
    "Senior Compliance Officer",
    "Senior Developer",
    "Relations Manager",
    "Sales Manager",
    "Customer Support",
    "Onboarding Support",
  ]

  const investmentTiers = [
    {
      tier: "Tier 1",
      range: "$1–$100",
      benefits: "Minor XRPB allocation, free beginner membership ($25/mo)",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      tier: "Tier 2",
      range: "$101–$1,000",
      benefits: "XRPB allocation, free premium membership ($50/mo)",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      tier: "Tier 3",
      range: "$1,001+",
      benefits: "Major XRPB allocation, premium membership, 0.05% equity",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
  ]

  const faqs = [
    {
      question: "Is XRPL decentralized?",
      answer: "Yes, with over 150 global validators and 80% consensus required for any protocol changes.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      question: "How secure is XRPL?",
      answer:
        "It uses cryptographic signing and consensus to prevent double-spending. For added security, use hardware wallets like Ledger.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Do I need a destination tag?",
      answer: "Not usually. Personal XRPL wallets and most marketplace transactions don't require one.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      question: "How do I store XRP?",
      answer: "You can use hardware wallets like Ledger, software wallets like Toast, or mobile wallets like Xaman.",
      icon: <Shield className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#39FF14]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card p-8 md:p-12 mb-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-12 h-12 text-[#39FF14] mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  <span className="text-gradient">The Marketplace</span>
                  <br />
                  <span className="glow-text">of the Future</span>
                </h1>
              </div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                RippleBids is revolutionizing e-commerce by building a decentralized marketplace on the XRP Ledger
                (XRPL). Powered by the XRPB token, we offer a fast, low-cost, and transparent alternative to Amazon and
                eBay, fostering a global, inclusive economy.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">~3 Seconds</h3>
                <p className="text-gray-300">Transaction Speed</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">~$0.01</h3>
                <p className="text-gray-300">Transaction Cost</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">1.5-3.5%</h3>
                <p className="text-gray-300">Platform Fees</p>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Rocket className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Introduction: Ripple and XRP
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ripple Labs, Inc., founded in 2012 in San Francisco, is a leader in enterprise blockchain solutions for
              global payments. Using the XRP Ledger and its native cryptocurrency, XRP, Ripple enables faster, cheaper,
              and transparent cross-border transactions, challenging systems like SWIFT.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="feature-item">
                <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Cross-Border Payments</h3>
                  <p className="text-gray-300">Near-instant settlements</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Digital Asset Management</h3>
                  <p className="text-gray-300">Secure and scalable</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Stablecoin Development</h3>
                  <p className="text-gray-300">For financial institutions</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">
                    Central Bank Digital Currencies
                  </h3>
                  <p className="text-gray-300">Future-ready solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Problems Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Problems with Traditional Marketplaces
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Amazon and eBay dominate e-commerce but have significant drawbacks that RippleBids addresses:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Amazon Problems */}
              <div className="glass-card p-6 border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Amazon's Challenges
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High seller fees and subscription costs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Centralized control with limited transparency
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Currency conversion issues for cross-border trade
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Restricted payment options, excluding crypto users
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Counterfeit products and trust issues
                  </li>
                </ul>
              </div>

              {/* eBay Problems */}
              <div className="glass-card p-6 border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  eBay's Challenges
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High transaction fees and complex fee structures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Slow, costly cross-border payments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Fraud and dispute risks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Limited access for unbanked users
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Outdated user interface
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                RippleBids Solutions
              </h2>
            </div>

            <div className="space-y-8">
              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Lower Fees</h3>
                    <p className="text-gray-300">Blockchain enables direct transactions, reducing costs</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Smart Contracts</h3>
                    <p className="text-gray-300">Automate payments, minimizing overhead</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Transparency</h3>
                    <p className="text-gray-300">Verified payments and terms on XRPL</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Decentralized Control</h3>
                    <p className="text-gray-300">Empowers buyers and sellers, reducing bias</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Cross-Border Efficiency</h3>
                    <p className="text-gray-300">Payments settle in ~5 seconds for ~$0.01</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">Authenticity</h3>
                    <p className="text-gray-300">Blockchain tracks products; escrow ensures delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                How It Works
              </h2>
            </div>

            <div className="glass-card p-6 bg-[#39FF14]/5 border-[#39FF14]/30 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                A seller lists an item for 50 XRPB. A buyer with XRPB in their Xaman Wallet clicks "Buy" and approves
                the transaction. The XRP Ledger processes it in ~3 seconds. RippleBids confirms payment, notifies the
                seller to ship, and releases funds from escrow upon delivery confirmation.
              </p>
            </div>

            {/* Token Allocation */}
            <h3 className="text-2xl font-bold glow-text-subtle mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Token Allocation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Presale/DEX", percent: "20%", amount: "600,000,000 XRPB", desc: "Available Q2 2025" },
                { title: "Community", percent: "15%", amount: "450,000,000 XRPB", desc: "Rewards & airdrops" },
                { title: "Marketing/Dev", percent: "11.67%", amount: "350,010,000 XRPB", desc: "Campaigns & upgrades" },
                { title: "Burn", percent: "11.83%", amount: "354,990,000 XRPB", desc: "Future burns" },
                { title: "Locked Liquidity", percent: "10.67%", amount: "320,010,000 XRPB", desc: "Trading stability" },
                { title: "Other", percent: "30.83%", amount: "925,000,000 XRPB", desc: "Treasury, payroll, etc." },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <h4 className="text-[#39FF14] font-semibold mb-2">{item.title}</h4>
                  <p className="text-2xl font-bold text-white mb-1">{item.percent}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.amount}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#39FF14]">
                    {member.icon}
                  </div>
                  <h3 className="text-[#39FF14] glow-text-subtle font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Open Positions */}
            <div className="glass-card p-6 border-blue-500/30 bg-blue-500/5">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Open Positions
              </h3>
              <p className="text-gray-300 mb-4">We're hiring passionate individuals for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {openPositions.map((position, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    {position}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">Applications opening soon, rolled out in phases.</p>
            </div>
          </div>

          {/* Investment Tiers */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Investor Opportunities
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Invest in RippleBids to receive tokens, memberships, and equity:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investmentTiers.map((tier, idx) => (
                <div key={idx} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mr-4 text-white`}
                    >
                      {tier.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold glow-text-subtle">{tier.tier}</h3>
                      <p className="text-[#39FF14] font-semibold">{tier.range}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{tier.benefits}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 border-yellow-500/30 bg-yellow-500/5 mt-6">
              <p className="text-gray-300">
                <Mail className="w-5 h-5 text-yellow-400 inline mr-2" />
                Contact our board for advanced tiers and applications.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-card p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-[#39FF14]">
                      {faq.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{faq.question}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed ml-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-8 md:p-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-[#39FF14] mr-3" />
                <h2
                  className="text-3xl md:text-4xl font-bold glow-text-subtle"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Join the Revolution
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Ready to be part of the future of decentralized commerce? Join our presale, become an affiliate, or
                contact us for investment opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/" className="neon-button text-lg px-12 py-4">
                  Join XRPB Presale
                </a>
                <a
                  href="/contact-html"
                  className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300 px-6 py-4"
                >
                  Contact Support
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Download Button (commented out in original) */}
              {/* <div className="mt-8">
                <a 
                  href="/assets/whitepaper.pdf" 
                  className="neon-button inline-flex items-center px-8 py-3"
                  download
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Whitepaper
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
