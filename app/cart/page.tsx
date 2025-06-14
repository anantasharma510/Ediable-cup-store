"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto" />
            <h1 className="text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
            <p className="text-gray-600">Start shopping for eco-friendly edible cups!</p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">Review your bulk order before checkout</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart ({items.length} items)</h2>

              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`${index !== 0 ? "border-t pt-6" : ""} ${index !== items.length - 1 ? "pb-6" : ""}`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-lg object-contain bg-gray-50 p-2"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">Bulk</Badge>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Min: {item.minOrder} cups
                          </Badge>
                          <span className="text-sm text-gray-600">NPR {item.price} per cup</span>
                          <span className="text-sm text-green-600 font-medium">
                            Save NPR {((60 - item.price) * item.quantity).toFixed(0)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-700">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - item.minOrder)}
                              disabled={item.quantity <= item.minOrder}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>

                            <div className="bg-gray-50 px-4 py-2 rounded-md min-w-[80px] text-center">
                              <span className="font-medium">{item.quantity}</span>
                              <div className="text-xs text-gray-500">cups</div>
                            </div>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + item.minOrder)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">
                            NPR {(item.price * item.quantity).toFixed(0)}
                          </div>
                          <div className="text-sm text-gray-500">{item.quantity} cups total</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-xs text-gray-500">Estimated delivery: 5-7 business days</div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 text-sm"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">NPR {(item.price * item.quantity).toFixed(0)}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">NPR {total.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">NPR {(total * 0.1).toFixed(0)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">NPR {(total * 1.1).toFixed(0)}</span>
                </div>

                <div className="space-y-3 pt-4">
                  <Link href="/checkout">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-500 text-center">Secure checkout with Khalti payment gateway</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
