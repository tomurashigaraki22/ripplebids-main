// components/ClaimSteps.tsx
export default function ClaimSteps() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#39FF14] mb-12" style={{ textShadow: '0 0 10px #39FF14' }}>
        How to Swap XRP for XRPB and Claim Presale Tokens
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h3 className="text-2xl text-[#39FF14] mb-2">Step 1: Install MetaMask</h3>
          <p>
            Download MetaMask from{" "}
            <a href="https://metamask.io" className="text-[#39FF14] underline">metamask.io</a>. Create a wallet, store your recovery phrase, and copy your address (starting with "0x") for the claim.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#39FF14] mb-2">Step 2: Add XRPL Snap</h3>
          <p>
            Visit{" "}
            <a href="https://snap.xrpl.org" className="text-[#39FF14] underline">snap.xrpl.org</a> and install the Snap. This allows MetaMask to interact with XRPL EVM.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#39FF14] mb-2">Step 3: Bridge XRP</h3>
          <p>
            Go to{" "}
            <a href="https://app.squidrouter.com" className="text-[#39FF14] underline">app.squidrouter.com</a> and bridge XRP from XRPL to XRPL EVM Sidechain.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>From:</strong> XRPL (via Snap)</li>
            <li><strong>To:</strong> XRPL EVM Sidechain</li>
            <li><strong>Token:</strong> XRP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
