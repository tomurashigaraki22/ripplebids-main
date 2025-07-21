"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function ClaimPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    xrplWallet: "",
    erc20Wallet: "",
  })

  const totalSteps = 4

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    alert("Claim submitted successfully! You will receive your tokens after verification in Q2 2025.")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 glow-text mb-4">Welcome to XRPB Token Claim</h2>
              <p className="text-gray-300">
                Join the RippleBids ecosystem and claim your XRPB tokens. Follow our step-by-step process to ensure a
                smooth claiming experience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                <h3 className="font-semibold text-green-400 glow-text mb-2">Important Information:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Tokens will be distributed after verification in Q2 2025</li>
                  <li>• Ensure your ERC-20 wallet is compatible with XRPL EVM Sidechain</li>
                  <li>• Double-check your wallet addresses before submitting</li>
                  <li>• Keep your email accessible for updates</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 glow-text mb-4">Email Registration</h2>
              <p className="text-gray-300">
                Enter your email address to receive updates about your token claim and distribution.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-green-400 glow-text">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email for presale registration"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 glow-text mb-4">Wallet Addresses</h2>
              <p className="text-gray-300">
                Provide your XRPL and ERC-20 wallet addresses to receive your XRPB tokens.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="xrpl" className="text-green-400 glow-text">
                  XRPL Wallet (r-address)
                </Label>
                <Input
                  id="xrpl"
                  placeholder="XRPL wallet (r-address)"
                  value={formData.xrplWallet}
                  onChange={(e) => handleInputChange("xrplWallet", e.target.value)}
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="erc20" className="text-green-400 glow-text">
                  ERC-20 Wallet (0x address)
                </Label>
                <Input
                  id="erc20"
                  placeholder="ERC-20 wallet (0x address)"
                  value={formData.erc20Wallet}
                  onChange={(e) => handleInputChange("erc20Wallet", e.target.value)}
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-400 glow-text mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-400 glow-text mb-4">Review & Submit</h2>
              <p className="text-gray-300">Please review your information before submitting your claim.</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-green-500/20 bg-black/30">
                <h3 className="font-semibold text-green-400 glow-text mb-3">Your Information:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-400">Email:</span> <span className="text-white">{formData.email}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">XRPL Wallet:</span>{" "}
                    <span className="text-white font-mono text-xs">{formData.xrplWallet}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">ERC-20 Wallet:</span>{" "}
                    <span className="text-white font-mono text-xs">{formData.erc20Wallet}</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">Disclaimer:</h4>
                    <p className="text-sm text-gray-300">
                      Ensure your ERC-20 wallet is compatible with the XRPL EVM Sidechain and matches the MetaMask
                      wallet address used to receive XRPB tokens. Double-check your addresses before submitting.
                      RippleBids is not responsible for lost tokens due to incorrect addresses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 glow-text glow-text mb-4">Claim Your XRPB Tokens</h1>
          <p className="text-gray-300">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i + 1 <= currentStep ? "bg-green-500 text-black" : "bg-gray-700 text-gray-400"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-green-500/30 text-green-400 glow-text hover:bg-green-500/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-green-500 hover:bg-green-600 text-black font-bold"
                  disabled={
                    (currentStep === 2 && !formData.email) ||
                    (currentStep === 3 && (!formData.xrplWallet || !formData.erc20Wallet))
                  }
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-black font-bold"
                  disabled={!formData.email || !formData.xrplWallet || !formData.erc20Wallet}
                >
                  Submit Claim
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">Tokens will be distributed after verification in Q2 2025.</p>
        </div>
      </div>
    </div>
  )
}
