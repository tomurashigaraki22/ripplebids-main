import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      period: "Q4 2024 - Q1 2025",
      status: "completed",
      items: [
        "XRPB token smart contract development",
        "XRPL EVM Sidechain integration",
        "Solana network deployment",
        "Initial liquidity pool creation",
        "Community building and partnerships",
      ],
    },
    {
      phase: "Phase 2",
      title: "Token Distribution & Marketplace Beta",
      period: "Q2 2025",
      status: "current",
      items: [
        "XRPB token distribution to claimants",
        "RippleBids marketplace beta launch",
        "Cross-chain bridge implementation",
        "Basic trading and listing features",
        "User onboarding and tutorials",
      ],
    },
    {
      phase: "Phase 3",
      title: "Advanced Features & Scaling",
      period: "Q3 2025",
      status: "upcoming",
      items: [
        "Advanced analytics dashboard",
        "Premium seller tools",
        "Mobile application launch",
        "Enhanced security features",
        "Multi-language support",
      ],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      period: "Q4 2025",
      status: "upcoming",
      items: [
        "Third-party integrations",
        "API marketplace launch",
        "Governance token features",
        "Staking and rewards program",
        "Global marketplace expansion",
      ],
    },
    {
      phase: "Phase 5",
      title: "Innovation & Growth",
      period: "2026 & Beyond",
      status: "future",
      items: [
        "AI-powered recommendations",
        "NFT marketplace integration",
        "DeFi lending and borrowing",
        "Enterprise solutions",
        "Metaverse commerce integration",
      ],
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-400" />
      case "current":
        return <Clock className="h-6 w-6 text-yellow-400" />
      default:
        return <Circle className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-500/50 bg-green-500/10"
      case "current":
        return "border-yellow-500/50 bg-yellow-500/10"
      default:
        return "border-gray-500/30 bg-black/30"
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">RippleBids Roadmap</h1>
          <p className="text-xl text-gray-300">Our journey to revolutionize decentralized e-commerce</p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className={`backdrop-blur-sm ${getStatusColor(item.status)}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <h2 className="text-xl font-bold text-green-400">{item.phase}</h2>
                      <h3 className="text-lg text-white">{item.title}</h3>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-normal">{item.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Follow our progress and get the latest updates on our development milestones.
              </p>
              <p className="text-sm text-gray-400">
                Roadmap items and timelines are subject to change based on development progress and market conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
