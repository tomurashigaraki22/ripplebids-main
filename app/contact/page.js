import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 glow-text mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with the RippleBids team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-green-400">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-green-400">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-green-400">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-green-400">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-green-400">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="bg-black/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-1">Email Support</h3>
                    <p className="text-gray-300 text-sm mb-2">For general inquiries and support</p>
                    <a href="mailto:support@ripplebids.com" className="text-green-400 hover:underline">
                      support@ripplebids.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-1">Community</h3>
                    <p className="text-gray-300 text-sm mb-2">Join our community discussions</p>
                    <div className="space-y-1">
                      <a href="#" className="block text-green-400 hover:underline text-sm">
                        Discord Server
                      </a>
                      <a href="#" className="block text-green-400 hover:underline text-sm">
                        Telegram Group
                      </a>
                      <a href="#" className="block text-green-400 hover:underline text-sm">
                        Twitter/X
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-1">Business Inquiries</h3>
                    <p className="text-gray-300 text-sm mb-2">For partnerships and business development</p>
                    <a href="mailto:business@ripplebids.com" className="text-green-400 hover:underline">
                      business@ripplebids.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400">FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">When will tokens be distributed?</h3>
                  <p className="text-gray-300 text-sm">
                    XRPB tokens will be distributed after verification in Q2 2025.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-400 mb-2">How do I claim my tokens?</h3>
                  <p className="text-gray-300 text-sm">
                    Visit our claim page and follow the step-by-step process to register your wallet addresses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Is there a minimum claim amount?</h3>
                  <p className="text-gray-300 text-sm">
                    No, there is no minimum claim amount. All eligible participants can claim their allocated tokens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
