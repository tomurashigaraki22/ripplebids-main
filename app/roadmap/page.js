import {
  CheckCircle,
  Circle,
  Clock,
  Rocket,
  Users,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Smartphone,
  Brain,
  Award,
  Building,
  ExternalLink,
} from "lucide-react"

export default function RoadmapPage() {
  const roadmapPhases = [
    {
      period: "Q1-Q2 2025",
      title: "Foundation & Presale",
      status: "active",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-[#39FF14] to-green-400",
      description: "Building the foundation and launching our presale to fund the revolution",
      milestones: [
        {
          text: "Launch website and social channels (X, Telegram, TikTok, Discord)",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          text: "Deploy XRPB token (3B total supply) with multi-signature wallet (5/5 quorum)",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          text: "Start presale: 500M XRPB for 100k XRP (1 XRP = 5,000 XRPB)",
          icon: <Target className="w-5 h-5" />,
        },
        {
          text: "Release whitepaper detailing blockchain-based marketplace vision",
          icon: <Award className="w-5 h-5" />,
        },
        {
          text: "Hire initial team: Graphic Designer, Community Lead",
          icon: <Users className="w-5 h-5" />,
        },
        {
          text: "Establish investor tiers (Tier 1–3: $1–$1,001+)",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
    },
    {
      period: "Q3-Q4 2025",
      title: "Platform Alpha & Team Expansion",
      status: "upcoming",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Developing our alpha platform and expanding the core team",
      milestones: [
        {
          text: "Develop RippleBids alpha: XRPB payments, escrow, product authenticity tracking",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          text: "Distribute presale tokens to Xaman wallets",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          text: "Recruit developers, Security Advisor, Senior Compliance Officer",
          icon: <Users className="w-5 h-5" />,
        },
        {
          text: "Launch affiliate marketing program with referral links",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          text: "Partner with Ohio-based blockchain firms and XRPL validators",
          icon: <Building className="w-5 h-5" />,
        },
        {
          text: "Begin community engagement via Discord giveaways",
          icon: <Award className="w-5 h-5" />,
        },
      ],
    },
    {
      period: "2026",
      title: "Beta Launch & Global Outreach",
      status: "upcoming",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      description: "Going global with our beta platform and expanding market reach",
      milestones: [
        {
          text: "Launch RippleBids beta with NFT trading and decentralized reviews",
          icon: <Rocket className="w-5 h-5" />,
        },
        {
          text: "List XRPB on Uniswap for liquidity (10% pool allocation)",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          text: "Expand marketing to Asia, Europe, and underbanked regions",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          text: "Integrate Xaman wallet for seamless mobile transactions",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          text: "Hire Relations Manager for investor outreach",
          icon: <Users className="w-5 h-5" />,
        },
      ],
    },
    {
      period: "2027",
      title: "Mainnet & Governance",
      status: "upcoming",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      description: "Full mainnet launch with governance and mobile applications",
      milestones: [
        {
          text: "Launch RippleBids mainnet with 1.5–3.5% fees and $25–$50 memberships",
          icon: <Rocket className="w-5 h-5" />,
        },
        {
          text: "List XRPB on Binance, targeting $8.1T e-commerce market",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          text: "Release iOS/Android apps with Xaman integration",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          text: "Hire Sales Manager and Customer Support team",
          icon: <Users className="w-5 h-5" />,
        },
        {
          text: "Implement blockchain-based reputation scores",
          icon: <Shield className="w-5 h-5" />,
        },
      ],
    },
    {
      period: "2028-2030",
      title: "Global Dominance",
      status: "future",
      icon: <Brain className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      description: "Achieving global dominance with AI integration and cross-chain support",
      milestones: [
        {
          text: "Integrate AI analytics for sellers and cross-chain trading (Ethereum, Solana)",
          icon: <Brain className="w-5 h-5" />,
        },
        {
          text: "Reach 1M active users and $1B in transaction volume",
          icon: <Target className="w-5 h-5" />,
        },
        {
          text: "Establish RippleBids as the leading decentralized marketplace",
          icon: <Award className="w-5 h-5" />,
        },
        {
          text: "Support Central Bank Digital Currencies (CBDCs) via XRPL",
          icon: <Building className="w-5 h-5" />,
        },
        {
          text: "Expand with Onboarding Support for new users",
          icon: <Users className="w-5 h-5" />,
        },
        {
          text: "Launch global ad campaigns with top affiliates",
          icon: <Globe className="w-5 h-5" />,
        },
      ],
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <Clock className="w-6 h-6 text-[#39FF14]" />
      case "upcoming":
        return <Circle className="w-6 h-6 text-blue-400" />
      case "future":
        return <Circle className="w-6 h-6 text-gray-400" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">RippleBids</span>
                <br />
                <span className="glow-text">Roadmap</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                RippleBids is forging the future of e-commerce with a decentralized marketplace on the XRP Ledger,
                powered by the XRPB token. Our plan from 2025 to 2030 will disrupt Amazon and eBay, delivering low fees,
                instant payments, and global inclusivity.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">$8.1T</h3>
                <p className="text-gray-300">Target Market Size</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">1M+</h3>
                <p className="text-gray-300">Target Active Users</p>
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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#39FF14] via-blue-400 to-gray-400"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {roadmapPhases.map((phase, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-black border-2 border-[#39FF14] z-10">
                    <div className="absolute inset-1 rounded-full bg-[#39FF14] animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-20">
                    <div className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mr-6 text-white`}
                        >
                          {phase.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3
                              className="text-2xl md:text-3xl font-bold glow-text-subtle mr-4"
                              style={{ fontFamily: "Orbitron, sans-serif" }}
                            >
                              {phase.title}
                            </h3>
                            {getStatusIcon(phase.status)}
                          </div>
                          <p className="text-[#39FF14] font-semibold text-lg">{phase.period}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">{phase.description}</p>

                      {/* Milestones */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.milestones.map((milestone, milestoneIdx) => (
                          <div key={milestoneIdx} className="feature-item">
                            <div className="flex-shrink-0 p-2 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                              {milestone.icon}
                            </div>
                            <p className="text-gray-300 leading-relaxed">{milestone.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-8 md:p-12 mt-12">
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
                Be part of the future of decentralized commerce. Invest in the XRPB presale or explore affiliate
                opportunities to help us disrupt the e-commerce industry.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
