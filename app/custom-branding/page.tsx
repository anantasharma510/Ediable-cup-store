import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Palette, Zap, Users, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const brandingOptions = [
  {
    title: "Logo Printing",
    description: "High-quality logo printing directly on the cup surface",
    image: "/placeholder.svg?height=300&width=300&text=Logo+Print&bg=ffffff",
    features: ["Full-color printing", "Waterproof inks", "Food-safe materials", "Crisp detail reproduction"],
  },
  {
    title: "Custom Colors",
    description: "Match your brand colors with custom cup coloring",
    image: "/placeholder.svg?height=300&width=300&text=Custom+Colors&bg=ffffff",
    features: ["Pantone color matching", "Natural food coloring", "Consistent batches", "Vibrant results"],
  },
  {
    title: "Shape Customization",
    description: "Unique cup shapes tailored to your brand identity",
    image: "/placeholder.svg?height=300&width=300&text=Custom+Shape&bg=ffffff",
    features: ["Custom molds", "Unique designs", "Brand differentiation", "Functional optimization"],
  },
  {
    title: "Flavor Branding",
    description: "Custom flavors that represent your brand",
    image: "/placeholder.svg?height=300&width=300&text=Custom+Flavor&bg=ffffff",
    features: ["Signature flavors", "Natural ingredients", "Brand association", "Memorable experience"],
  },
]

const packages = [
  {
    name: "Basic Branding",
    price: "$0.15",
    minOrder: 1000,
    features: [
      "Single color logo print",
      "Standard cup shapes",
      "Basic flavor options",
      "Standard packaging",
      "2-week production time",
    ],
    popular: false,
  },
  {
    name: "Premium Branding",
    price: "$0.25",
    minOrder: 500,
    features: [
      "Full-color logo printing",
      "Custom color matching",
      "Premium flavor selection",
      "Branded packaging",
      "1-week production time",
      "Design consultation",
    ],
    popular: true,
  },
  {
    name: "Complete Custom",
    price: "$0.40",
    minOrder: 500,
    features: [
      "Complete customization",
      "Unique cup shapes",
      "Signature flavors",
      "Premium packaging",
      "Express production",
      "Dedicated design team",
      "Marketing materials",
      "Exclusive partnership",
    ],
    popular: false,
  },
]

const successStories = [
  {
    company: "Green Café Chain",
    industry: "Food & Beverage",
    result: "40% increase in customer engagement",
    description:
      "Custom vanilla-flavored cups with their signature green branding helped differentiate their eco-friendly message.",
    image: "/placeholder.svg?height=200&width=200&text=Cafe+Logo&bg=ffffff",
  },
  {
    company: "Tech Conference 2024",
    industry: "Events",
    result: "100% attendee satisfaction",
    description: "Custom-shaped cups with event branding became the most talked-about sustainable feature.",
    image: "/placeholder.svg?height=200&width=200&text=Tech+Event&bg=ffffff",
  },
  {
    company: "Luxury Hotel Group",
    industry: "Hospitality",
    result: "25% cost reduction",
    description:
      "Replaced traditional cups with branded edible alternatives, enhancing guest experience while cutting costs.",
    image: "/placeholder.svg?height=200&width=200&text=Hotel+Brand&bg=ffffff",
  },
]

export default function CustomBrandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">🎨 Custom Branding Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Make Your Brand <span className="text-green-600">Unforgettable</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform our edible cups into powerful brand ambassadors. Custom colors, logos, shapes, and flavors that
              tell your unique story.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <Palette className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Custom Colors</div>
                  <div className="text-sm text-gray-600">Match your brand</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Fast Turnaround</div>
                  <div className="text-sm text-gray-600">1-2 weeks delivery</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">Design consultation</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-sm text-gray-600">Food-safe materials</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Custom+Branded+Cups&bg=ffffff"
                alt="Custom branded edible cups showcase"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branding Options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Branding Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive branding solutions to create cups that perfectly represent your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingOptions.map((option, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader className="p-0">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-contain bg-gray-50 rounded-t-lg p-4"
                  />
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{option.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Custom Branding Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect branding package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-green-500 bg-gradient-to-b from-green-50 to-white" : "bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Starting from {pkg.minOrder.toLocaleString()} cups</div>
                    <div className="text-3xl font-bold text-green-600">
                      {pkg.price} <span className="text-sm text-gray-500">per cup</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-white border border-green-600 text-green-600 hover:bg-green-50"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours have transformed their brand with custom edible cups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.company}
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-contain bg-gray-50 p-2"
                  />
                  <CardTitle className="text-xl text-gray-900">{story.company}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {story.industry}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{story.result}</div>
                  </div>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we make custom branding simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Discuss your vision, requirements, and timeline with our design team
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Our experts create custom designs and provide samples for approval
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">
                High-quality manufacturing with rigorous quality control processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Fast, secure delivery with tracking and quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Create Your Custom Cups?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's bring your brand vision to life with custom edible cups that make a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
