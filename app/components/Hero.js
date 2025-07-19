// components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-[#39FF14] mb-6" style={{ textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14' }}>
        Claim Your XRPB Tokens!
      </h1>
      <div className="bg-black border border-[#39FF14] rounded-xl max-w-3xl mx-auto p-8 shadow-lg">
        <h2 className="text-3xl text-[#39FF14] mb-4 font-bold">
          XRPB Token Launch: Dual-Chain Powerhouse
        </h2>
        <p className="text-white text-lg mb-4">
          The XRPB token powers the RippleBids decentralized marketplace across two leading blockchains, offering unmatched versatility for transactions and premium features.
        </p>
        <ul className="text-left text-sm sm:text-base text-white list-disc list-inside space-y-2">
          <li>
            <strong>XRPB on XRPL EVM Sidechain:</strong> Currency for marketplace transactions. Swap via{" "}
            <a href="https://xrise33.com" className="text-[#39FF14] underline">Xrise33.com</a>
          </li>
          <li>
            <strong>XRPB-SOL on Solana:</strong> For premium features and in-app credits.
          </li>
        </ul>
      </div>
    </section>
  );
}
