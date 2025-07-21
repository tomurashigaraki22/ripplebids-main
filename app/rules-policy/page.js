import {
  Twitter,
  Send,
  Music,
  MessageCircle,
  Shield,
  Coins,
  Eye,
  Scale,
  Users,
  FileText,
  Lock,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Mail,
  Gavel,
  UserCheck,
  Database,
  Globe,
} from "lucide-react"

const PolicyPage = () => {
  const policySections = [
    {
      title: "Platform Rules",
      icon: <Shield className="w-8 h-8" />,
      color: "from-[#39FF14] to-green-400",
      content: {
        intro: "RippleBids is a community-driven marketplace. Users must adhere to these rules to maintain integrity:",
        items: [
          {
            label: "Eligibility:",
            text: "Users must be 18+ and comply with local laws. KYC may be required for high-value transactions or presale tiers ($1,001+).",
            icon: <UserCheck className="w-5 h-5" />,
          },
          {
            label: "Prohibited Activities:",
            text: "No illegal activities, including fraud, money laundering, or trading prohibited items. Violations result in account suspension.",
            icon: <AlertTriangle className="w-5 h-5" />,
          },
          {
            label: "Content Guidelines:",
            text: "Listings must be accurate and free of offensive material. RippleBids may remove non-compliant listings.",
            icon: <FileText className="w-5 h-5" />,
          },
          {
            label: "Security Responsibility:",
            text: "Users must secure their XRPL wallets. RippleBids is not liable for losses due to compromised wallets or user error.",
            icon: <Lock className="w-5 h-5" />,
          },
          {
            label: "Fees:",
            text: "Platform fees range from 1.5–3.5%, payable in XRPB or XRP.",
            icon: <Coins className="w-5 h-5" />,
          },
        ],
      },
    },
    {
      title: "XRPB Presale Terms",
      icon: <Coins className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      content: {
        intro:
          "The XRPB token presale (500M of 3B total supply) is governed by these terms to protect RippleBids and investors:",
        items: [
          {
            label: "Purchase Process:",
            text: "Buy XRPB at 5,000 XRPB per 1 XRP via XRPL wallets. Contributions are recorded on the XRP Ledger.",
            icon: <CheckCircle className="w-5 h-5" />,
          },
          {
            label: "Non-Refundable:",
            text: "Presale purchases are final, except as required by applicable law.",
            icon: <AlertTriangle className="w-5 h-5" />,
          },
          {
            label: "Distribution:",
            text: "Tokens will be distributed in Q3 2025 post audit and contract deployment.",
            icon: <Send className="w-5 h-5" />,
          },
          {
            label: "Risk Disclosure:",
            text: "Cryptocurrencies are volatile. Investors assume all risks.",
            icon: <AlertTriangle className="w-5 h-5" />,
          },
          {
            label: "AML/KYC Compliance:",
            text: "RippleBids complies with AML and KYC regulations.",
            icon: <UserCheck className="w-5 h-5" />,
          },
          {
            label: "Fund Security:",
            text: "Funds are held in a 5/5 multi-signature wallet.",
            icon: <Lock className="w-5 h-5" />,
          },
        ],
      },
    },
    {
      title: "Privacy Policy",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      content: {
        intro: "RippleBids values your privacy and complies with GDPR, CCPA, and other data protection laws:",
        items: [
          {
            label: "Data Collection:",
            text: "We collect XRPL wallet addresses, optional emails, and public transaction data.",
            icon: <Database className="w-5 h-5" />,
          },
          {
            label: "Data Use:",
            text: "Used for processing, support, improvement, and compliance.",
            icon: <CheckCircle className="w-5 h-5" />,
          },
          {
            label: "Data Sharing:",
            text: "No third-party sharing except as required by law.",
            icon: <Shield className="w-5 h-5" />,
          },
          {
            label: "Data Security:",
            text: "Protected with AES-256 encryption and secure servers.",
            icon: <Lock className="w-5 h-5" />,
          },
          {
            label: "User Rights:",
            text: "Users may request data access, correction, or deletion.",
            icon: <Users className="w-5 h-5" />,
          },
          {
            label: "Cookies:",
            text: "Only essential cookies are used without tracking.",
            icon: <Globe className="w-5 h-5" />,
          },
        ],
      },
    },
    {
      title: "Legal Protections",
      icon: <Scale className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      content: {
        intro: "RippleBids is incorporated in Ohio, USA, and operates under these legal frameworks:",
        items: [
          {
            label: "Intellectual Property:",
            text: "RippleBids' logo, code, and content are copyrighted.",
            icon: <FileText className="w-5 h-5" />,
          },
          {
            label: "Liability Limitation:",
            text: "RippleBids is not liable for indirect damages or user error.",
            icon: <Shield className="w-5 h-5" />,
          },
          {
            label: "Termination:",
            text: "Accounts may be terminated for policy violations.",
            icon: <AlertTriangle className="w-5 h-5" />,
          },
          {
            label: "Governing Law:",
            text: "Ohio law governs all activities. Arbitration in Chicago, IL.",
            icon: <Gavel className="w-5 h-5" />,
          },
          {
            label: "Indemnification:",
            text: "Users agree to indemnify RippleBids for platform-related actions.",
            icon: <Scale className="w-5 h-5" />,
          },
        ],
      },
    },
    {
      title: "Dispute Resolution",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      content: {
        intro: "We prioritize fair resolutions for all disputes:",
        items: [
          {
            label: "XRPL Bids:",
            text: "Escrow ensures secure transactions for buyers and sellers.",
            icon: <Lock className="w-5 h-5" />,
          },
          {
            label: "Mediation:",
            text: "Disputes resolved via decentralized governance post-2026.",
            icon: <Users className="w-5 h-5" />,
          },
          {
            label: "Arbitration:",
            text: "Legal disputes resolved via arbitration in Chicago, IL.",
            icon: <Gavel className="w-5 h-5" />,
          },
          {
            label: "Contact:",
            text: "For issues, email support@ripplebids.com.",
            icon: <Mail className="w-5 h-5" />,
          },
        ],
      },
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

      <div className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">Rules &</span>
                <br />
                <span className="glow-text">Policy</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                Welcome to RippleBids' decentralized marketplace on the XRP Ledger. Our rules and policies ensure a
                secure, fair, and transparent experience for all users and XRPB presale participants.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold glow-text-subtle mb-2">Secure</h3>
                <p className="text-gray-300">Protected by XRPL technology</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold glow-text-subtle mb-2">Fair</h3>
                <p className="text-gray-300">Transparent dispute resolution</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold glow-text-subtle mb-2">Transparent</h3>
                <p className="text-gray-300">Open and compliant operations</p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          {policySections.map(({ title, icon, color, content }, idx) => (
            <div key={idx} className="glass-card p-8 md:p-10 mb-8">
              <div className="flex items-center mb-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mr-4 text-white`}
                >
                  {icon}
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold glow-text-subtle"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {title}
                </h2>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{content.intro}</p>

              <div className="space-y-4">
                {content.items.map((item, index) => (
                  <div key={index} className="feature-item">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-[#39FF14]/10 text-[#39FF14]">{item.icon}</div>
                    <div>
                      <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-2">{item.label}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Updates & Contact Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="text-center">
              <h3
                className="text-2xl md:text-3xl font-bold glow-text-subtle mb-6"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Stay Updated
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Policy updates will be posted here and announced on our social channels. Have questions? We're here to
                help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://x.com/rippleBids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Follow us on X
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <span className="text-gray-500 hidden sm:block">or</span>
                <a
                  href="/contact-html"
                  className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </div>

              <a href="/" className="neon-button text-lg px-12 py-4">
                Join the Presale
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="glass-card p-6">
            <div className="text-center">
              <p className="text-gray-400 mb-6">© 2025 RippleBids. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://x.com/ripplebids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                >
                  <Twitter className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://t.me/+MFu9bioLH2Q1NWYx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                >
                  <Send className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@ripplebids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                >
                  <Music className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://discord.gg/WcCnq3DrpB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                >
                  <MessageCircle className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default PolicyPage
