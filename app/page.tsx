"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Award, Users, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import HeroSection from "./components/hero-sections"

const products = [
  {
    id: 1,
    name: "Classic Edible Coffee Cups",
    description: "Perfect for hot beverages, made from natural ingredients",
    price: 0.45,
    bulkPrice: 0.35,
    minOrder: 100,
    image: "/placeholder.svg?height=400&width=400&text=Classic+Coffee+Cup&bg=ffffff",
    category: "Coffee Cups",
    features: ["Heat resistant", "Vanilla flavor", "6oz capacity"],
  },
  {
    id: 2,
    name: "Chocolate Flavored Cups",
    description: "Delicious chocolate-flavored edible cups for special occasions",
    price: 0.55,
    bulkPrice: 0.42,
    minOrder: 100,
    image: "/placeholder.svg?height=400&width=400&text=Chocolate+Cup&bg=ffffff",
    category: "Flavored Cups",
    features: ["Chocolate flavor", "Premium quality", "8oz capacity"],
  },
  {
    id: 3,
    name: "Custom Branded Cups",
    description: "Personalized edible cups with your brand logo",
    price: 0.65,
    bulkPrice: 0.5,
    minOrder: 500,
    image: "/placeholder.svg?height=400&width=400&text=Custom+Branded+Cup&bg=ffffff",
    category: "Custom",
    features: ["Custom branding", "Multiple flavors", "Various sizes"],
  },
  {
    id: 4,
    name: "Tea Cups - Herbal Blend",
    description: "Specially designed for tea lovers with herbal essence",
    price: 0.5,
    bulkPrice: 0.38,
    minOrder: 100,
    image: "/placeholder.svg?height=400&width=400&text=Herbal+Tea+Cup&bg=ffffff",
    category: "Tea Cups",
    features: ["Herbal flavor", "Perfect for tea", "5oz capacity"],
  },
]

const features = [
  {
    icon: Leaf,
    title: "100% Biodegradable",
    description: "Made from natural ingredients that dissolve completely in nature",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "Eat the cup or let it naturally decompose - no waste left behind",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Food-grade materials ensuring safety and great taste",
  },
  {
    icon: Users,
    title: "Bulk Pricing",
    description: "Best prices for large orders without compromising quality",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

<HeroSection />
 {/* Features Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Edible Cups?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary eco-friendly solution that combines sustainability with functionality
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of edible cups designed for different needs and occasions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our edible cups. Get a custom quote for your bulk order today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              Get Bulk Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
