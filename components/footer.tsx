import Image from "next/image"
import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20enterprise.jpg-qutaCeZzXS6Yr1sZcWXTsDEUUZfuow.jpeg"
                alt="Chuski Bite Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <div className="text-xl font-bold text-green-400">Chuski Bite</div>
                <div className="text-sm text-gray-400">Edible Cups</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the sustainable revolution with 100% biodegradable and edible cups. Perfect for eco-conscious
              businesses worldwide.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Leaf className="h-4 w-4" />
              <span className="text-sm">100% Eco-Friendly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/bulk-pricing" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Bulk Pricing
                </Link>
              </li>
              <li>
                <Link href="/custom-branding" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Custom Branding
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Bulk Orders</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Custom Branding</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Private Labeling</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Wholesale Distribution</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Event Catering</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">info@chuskibite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">+977-1-234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 SPN ENTERPRISES PVT LTD. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
