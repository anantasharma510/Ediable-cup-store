import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Award, Globe, Heart, Recycle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every product we create is designed with the environment in mind, using only natural, biodegradable ingredients.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "We work closely with our clients to understand their needs and provide customized solutions.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Our products meet the highest food safety standards and undergo rigorous quality testing.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're committed to reducing plastic waste worldwide, one edible cup at a time.",
  },
]

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300&text=CEO&bg=ffffff",
    description: "Environmental engineer with 15+ years in sustainable product development.",
  },
  {
    name: "Priya Patel",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300&text=COO&bg=ffffff",
    description: "Operations expert specializing in food-grade manufacturing and quality control.",
  },
  {
    name: "Amit Kumar",
    role: "R&D Director",
    image: "/placeholder.svg?height=300&width=300&text=R%26D&bg=ffffff",
    description: "Food scientist focused on developing innovative edible packaging solutions.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">🌱 Our Story</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Revolutionizing the Way We Think About <span className="text-green-600">Disposable Cups</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2020, SPN Enterprises started with a simple mission: to create sustainable alternatives to
                  plastic cups that don't compromise on functionality or taste.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edibale.jpg-OhSKPt61npa5exlaYVspB0jLjIBrmG.jpeg"
                alt="Our sustainable edible cups"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">1M+ Cups</div>
                    <div className="text-sm text-gray-600">Plastic cups replaced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            To eliminate single-use plastic cups from the food service industry by providing innovative, edible
            alternatives that are both environmentally friendly and commercially viable. We believe that sustainability
            shouldn't come at the cost of convenience or quality.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">Driven by our love for the planet and commitment to change</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Maintaining the highest standards in every product we create</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">Creating positive change for businesses and the environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind our sustainable revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-green-100">Cups Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-green-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-green-100">Biodegradable</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
