import {
  Briefcase,
  PiggyBank,
  ShieldCheck,
  Users,
  Flame,
  Rocket,
  TrendingUp,
  Lock,
  Gift,
  Target,
  BarChart3,
  Coins,
  Award,
  FileText,
  Mail,
  ExternalLink,
  Clock,
  Zap,
  Shield,
  Eye,
} from "lucide-react"

const TokenomicsScreen = () => {
  const boardHoldings = [
    {
      role: "CEO",
      amount: "8.33%",
      tokens: "249,900,000 XRPB",
      note: "12-month lock, then 12-month vest.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      role: "CFO",
      amount: "5.5%",
      tokens: "165,000,000 XRPB",
      note: "12-month vesting.",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      role: "COO",
      amount: "5.5%",
      tokens: "165,000,000 XRPB",
      note: "12-month vesting.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      role: "CHO",
      amount: "5.5%",
      tokens: "165,000,000 XRPB",
      note: "12-month vesting.",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  const tokenAllocations = [
    {
      title: "Presale/DEX",
      percent: "20%",
      detail: "600,000,000 XRPB - Q2 2025 @ 5,000 XRPB/1 XRP",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-[#39FF14] to-green-400",
    },
    {
      title: "Community",
      percent: "15%",
      detail: "450,000,000 XRPB - Airdrop & rewards",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Payroll",
      percent: "1.67%",
      detail: "50,010,000 XRPB - Compensation",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Treasury",
      percent: "1.67%",
      detail: "50,010,000 XRPB - Reserves",
      icon: <PiggyBank className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Locked Liquidity",
      percent: "10.67%",
      detail: "320,010,000 XRPB - Stability",
      icon: <Lock className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Vested Liquidity",
      percent: "2.67%",
      detail: "80,010,000 XRPB - Gradual release",
      icon: <Clock className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Marketing/Dev",
      percent: "11.67%",
      detail: "350,010,000 XRPB - Campaigns & upgrades",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Burn",
      percent: "11.83%",
      detail: "354,990,000 XRPB - Future burns",
      icon: <Flame className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Ecosystem Grants",
      percent: "1.67%",
      detail: "50,010,000 XRPB - Community projects",
      icon: <Gift className="w-6 h-6" />,
      color: "from-teal-400 to-teal-600",
    },
  ]

  const utilityFeatures = [
    {
      title: "Marketplace Savings",
      desc: "Pay with XRPB and save XRP.",
      icon: <Coins className="w-6 h-6" />,
    },
    {
      title: "Affiliate Rewards",
      desc: "Get paid from the Community Fund.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Loyalty Airdrops",
      desc: "For users and partners.",
      icon: <Gift className="w-6 h-6" />,
    },
    {
      title: "Fee Discounts",
      desc: "1.5–3.5% fee reductions.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Membership Perks",
      desc: "Verified seller badge, analytics.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "NFT Utility",
      desc: "Mint and trade on the XRPL EVM Sidechain.",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  const supplyFeatures = [
    {
      title: "Fixed Supply",
      desc: "3,000,000,000 XRPB total, no more minting.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Burn Model",
      desc: "Optional burns/buybacks may apply.",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: "Public Wallets",
      desc: "Liquidity/Treasury/Community funds disclosed monthly.",
      icon: <Eye className="w-6 h-6" />,
    },
  ]

  const transparencyFeatures = [
    {
      title: "Reports",
      desc: "CFO and team provide ongoing updates.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Monthly CFO Briefs",
      desc: "Allocation, liquidity, and circulating stats.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Ledger Access",
      desc: "XRPB trustline and DEX volume viewable.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Airdrop Logs",
      desc: "Affiliate and community rewards disclosed.",
      icon: <Target className="w-6 h-6" />,
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

      <section className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">XRPB</span>
                <br />
                <span className="glow-text">Tokenomics</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6">
                The XRPB token powers RippleBids, a decentralized marketplace on the XRP Ledger EVM Sidechain. With a
                fixed 3B supply, XRPB enables transactions, governance, and rewards.
              </p>
              <div className="flex items-center justify-center">
                <p className="text-gray-300 mr-2">Liquidity is on</p>
                <a
                  href="https://xrise33.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300 inline-flex items-center"
                >
                  Xrise33.com
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">3B</h3>
                <p className="text-gray-300">Total Supply</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">22.97%</h3>
                <p className="text-gray-300">Board Holdings</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">20%</h3>
                <p className="text-gray-300">Presale/DEX</p>
              </div>
            </div>
          </div>

          {/* Board Holdings Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Board Holdings Breakdown (22.97%)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {boardHoldings.map(({ role, amount, tokens, note, icon }) => (
                <div key={role} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-3 text-[#39FF14]">
                      {icon}
                    </div>
                    <h3 className="text-xl font-bold glow-text-subtle" style={{ fontFamily: "Orbitron, sans-serif" }}>
                      {role}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-2">
                    <span className="text-[#39FF14] font-semibold">{amount}</span> ({tokens})
                  </p>
                  <p className="text-sm text-gray-400">{note}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 border-yellow-500/30 bg-yellow-500/5">
              <div className="flex items-center mb-3">
                <ShieldCheck className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="font-semibold text-yellow-400 text-lg">Important Note</h3>
              </div>
              <p className="text-gray-300">
                Board allocations are fully locked for vesting and don't affect early liquidity or public access.
              </p>
            </div>
          </div>

          {/* Token Allocation Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Token Allocation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenAllocations.map(({ title, percent, detail, icon, color }) => (
                <div key={title} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mr-3 text-white`}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#39FF14] glow-text-subtle">{title}</h3>
                      <p className="text-2xl font-bold text-white">{percent}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Token Utility Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Token Utility
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {utilityFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">{feature.icon}</div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Control Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Supply Control
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supplyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">{feature.icon}</div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Transparency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transparencyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">{feature.icon}</div>
                  <div>
                    <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
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
                  Join the Movement
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Claim XRPB tokens and be part of the decentralized commerce revolution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="/whitepaper-html"
                  className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Read our Whitepaper
                </a>
                <span className="text-gray-500 hidden sm:block">or</span>
                <a
                  href="mailto:support@ripplebids.com"
                  className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </div>

              <a href="/" className="neon-button text-lg px-12 py-4">
                Buy XRPB
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TokenomicsScreen
