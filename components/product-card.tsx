"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: number
  name: string
  description: string
  price: number
  bulkPrice: number
  minOrder: number
  image: string
  category: string
  features: string[]
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
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
    <Card
      className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white animate-in slide-in-from-bottom duration-700`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-green-600 text-white text-xs">{product.category}</Badge>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
            <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 md:p-6 space-y-4">
        <div>
          <CardTitle className="text-base md:text-lg text-gray-900 group-hover:text-green-600 transition-colors">
            {product.name}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 text-sm">{product.description}</CardDescription>
        </div>

        <div className="space-y-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm text-gray-500">Regular Price:</span>
            <span className="text-xs md:text-sm line-through text-gray-400">NPR {product.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Bulk Price:</span>
            <span className="text-lg md:text-xl font-bold text-green-600">NPR {product.bulkPrice}</span>
          </div>
          <div className="text-xs text-gray-500">Minimum order: {product.minOrder} cups</div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 group-hover:shadow-lg text-sm md:text-base py-2 md:py-3"
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
