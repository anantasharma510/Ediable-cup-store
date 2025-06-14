"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Search, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"

const allProducts = [
  {
    id: 1,
    name: "Classic Edible Coffee Cups",
    description:
      "Perfect for hot beverages, made from natural ingredients. These cups can withstand temperatures up to 85°C and maintain their structure for 40+ minutes.",
    price: 60,
    bulkPrice: 45,
    minOrder: 100,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&crop=center",
    category: "Coffee Cups",
    features: ["Heat resistant up to 85°C", "Vanilla flavor", "6oz capacity", "40+ minutes durability"],
    inStock: true,
  },
  {
    id: 2,
    name: "Chocolate Flavored Cups",
    description: "Delicious chocolate-flavored edible cups perfect for dessert beverages and special occasions.",
    price: 70,
    bulkPrice: 55,
    minOrder: 100,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    category: "Flavored Cups",
    features: ["Rich chocolate flavor", "Premium cocoa", "8oz capacity", "Perfect for desserts"],
    inStock: true,
  },
  {
    id: 3,
    name: "Custom Branded Cups",
    description: "Personalized edible cups with your brand logo. Perfect for corporate events and brand promotion.",
    price: 85,
    bulkPrice: 65,
    minOrder: 500,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center",
    category: "Custom",
    features: ["Custom logo printing", "Multiple flavor options", "Various sizes available", "Brand promotion"],
    inStock: true,
  },
  {
    id: 4,
    name: "Tea Cups - Herbal Blend",
    description: "Specially designed for tea lovers with natural herbal essence that complements your favorite teas.",
    price: 65,
    bulkPrice: 50,
    minOrder: 100,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center",
    category: "Tea Cups",
    features: ["Natural herbal essence", "Perfect for tea", "5oz capacity", "Aromatic experience"],
    inStock: true,
  },
  {
    id: 5,
    name: "Mini Espresso Cups",
    description: "Small edible cups perfect for espresso shots and concentrated beverages.",
    price: 45,
    bulkPrice: 35,
    minOrder: 200,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop&crop=center",
    category: "Coffee Cups",
    features: ["Compact 2oz size", "Strong structure", "Espresso optimized", "Quick dissolve"],
    inStock: true,
  },
  {
    id: 6,
    name: "Large Event Cups",
    description: "Extra large cups perfect for events, festivals, and large gatherings.",
    price: 95,
    bulkPrice: 75,
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    category: "Event Cups",
    features: ["12oz capacity", "Extended durability", "Event optimized", "Crowd favorite"],
    inStock: true,
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { addItem } = useCart()

  const categories = ["all", ...Array.from(new Set(allProducts.map((p) => p.category)))]

  const filteredProducts = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.bulkPrice - b.bulkPrice
        case "price-high":
          return b.bulkPrice - a.bulkPrice
        case "min-order":
          return a.minOrder - b.minOrder
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.bulkPrice,
      minOrder: product.minOrder,
      image: product.image,
      quantity: product.minOrder,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of eco-friendly edible cups designed for every occasion
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="min-order">Min Order</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center text-sm text-gray-600">
              <Filter className="h-4 w-4 mr-2" />
              {filteredProducts.length} products found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white animate-in slide-in-from-bottom duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">{product.category}</Badge>
                  {product.inStock && <Badge className="absolute top-4 right-4 bg-blue-600 text-white">In Stock</Badge>}
                </div>
              </CardHeader>

              <CardContent className="p-4 md:p-6 space-y-4">
                <div>
                  <CardTitle className="text-lg md:text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-3 md:p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Regular Price:</span>
                    <span className="text-sm line-through text-gray-400">NPR {product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base md:text-lg font-semibold text-gray-800">Bulk Price:</span>
                    <span className="text-xl md:text-2xl font-bold text-green-600">NPR {product.bulkPrice}</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">Minimum order: {product.minOrder} cups</div>
                </div>

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 group-hover:shadow-lg py-4 md:py-6 text-base md:text-lg"
                >
                  <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Add {product.minOrder} to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
