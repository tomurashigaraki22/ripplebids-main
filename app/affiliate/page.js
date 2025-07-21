"use client"
import React, { useState } from "react";
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
} from "lucide-react";

export default function AffiliateScreen() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    instagram: "",
    youtube: "",
    ecommerce: "",
  });

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, description } = formData;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.");
      return;
    }
    if (!description.trim() || description.trim().length < 10) {
      showToast("Description must be at least 10 characters.");
      return;
    }

    try {
      const res = await fetch(
        "https://ripplebids-presale.onrender.com/api/affiliate-signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      showToast("Application submitted successfully!");
      setFormData({
        email: "",
        description: "",
        instagram: "",
        youtube: "",
        ecommerce: "",
      });
      setFormVisible(false);
    } catch (err) {
      showToast(`Failed to submit: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            Create a Ripple in the World
          </h1>
          <p className="text-gray-300 mb-8">
            Be that ripple by becoming an affiliate.
          </p>

          <div className="bg-white/5 p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-green-300 mb-2">
              <Users className="inline mr-2" /> Join Our Affiliate Program
            </h2>
            <p className="text-gray-300 mb-4">
              Promote our XRP-powered marketplace and earn a <strong>15% commission</strong> on transaction fees. Perfect for influencers, bloggers, and crypto enthusiasts.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <Coins className="inline mr-2" /> <strong>High Commissions:</strong> Earn 15% of fees. For a $100 sale, that’s $0.375!
              </li>
              <li>
                <Trophy className="inline mr-2" /> <strong>Monthly Leaderboard:</strong> Share a 0.3% pool. $250,000 in fees = $750 pool.
              </li>
              <li>
                <ShieldCheck className="inline mr-2" /> <strong>Seamless Payouts:</strong> Paid in XRPB to your Xaman Wallet.
              </li>
              <li>
                <Star className="inline mr-2" /> <strong>Why RippleBids?</strong> Only 1.5–3.5% fees vs Amazon/eBay’s 8–15%+.
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-green-300 mb-2">
              <Send className="inline mr-2" /> Spread the Word with Referrals
            </h2>
            <p className="text-gray-300 mb-4">
              Invite friends to our presale and earn <strong>XRPB</strong> when they join.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <Coins className="inline mr-2" /> <strong>Win-Win Rewards:</strong> Both get 5 XRPB.
              </li>
              <li>
                <Trophy className="inline mr-2" /> <strong>Top Referrer Bonus:</strong> Share a 0.2% pool. $250,000 = $500 pool.
              </li>
              <li>
                <Send className="inline mr-2" /> <strong>Effortless Sharing:</strong> Use your unique referral link.
              </li>
              <li>
                <ShieldCheck className="inline mr-2" /> <strong>Fast Payouts:</strong> Direct to your wallet from platform revenue.
              </li>
            </ul>
          </div>

          <button
            onClick={() => setFormVisible(!formVisible)}
            className="bg-green-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-green-400 transition"
          >
            Become an Affiliate
          </button>

          {formVisible && (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 p-6 rounded-xl mt-6 space-y-4"
            >
              <div>
                <label htmlFor="email" className="block mb-1">
                  <Mail className="inline mr-1" /> Email <span className="text-green-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-black border border-green-400 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-1">
                  Why RippleBids? <span className="text-green-400">*</span>
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-black border border-green-400 rounded-lg"
                  placeholder="Tell us why you choose RippleBids"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block mb-1">
                  <Instagram className="inline mr-1" /> Instagram (optional)
                </label>
                <input
                  type="text"
                  id="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-2 bg-black border border-gray-700 rounded-lg"
                  placeholder="@username"
                />
              </div>
              <div>
                <label htmlFor="youtube" className="block mb-1">
                  <Youtube className="inline mr-1" /> YouTube (optional)
                </label>
                <input
                  type="text"
                  id="youtube"
                  value={formData.youtube}
                  onChange={handleChange}
                  className="w-full p-2 bg-black border border-gray-700 rounded-lg"
                  placeholder="Your YouTube name"
                />
              </div>
              <div>
                <label htmlFor="ecommerce" className="block mb-1">
                  <Store className="inline mr-1" /> eCommerce URL (optional)
                </label>
                <input
                  type="url"
                  id="ecommerce"
                  value={formData.ecommerce}
                  onChange={handleChange}
                  className="w-full p-2 bg-black border border-gray-700 rounded-lg"
                  placeholder="https://example.com"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-black font-bold px-6 py-2 rounded-xl hover:bg-green-400"
              >
                Submit Application
              </button>
            </form>
          )}

          {toast && (
            <div className="mt-6 bg-green-600 text-black px-4 py-2 rounded-lg">
              {toast}
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 RippleBids. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://x.com/ripplebids" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://t.me/+MFu9bioLH2Q1NWYx" target="_blank" rel="noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://www.tiktok.com/@ripplebids" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://discord.gg/WcCnq3DrpB" target="_blank" rel="noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}