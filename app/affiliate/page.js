"use client"
import { useState } from "react"
import {
  Mail,
  Instagram,
  Youtube,
  Store,
  Send,
  ShieldCheck,
  Trophy,
  Coins,
  Users,
  Star,
  Zap,
  TrendingUp,
  Gift,
  Target,
  X,
} from "lucide-react"

export default function AffiliateScreen() {
  const [formVisible, setFormVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    instagram: "",
    youtube: "",
    ecommerce: "",
  })
  const [toast, setToast] = useState("")

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(""), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, description } = formData

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.")
      return
    }

    if (!description.trim() || description.trim().length < 10) {
      showToast("Description must be at least 10 characters.")
      return
    }

    try {
      const res = await fetch("https://ripplebids-presale.onrender.com/api/affiliate-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Submission failed")

      showToast("Application submitted successfully!")
      setFormData({
        email: "",
        description: "",
        instagram: "",
        youtube: "",
        ecommerce: "",
      })
      setFormVisible(false)
    } catch (err) {
      showToast(`Failed to submit: ${err.message}`)
    }
  }

  const affiliateFeatures = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "High Commissions",
      desc: "Earn 15% of fees. For a $100 sale, that's $0.375!",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Monthly Leaderboard",
      desc: "Share a 0.3% pool. $250,000 in fees = $750 pool.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Seamless Payouts",
      desc: "Paid in XRPB to your Xaman Wallet.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Why RippleBids?",
      desc: "Only 1.5–3.5% fees vs Amazon/eBay's 8–15%+.",
    },
  ]

  const referralFeatures = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Win-Win Rewards",
      desc: "Both get 5 XRPB.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Top Referrer Bonus",
      desc: "Share a 0.2% pool. $250,000 = $500 pool.",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Effortless Sharing",
      desc: "Use your unique referral link.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Payouts",
      desc: "Direct to your wallet from platform revenue.",
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

      <div className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card p-8 md:p-12 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">Create a Ripple</span>
                <br />
                <span className="glow-text">in the World</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Be that ripple by becoming an affiliate and join the future of decentralized e-commerce.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">15%</h3>
                <p className="text-gray-300">Commission Rate</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">$750</h3>
                <p className="text-gray-300">Monthly Pool</p>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold glow-text-subtle mb-2">5</h3>
                <p className="text-gray-300">XRPB Referral Bonus</p>
              </div>
            </div>
          </div>

          {/* Affiliate Program Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Join Our Affiliate Program
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-4xl">
              Promote our XRP-powered marketplace and earn a{" "}
              <span className="text-[#39FF14] glow-text-subtle font-bold">15% commission</span> on transaction fees.
              Perfect for influencers, bloggers, and crypto enthusiasts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {affiliateFeatures.map((feature, idx) => (
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

          {/* Referral Program Section */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Spread the Word with Referrals
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-4xl">
              Invite friends to our presale and earn{" "}
              <span className="text-[#39FF14] glow-text-subtle font-bold">XRPB</span> when they join.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {referralFeatures.map((feature, idx) => (
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
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#39FF14] mr-3" />
                <h3
                  className="text-2xl md:text-3xl font-bold glow-text-subtle"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Ready to Get Started?
                </h3>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of affiliates already earning with RippleBids. Start your journey today!
              </p>
              <button onClick={() => setFormVisible(!formVisible)} className="neon-button text-lg px-8 py-4">
                {formVisible ? "Hide Form" : "Become an Affiliate"}
              </button>
            </div>
          </div>

          {/* Application Form */}
          {formVisible && (
            <div className="glass-card p-8 md:p-10 mb-8 relative">
              <button
                onClick={() => setFormVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <h3
                className="text-2xl md:text-3xl font-bold glow-text-subtle mb-8"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Affiliate Application
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="flex items-center text-gray-300 mb-3 font-medium">
                      <Mail className="w-5 h-5 mr-2 text-[#39FF14]" />
                      Email Address
                      <span className="text-[#39FF14] glow-text-subtle ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-black/50 border border-[#39FF14]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Description Field */}
                  <div className="md:col-span-2">
                    <label htmlFor="description" className="flex items-center text-gray-300 mb-3 font-medium">
                      <Target className="w-5 h-5 mr-2 text-[#39FF14]" />
                      Why RippleBids?
                      <span className="text-[#39FF14] glow-text-subtle ml-1">*</span>
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full p-4 bg-black/50 border border-[#39FF14]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm resize-none"
                      placeholder="Tell us why you choose RippleBids and how you plan to promote our platform..."
                    />
                  </div>

                  {/* Social Media Fields */}
                  <div>
                    <label htmlFor="instagram" className="flex items-center text-gray-300 mb-3 font-medium">
                      <Instagram className="w-5 h-5 mr-2 text-[#39FF14]" />
                      Instagram
                      <span className="text-gray-500 ml-2 text-sm">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm"
                      placeholder="@username"
                    />
                  </div>

                  <div>
                    <label htmlFor="youtube" className="flex items-center text-gray-300 mb-3 font-medium">
                      <Youtube className="w-5 h-5 mr-2 text-[#39FF14]" />
                      YouTube
                      <span className="text-gray-500 ml-2 text-sm">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="youtube"
                      value={formData.youtube}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm"
                      placeholder="Your YouTube channel name"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="ecommerce" className="flex items-center text-gray-300 mb-3 font-medium">
                      <Store className="w-5 h-5 mr-2 text-[#39FF14]" />
                      eCommerce Website
                      <span className="text-gray-500 ml-2 text-sm">(optional)</span>
                    </label>
                    <input
                      type="url"
                      id="ecommerce"
                      value={formData.ecommerce}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm"
                      placeholder="https://your-website.com"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="neon-button w-full md:w-auto px-12 py-4 text-lg">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Toast Notification */}
          {toast && (
            <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2">
              <div className="glass-card p-4 border-[#39FF14]/50 bg-[#39FF14]/10">
                <p className="text-[#39FF14] font-medium">{toast}</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="glass-card p-6 mt-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">© 2025 RippleBids. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://x.com/ripplebids"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                >
                  <span className="text-[#39FF14] font-bold">𝕏</span>
                </a>
                <a
                  href="https://t.me/+MFu9bioLH2Q1NWYx"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                >
                  <Send className="w-5 h-5 text-[#39FF14]" />
                </a>
                <a
                  href="https://www.tiktok.com/@ripplebids"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                >
                  <span className="text-[#39FF14] font-bold">TT</span>
                </a>
                <a
                  href="https://discord.gg/WcCnq3DrpB"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                >
                  <span className="text-[#39FF14] font-bold">D</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
