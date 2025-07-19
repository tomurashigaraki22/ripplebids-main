import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Shield, AlertTriangle, FileText, Users } from "lucide-react"

export default function RulesPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">Rules & Policy</h1>
          <p className="text-xl text-gray-300">Terms of service, privacy policy, and community guidelines</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <h3 className="text-green-400 font-semibold">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the RippleBids platform and claiming XRPB tokens, you agree to be bound by these
                Terms of Service and all applicable laws and regulations.
              </p>

              <h3 className="text-green-400 font-semibold">2. Token Claim Eligibility</h3>
              <ul className="space-y-1 ml-4">
                <li>• You must be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>• You must provide accurate and complete information during the claim process</li>
                <li>• You must have legitimate access to the wallet addresses you provide</li>
                <li>• You agree to comply with all applicable laws and regulations</li>
              </ul>

              <h3 className="text-green-400 font-semibold">3. Token Distribution</h3>
              <p>
                XRPB tokens will be distributed after verification in Q2 2025. Distribution is subject to successful
                completion of the verification process and compliance with these terms.
              </p>

              <h3 className="text-green-400 font-semibold">4. Prohibited Activities</h3>
              <ul className="space-y-1 ml-4">
                <li>• Creating multiple accounts or false identities</li>
                <li>• Providing false or misleading information</li>
                <li>• Attempting to manipulate or exploit the claim process</li>
                <li>• Using the platform for illegal activities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <h3 className="text-green-400 font-semibold">Information We Collect</h3>
              <ul className="space-y-1 ml-4">
                <li>• Email addresses for communication and verification</li>
                <li>• Wallet addresses for token distribution</li>
                <li>• Transaction data related to token claims</li>
                <li>• Technical information such as IP addresses and browser data</li>
              </ul>

              <h3 className="text-green-400 font-semibold">How We Use Your Information</h3>
              <ul className="space-y-1 ml-4">
                <li>• To process and verify token claims</li>
                <li>• To communicate important updates and information</li>
                <li>• To prevent fraud and ensure platform security</li>
                <li>• To improve our services and user experience</li>
              </ul>

              <h3 className="text-green-400 font-semibold">Data Protection</h3>
              <p>
                We implement industry-standard security measures to protect your personal information. We do not sell,
                trade, or rent your personal information to third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <h3 className="text-green-400 font-semibold">Respectful Communication</h3>
              <p>
                Treat all community members with respect and courtesy. Harassment, discrimination, or abusive behavior
                will not be tolerated.
              </p>

              <h3 className="text-green-400 font-semibold">Accurate Information</h3>
              <p>
                Share only accurate and verified information. Spreading misinformation or false claims about the project
                or tokens is prohibited.
              </p>

              <h3 className="text-green-400 font-semibold">No Spam or Self-Promotion</h3>
              <p>
                Avoid excessive posting, spam, or unauthorized promotional content. Keep discussions relevant to
                RippleBids and the XRPB token ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Important Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="space-y-3">
                <p>
                  <strong className="text-yellow-400">Risk Warning:</strong> Cryptocurrency investments carry inherent
                  risks. The value of XRPB tokens may fluctuate significantly.
                </p>

                <p>
                  <strong className="text-yellow-400">No Investment Advice:</strong> Nothing on this platform
                  constitutes financial or investment advice. Always do your own research.
                </p>

                <p>
                  <strong className="text-yellow-400">Regulatory Compliance:</strong> Users are responsible for
                  complying with their local laws and regulations regarding cryptocurrency ownership and trading.
                </p>

                <p>
                  <strong className="text-yellow-400">Address Verification:</strong> RippleBids is not responsible for
                  tokens sent to incorrect addresses. Always double-check your wallet addresses.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-4">Questions?</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about these terms and policies, please contact our support team.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 2025</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
