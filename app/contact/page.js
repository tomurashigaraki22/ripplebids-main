"use client"
import { useState } from "react"
import {
  Twitter,
  Send,
  Music2,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Users,
  Zap,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [toast, setToast] = useState("")

  const showToast = (message, type = "success") => {
    setToast({ message, type })
    setTimeout(() => setToast(""), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, subject, message } = formData

    if (!email || !message) {
      showToast("Please fill out all required fields.", "error")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.", "error")
      return
    }

    const emailSubject = encodeURIComponent(subject || "RippleBids Support Inquiry")
    const body = encodeURIComponent(`From: ${email}\n\n${message}`)
    window.location.href = `mailto:support@ripplebids.com?subject=${emailSubject}&body=${body}`

    showToast("Opening your email client...")
    setFormData({ email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      title: "Email Support",
      desc: "Get help with your account, transactions, or technical issues",
      icon: <Mail className="w-6 h-6" />,
      contact: "support@ripplebids.com",
      action: "mailto:support@ripplebids.com",
      color: "from-[#39FF14] to-green-400",
    },
    {
      title: "Community Chat",
      desc: "Join our Discord for real-time community support",
      icon: <MessageCircle className="w-6 h-6" />,
      contact: "Discord Server",
      action: "https://discord.gg/WcCnq3DrpB",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Social Updates",
      desc: "Follow us for the latest news and announcements",
      icon: <Twitter className="w-6 h-6" />,
      contact: "@ripplebids",
      action: "https://x.com/ripplebids",
      color: "from-blue-400 to-blue-600",
    },
  ]

  const teamInfo = [
    {
      title: "Response Time",
      desc: "24-48 hours",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Location",
      desc: "Ohio, USA",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Team Size",
      desc: "5 Board Members",
      icon: <Users className="w-6 h-6" />,
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="text-gradient">Contact</span>
                <br />
                <span className="glow-text">RippleBids</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                We're here to connect! Whether you have questions, feedback, or need support, our Ohio-based team is
                ready to respond. Let's build the future of decentralized commerce together.
              </p>
            </div>

            {/* Team Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamInfo.map((info, idx) => (
                <div key={idx} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#39FF14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#39FF14]">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold glow-text-subtle mb-2">{info.title}</h3>
                  <p className="text-gray-300">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Get In Touch
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mr-4 text-white`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold glow-text-subtle">{method.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{method.desc}</p>
                  <a
                    href={method.action}
                    target={method.action.startsWith("http") ? "_blank" : "_self"}
                    rel={method.action.startsWith("http") ? "noopener noreferrer" : ""}
                    className="inline-flex items-center text-[#39FF14] glow-text-subtle hover:glow-text transition-all duration-300"
                  >
                    {method.contact}
                    {method.action.startsWith("http") && <ExternalLink className="w-4 h-4 ml-1" />}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-[#39FF14]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold glow-text-subtle"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Send Us a Message
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
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

                  <div>
                    <label htmlFor="subject" className="flex items-center text-gray-300 mb-3 font-medium">
                      <MessageCircle className="w-5 h-5 mr-2 text-[#39FF14]" />
                      Subject
                      <span className="text-gray-500 ml-2 text-sm">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center text-gray-300 mb-3 font-medium">
                      <MessageCircle className="w-5 h-5 mr-2 text-[#39FF14]" />
                      Message
                      <span className="text-[#39FF14] glow-text-subtle ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 bg-black/50 border border-[#39FF14]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:ring-2 focus:ring-[#39FF14]/20 transition-all backdrop-blur-sm resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="neon-button w-full py-4 text-lg">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold glow-text-subtle mb-6" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Direct Contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="text-[#39FF14] font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:support@ripplebids.com"
                        className="text-gray-300 hover:text-[#39FF14] transition-colors"
                      >
                        support@ripplebids.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="text-[#39FF14] font-semibold mb-1">Response Time</h4>
                      <p className="text-gray-300">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="text-[#39FF14] font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">Ohio, USA</p>
                    </div>
                  </div>
                </div>

                <div className="neon-divider my-6"></div>

                <div>
                  <h4 className="text-[#39FF14] font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/ripplebids"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-[#39FF14]" />
                    </a>
                    <a
                      href="https://t.me/+MFu9bioLH2Q1NWYx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                    >
                      <Send className="w-5 h-5 text-[#39FF14]" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@ripplebids"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                    >
                      <Music2 className="w-5 h-5 text-[#39FF14]" />
                    </a>
                    <a
                      href="https://discord.gg/WcCnq3DrpB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-[#39FF14]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification */}
          {toast && (
            <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2">
              <div
                className={`glass-card p-4 border-[#39FF14]/50 ${
                  toast.type === "error" ? "bg-red-500/10 border-red-500/50" : "bg-[#39FF14]/10"
                }`}
              >
                <div className="flex items-center">
                  {toast.type === "error" ? (
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-[#39FF14] mr-2" />
                  )}
                  <p className={`font-medium ${toast.type === "error" ? "text-red-400" : "text-[#39FF14]"}`}>
                    {toast.message}
                  </p>
                </div>
              </div>
            </div>
          )}

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
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://t.me/+MFu9bioLH2Q1NWYx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                  aria-label="Telegram"
                >
                  <Send className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@ripplebids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                  aria-label="TikTok"
                >
                  <Music2 className="w-6 h-6 text-[#39FF14] group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://discord.gg/WcCnq3DrpB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center hover:bg-[#39FF14]/30 transition-colors group"
                  aria-label="Discord"
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

export default ContactPage
