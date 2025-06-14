import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Leaf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div>

{/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-amber-50/50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">🌱 Eco-Friendly Revolution</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Edible Cups at the <span className="text-green-600">Lowest Bulk Prices</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join the sustainable revolution with our 100% biodegradable and edible cups. Perfect for cafes,
                  restaurants, events, and eco-conscious brands.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
                >
                  Get Quote
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Biodegradable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Waste</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <Image
                  src="./cupfee.png"
                  alt="Edible Cup with Coffee"
                  width={600}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce">
                  <Leaf className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              
    </div>
  )
}

export default HeroSection