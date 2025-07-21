import React from 'react';
import { Twitter, Send, Music, Eraser } from 'lucide-react';

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
      <section className="max-w-5xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl p-8 shadow-2xl border border-green-400">
        <h1 className="text-4xl font-bold text-green-400 mb-4">Rules & Policy</h1>
        <p className="text-gray-300 mb-8">
          Welcome to RippleBids’ decentralized marketplace on the XRP Ledger. Our rules and policies ensure a secure, fair, and transparent experience for all users and XRPB presale participants. Dive into our futuristic framework below!
        </p>

        {policySections.map(({ title, content }, idx) => (
          <div key={idx} className="mb-10 bg-white/10 p-6 rounded-2xl border border-green-400">
            <h2 className="text-2xl font-semibold text-green-300 mb-3">{title}</h2>
            <p className="text-gray-300 mb-3">{content.intro}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {content.items.map((item, index) => (
                <li key={index}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-gray-300 mt-6">
          Policy updates will be posted here and announced on{' '}
          <a href="https://x.com/rippleBids" className="text-green-400 underline">X</a> and other channels. Questions? Reach out at{' '}
          <a href="/contact-html" className="text-green-400 underline">support@ripplebids.com</a>.
        </p>

        <div className="mt-8 text-center">
          <a href="/" className="inline-block bg-green-500 text-black font-semibold py-2 px-6 rounded-full shadow hover:bg-green-600 transition">Join the Presale</a>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-400">
        <p className="mb-3">© 2025 RippleBids. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-green-400 text-xl">
          <a href="https://x.com/ripplebids" target="_blank" rel="noopener noreferrer"><Twitter className="hover:text-green-300" /></a>
          <a href="https://t.me/+MFu9bioLH2Q1NWYx" target="_blank" rel="noopener noreferrer"><Send className="hover:text-green-300" /></a>
          <a href="https://www.tiktok.com/@ripplebids" target="_blank" rel="noopener noreferrer"><Music className="hover:text-green-300" /></a>
          <a href="https://discord.gg/WcCnq3DrpB" target="_blank" rel="noopener noreferrer"><Eraser className="hover:text-green-300" /></a>
        </div>
      </footer>
    </div>
  );
};

const policySections = [
  {
    title: 'Platform Rules',
    content: {
      intro: 'RippleBids is a community-driven marketplace. Users must adhere to these rules to maintain integrity:',
      items: [
        { label: 'Eligibility:', text: 'Users must be 18+ and comply with local laws. KYC may be required for high-value transactions or presale tiers ($1,001+).' },
        { label: 'Prohibited Activities:', text: 'No illegal activities, including fraud, money laundering, or trading prohibited items. Violations result in account suspension.' },
        { label: 'Content Guidelines:', text: 'Listings must be accurate and free of offensive material. RippleBids may remove non-compliant listings.' },
        { label: 'Security Responsibility:', text: 'Users must secure their XRPL wallets. RippleBids is not liable for losses due to compromised wallets or user error.' },
        { label: 'Fees:', text: 'Platform fees range from 1.5–3.5%, payable in XRPB or XRP.' }
      ]
    }
  },
  {
    title: 'XRPB Presale Terms',
    content: {
      intro: 'The XRPB token presale (500M of 3B total supply) is governed by these terms to protect RippleBids and investors:',
      items: [
        { label: 'Purchase Process:', text: 'Buy XRPB at 5,000 XRPB per 1 XRP via XRPL wallets. Contributions are recorded on the XRP Ledger.' },
        { label: 'Non-Refundable:', text: 'Presale purchases are final, except as required by applicable law.' },
        { label: 'Distribution:', text: 'Tokens will be distributed in Q3 2025 post audit and contract deployment.' },
        { label: 'Risk Disclosure:', text: 'Cryptocurrencies are volatile. Investors assume all risks.' },
        { label: 'AML/KYC Compliance:', text: 'RippleBids complies with AML and KYC regulations.' },
        { label: 'Fund Security:', text: 'Funds are held in a 5/5 multi-signature wallet.' }
      ]
    }
  },
  {
    title: 'Privacy Policy',
    content: {
      intro: 'RippleBids values your privacy and complies with GDPR, CCPA, and other data protection laws:',
      items: [
        { label: 'Data Collection:', text: 'We collect XRPL wallet addresses, optional emails, and public transaction data.' },
        { label: 'Data Use:', text: 'Used for processing, support, improvement, and compliance.' },
        { label: 'Data Sharing:', text: 'No third-party sharing except as required by law.' },
        { label: 'Data Security:', text: 'Protected with AES-256 encryption and secure servers.' },
        { label: 'User Rights:', text: 'Users may request data access, correction, or deletion.' },
        { label: 'Cookies:', text: 'Only essential cookies are used without tracking.' }
      ]
    }
  },
  {
    title: 'Legal Protections',
    content: {
      intro: 'RippleBids is incorporated in Ohio, USA, and operates under these legal frameworks:',
      items: [
        { label: 'Intellectual Property:', text: 'RippleBids’ logo, code, and content are copyrighted.' },
        { label: 'Liability Limitation:', text: 'RippleBids is not liable for indirect damages or user error.' },
        { label: 'Termination:', text: 'Accounts may be terminated for policy violations.' },
        { label: 'Governing Law:', text: 'Ohio law governs all activities. Arbitration in Chicago, IL.' },
        { label: 'Indemnification:', text: 'Users agree to indemnify RippleBids for platform-related actions.' }
      ]
    }
  },
  {
    title: 'Dispute Resolution',
    content: {
      intro: 'We prioritize fair resolutions for all disputes:',
      items: [
        { label: 'XRPL Bids:', text: 'Escrow ensures secure transactions for buyers and sellers.' },
        { label: 'Mediation:', text: 'Disputes resolved via decentralized governance post-2026.' },
        { label: 'Arbitration:', text: 'Legal disputes resolved via arbitration in Chicago, IL.' },
        { label: 'Contact:', text: 'For issues, email support@ripplebids.com.' }
      ]
    }
  }
];

export default PolicyPage;
