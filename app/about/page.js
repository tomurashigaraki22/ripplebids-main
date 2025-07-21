import { Users, Target, Shield, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Brendyn T.",
      title: "CFO",
      img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b53aebcfc50b6b603122f_IMG_3081.webp",
      desc: "Expert in financial structure. Overlooks RippleBids' finances professionally since 2025.",
    },
    {
      name: "Devin H.",
      title: "CEO & Founder",
      img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b53bf85bacfab9b47c6a6_IMG_3713.webp",
      desc: "Founded RippleBids in 2025 and works tirelessly to make it the future of e-commerce.",
    },
    {
      name: "Tim T.",
      title: "COO",
      img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b53b49e48b242548294e3_IMG_3425.webp",
      desc: "Crypto enthusiast & marketing lead, connecting RippleBids globally since 2025.",
    },
    {
      name: "Michael K.",
      title: "CMO",
      img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b539fcd8fe3c5bae907e3_IMG_2433.webp",
      desc: "Media mastermind with strong leadership skills. Marketing RippleBids worldwide.",
    },
    {
      name: "Cole C.",
      title: "CTO",
      img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b53a87c5267c8b67592da_01BA7813-9846-40EB-A182-3E8750571B3F.jpg",
      desc: "Background in full-stack dev. Building RippleBids tech from the ground up since 2025.",
    },
  ]

  const features = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#39FF14]" />,
      title: "Save Money",
      desc: "Fees of 1.5–3.5% vs. Amazon's 8–15% or eBay's 13%+.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#39FF14]" />,
      title: "Feel Secure",
      desc: "Escrow guarantees delivery; blockchain ensures authenticity.",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#39FF14]" />,
      title: "Be Empowered",
      desc: "Trade globally with just an XRPL wallet like Xaman.",
    },
  ]

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF14]/5 via-transparent to-[#39FF14]/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">Who We Are</span>
                <br />
                <span className="glow-text">at RippleBids</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                We're a dedicated board from Ohio, USA, united by a vision to make e-commerce fair, affordable, and
                secure for all. RippleBids is more than a platform—it's a promise to empower sellers, buyers, and
                investors.
              </p>
            </div>

            <div className="neon-divider my-12"></div>

            {/* Our Story Section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-[#39FF14] mr-4" />
                <h2
                  className="text-3xl md:text-4xl font-bold glow-text-subtle"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Our Story
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    In the heart of Ohio, we watched small businesses struggle under the weight of Amazon and eBay's
                    high fees. That sparked RippleBids—a decentralized marketplace where you keep more of your money.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <div className="feature-list">
                    {features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="flex-shrink-0 p-2 rounded-lg bg-[#39FF14]/10">{feature.icon}</div>
                        <div>
                          <h3 className="text-[#39FF14] glow-text-subtle font-semibold mb-1">{feature.title}</h3>
                          <p className="text-gray-300 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="neon-divider my-12"></div>

            {/* Board Members Section */}
            <div className="mb-12">
              <div className="flex items-center mb-12">
                <Users className="w-8 h-8 text-[#39FF14] mr-4" />
                <h2
                  className="text-3xl md:text-4xl font-bold glow-text-subtle"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Meet Our Board
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {boardMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 text-center group"
                  >
                    <div className="relative mb-4">
                      <img
                        src={member.img || "/placeholder.svg"}
                        alt={member.name}
                        className="profile-image mx-auto w-24 h-24 md:w-28 md:h-28"
                      />
                      <div className="absolute inset-0 rounded-full bg-[#39FF14]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3
                      className="text-[#39FF14] glow-text-subtle font-bold text-lg mb-1"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 italic mb-3 font-medium">{member.title}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="glass-card p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-bold glow-text-subtle mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Ready to Join Us?
                </h3>
                <p className="text-gray-300 mb-6">Be part of the future of e-commerce</p>
                <a href="/" className="neon-button inline-block">
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
