import React from "react";
import { Briefcase, PiggyBank, ShieldCheck, Users, Flame, Rocket } from "lucide-react"; // example icons

const TokenomicsScreen = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 glow-text mb-4">XRPB Tokenomics</h1>
        <p className="text-gray-300 mb-6">
          The XRPB token powers RippleBids, a decentralized marketplace on the XRP Ledger EVM Sidechain. With a fixed
          3B supply, XRPB enables transactions, governance, and rewards. Liquidity is on
          <a href="https://xrise33.com" target="_blank" className="text-green-400 glow-text underline ml-1">
            Xrise33.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Board Holdings Breakdown (22.97%)</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { role: "CEO", amount: "8.33%", tokens: "249,900,000 XRPB", note: "12-month lock, then 12-month vest." },
            { role: "CFO", amount: "5.5%", tokens: "165,000,000 XRPB", note: "12-month vesting." },
            { role: "COO", amount: "5.5%", tokens: "165,000,000 XRPB", note: "12-month vesting." },
            { role: "CHO", amount: "5.5%", tokens: "165,000,000 XRPB", note: "12-month vesting." },
          ].map(({ role, amount, tokens, note }) => (
            <div key={role} className="bg-gray-800 p-4 rounded-xl border border-green-500 shadow-md">
              <h3 className="text-lg font-bold text-green-300">{role}</h3>
              <p className="text-gray-300">{amount} ({tokens})</p>
              <p className="text-sm text-gray-400 mt-1">{note}</p>
            </div>
          ))}
          <div className="md:col-span-2 bg-gray-800 p-4 rounded-xl border border-yellow-500">
            <h3 className="font-semibold text-yellow-400">Note:</h3>
            <p className="text-gray-300">
              Board allocations are fully locked for vesting and don’t affect early liquidity or public access.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Token Allocation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { title: "Presale/DEX", percent: "20%", detail: "600,000,000 XRPB - Q2 2025 @ 5,000 XRPB/1 XRP" },
            { title: "Community", percent: "15%", detail: "450,000,000 XRPB - Airdrop & rewards" },
            { title: "Payroll", percent: "1.67%", detail: "50,010,000 XRPB - Compensation" },
            { title: "Treasury", percent: "1.67%", detail: "50,010,000 XRPB - Reserves" },
            { title: "Locked Liquidity", percent: "10.67%", detail: "320,010,000 XRPB - Stability" },
            { title: "Vested Liquidity", percent: "2.67%", detail: "80,010,000 XRPB - Gradual release" },
            { title: "Marketing/Dev", percent: "11.67%", detail: "350,010,000 XRPB - Campaigns & upgrades" },
            { title: "Burn", percent: "11.83%", detail: "354,990,000 XRPB - Future burns" },
            { title: "Ecosystem Grants", percent: "1.67%", detail: "50,010,000 XRPB - Community projects" },
          ].map(({ title, percent, detail }) => (
            <div key={title} className="bg-gray-800 p-4 rounded-xl border border-green-500">
              <h3 className="text-lg font-bold text-green-200">{title}</h3>
              <p className="text-gray-300">{percent}</p>
              <p className="text-sm text-gray-400 mt-1">{detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Token Utility</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong>Marketplace Savings:</strong> Pay with XRPB and save XRP.</li>
          <li><strong>Affiliate Rewards:</strong> Get paid from the Community Fund.</li>
          <li><strong>Loyalty Airdrops:</strong> For users and partners.</li>
          <li><strong>Fee Discounts:</strong> 1.5–3.5% fee reductions.</li>
          <li><strong>Membership Perks:</strong> Verified seller badge, analytics.</li>
          <li><strong>NFT Utility:</strong> Mint and trade on the XRPL EVM Sidechain.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Supply Control</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong>Fixed Supply:</strong> 3,000,000,000 XRPB total, no more minting.</li>
          <li><strong>Burn Model:</strong> Optional burns/buybacks may apply.</li>
          <li><strong>Public Wallets:</strong> Liquidity/Treasury/Community funds disclosed monthly.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Transparency</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong>Reports:</strong> CFO and team provide ongoing updates.</li>
          <li><strong>Monthly CFO Briefs:</strong> Allocation, liquidity, and circulating stats.</li>
          <li><strong>Ledger Access:</strong> XRPB trustline and DEX volume viewable.</li>
          <li><strong>Airdrop Logs:</strong> Affiliate and community rewards disclosed.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Join the Movement</h2>
        <p className="text-gray-300 mb-4">
          Claim XRPB tokens and be part of the decentralized commerce revolution.
          <br />
          Read our <a href="/whitepaper-html" className="text-green-400 glow-text underline">Whitepaper</a> or contact
          <a href="mailto:support@ripplebids.com" className="text-green-400 glow-text underline ml-1">support@ripplebids.com</a>
        </p>

        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition duration-300"
        >
          Claim Your Tokens
        </a>
      </div>
    </section>
  );
};

export default TokenomicsScreen;
