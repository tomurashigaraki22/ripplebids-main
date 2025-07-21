"use client"
import React from "react";
import {
  Twitter,
  Send,
  Disc,
  Music2,
} from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email && message) {
      const subject = encodeURIComponent("RippleBids Support Inquiry");
      const body = encodeURIComponent(message);
      window.location.href = `mailto:support@ripplebids.com?subject=${subject}&body=${body}`;
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
      <section className="max-w-5xl mx-auto bg-black/60 border border-green-500/20 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-green-400 glow-text mb-4">Contact RippleBids</h2>
        <p className="text-gray-300 mb-6">
          We’re here to connect! Whether you have questions, feedback, or need support, our Ohio-based team is ready to respond via
          <a
            href="mailto:support@ripplebids.com"
            className="text-green-400 glow-text underline hover:text-green-300 ml-1"
          >
            support@ripplebids.com
          </a>. Drop us a message below!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            id="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-12 text-center text-gray-400">
        <div className="footer-content p-6">
          <p>© 2025 RippleBids. All rights reserved.</p>
          <div className="social-links mt-4 flex justify-center gap-6 text-green-400 glow-text text-[24px]">
            <a
              href="https://x.com/ripplebids"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="hover:text-green-300 transition" />
            </a>
            <a
              href="https://t.me/+MFu9bioLH2Q1NWYx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Send className="hover:text-green-300 transition" />
            </a>
            <a
              href="https://www.tiktok.com/@ripplebids"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Music2 className="hover:text-green-300 transition" />
            </a>
            <a
              href="https://discord.gg/WcCnq3DrpB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <Disc className="hover:text-green-300 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
