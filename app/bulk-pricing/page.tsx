import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star, TrendingDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const pricingTiers = [
  {
    name: "Starter",
    minOrder: 100,
    maxOrder: 499,
    discount: "15%",
    pricePerCup: 55,
    originalPrice: 65,
    popular: false,
    features: [
      "Standard flavors available",
      "Basic packaging",
      "Email support",
      "5-7 day delivery",
      "Quality guarantee",
    ],
  },
  {
    name: "Business",
    minOrder: 500,
    maxOrder: 1999,
    discount: "25%",
    pricePerCup: 45,
    originalPrice: 65,
    popular: true,
    features: [
      "All flavors available",
      "Custom packaging options",
      "Priority support",
      "3-5 day delivery",
      "Quality guarantee",
      "Volume discount",
    ],
  },
  {
    name: "Enterprise",
    minOrder: 2000,
    maxOrder: 9999,
    discount: "35%",
    pricePerCup: 35,
    originalPrice: 65,
    popular: false,
    features: [
      "All flavors + custom options",
      "Premium packaging",
      "Dedicated account manager",
      "2-3 day delivery",
      "Quality guarantee",
      "Maximum savings",
      "Custom branding included",
    ],
  },
  {
    name: "Wholesale",
    minOrder: 10000,
    maxOrder: null,
    discount: "45%",
    pricePerCup: 28,
    originalPrice: 65,
    popular: false,
    features: [
      "Complete customization",
      "White-label options",
      "24/7 dedicated support",
      "Next-day delivery available",
      "Quality guarantee",
      "Lowest prices guaranteed",
      "Partnership opportunities",
      "Marketing support",
    ],
  },
]

const additionalSavings = [
  {
    title: "Seasonal Discounts",
    description: "Additional 5-10% off during promotional periods",
    icon: "🎉",
  },
  {
    title: "Loyalty Program",
    description: "Earn points with every purchase for future discounts",
    icon: "⭐",
  },
  {
    title: "Referral Bonus",
    description: "Get 15% off when you refer another business",
    icon: "🤝",
  },
  {
    title: "Annual Contracts",
    description: "Lock in lowest prices with yearly agreements",
    icon: "📋",
  },
]

export default function BulkPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">💰 Best Prices Guaranteed</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bulk Pricing That <span className="text-green-600">Saves You More</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The more you order, the more you save. Our transparent bulk pricing ensures you get the best value for your
            sustainable cup needs.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                tier.popular ? "ring-2 ring-green-500 bg-gradient-to-b from-green-50 to-white" : "bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">{tier.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    {tier.minOrder.toLocaleString()} - {tier.maxOrder ? tier.maxOrder.toLocaleString() : "∞"} cups
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl md:text-3xl font-bold text-green-600">NPR {tier.pricePerCup}</span>
                    <span className="text-sm text-gray-500 line-through">NPR {tier.originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    Save {tier.discount}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-white border border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">See Your Savings</h2>
            <p className="text-gray-600">Compare our bulk prices with traditional disposable cups</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-red-50 rounded-lg">
              <div className="text-xl md:text-2xl font-bold text-red-600 mb-2">NPR 20</div>
              <div className="text-sm text-gray-600 mb-2">Traditional Plastic Cup</div>
              <div className="text-xs text-red-600">+ Environmental Cost</div>
            </div>

            <div className="text-center p-4 md:p-6 bg-yellow-50 rounded-lg">
              <div className="text-xl md:text-2xl font-bold text-yellow-600 mb-2">NPR 45</div>
              <div className="text-sm text-gray-600 mb-2">Other Eco Alternatives</div>
              <div className="text-xs text-yellow-600">Limited functionality</div>
            </div>

            <div className="text-center p-4 md:p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-xl md:text-2xl font-bold text-green-600 mb-2">NPR 28</div>
              <div className="text-sm text-gray-600 mb-2">Our Edible Cups (Bulk)</div>
              <div className="text-xs text-green-600">✓ Eco-friendly ✓ Edible</div>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <div className="text-base md:text-lg font-semibold text-gray-900 mb-2">
              Save up to NPR 170,000 per 10,000 cups compared to eco alternatives!
            </div>
            <div className="text-sm text-gray-600">
              Plus eliminate waste disposal costs and boost your brand's sustainability image
            </div>
          </div>
        </div>

        {/* Additional Savings */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Additional Ways to Save</h2>
            <p className="text-gray-600">Maximize your savings with these extra benefits</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSavings.map((saving, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-4">{saving.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{saving.title}</h3>
                  <p className="text-sm text-gray-600">{saving.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
          <p className="text-green-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Get a personalized quote based on your specific needs and start your journey towards sustainable,
            cost-effective cup solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              Get Custom Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
