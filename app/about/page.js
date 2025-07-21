import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-5xl mx-auto bg-black/60 border border-green-500/20 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Who We Are at RippleBids</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We’re a dedicated board from Ohio, USA, united by a vision to make e-commerce fair, affordable, and secure for all. RippleBids is more than a platform—it’s a promise to empower sellers, buyers, and investors.
        </p>

        <div className="border-t border-green-400 my-6" />

        <h2 className="text-2xl font-semibold text-green-400 mb-4">Our Story</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          In the heart of Ohio, we watched small businesses struggle under the weight of Amazon and eBay’s high fees. That sparked RippleBids—a decentralized marketplace where you keep more of your money.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><span className="text-green-400 font-semibold">Save Money:</span> Fees of 1.5–3.5% vs. Amazon’s 8–15% or eBay’s 13%+.</li>
          <li><span className="text-green-400 font-semibold">Feel Secure:</span> Escrow guarantees delivery; blockchain ensures authenticity.</li>
          <li><span className="text-green-400 font-semibold">Be Empowered:</span> Trade globally with just an XRPL wallet like Xaman.</li>
        </ul>

        <div className="border-t border-green-400 my-6" />

        <h2 className="text-2xl font-semibold text-green-400 mb-4">Why Trust Us?</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Trust is everything. Every RippleBids transaction is etched on the XRP Ledger’s immutable blockchain, open for all to verify. Our funds are locked in a multi-signature wallet requiring all five board members’ approval.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><span className="text-green-400 font-semibold">Immutable Ledger:</span> 150+ XRPL validators secure every transaction.</li>
          <li><span className="text-green-400 font-semibold">Secure Funds:</span> 5/5 multi-sig wallet via Xaman and XRPL Toolkit.</li>
          <li><span className="text-green-400 font-semibold">Open Process:</span> Community-driven hiring and governance.</li>
        </ul>

        <div className="border-t border-green-400 my-6" />

        <h2 className="text-2xl font-semibold text-green-400 mb-4">Meet Our Board</h2>
        <p className="text-gray-300 mb-6">
          Our five board members are Ohio proud, driven by a shared passion for fairness and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              name: "Brendyn T.",
              title: "CFO",
              img: "https://cdn.prod.website-files.com/680cdf8611ae712d28ae981c/683b53aebcfc50b6b603122f_IMG_3081.webp",
              desc: "Expert in financial structure. Overlooks RippleBids’ finances professionally since 2025.",
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
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-black/70 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto mb-3 rounded-full w-24 h-24 object-cover ring-2 ring-green-400"
              />
              <h3 className="text-green-400 font-bold">{member.name}</h3>
              <p className="text-sm text-gray-400 italic mb-1">{member.title}</p>
              <p className="text-sm text-gray-300">{member.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-300 mt-6 text-center">
          We’re expanding! Email <a href="/contact-html" className="text-green-400 underline">Ripplebids@outlook.com</a> to join us.
        </p>

        <div className="border-t border-green-400 my-6" />

        <h2 className="text-2xl font-semibold text-green-400 mb-4">Our Vision</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          By 2030, RippleBids aims to lead the $8.1T e-commerce market with 1M+ users, AI analytics, NFT trading, and cross-chain support. Join our XRPB presale (1 XRP = 5,000 XRPB).
        </p>

        <div className="text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-600 transition"
          >
            Invest in XRPB
          </a>
        </div>
      </div>
    </section>
  );
}
