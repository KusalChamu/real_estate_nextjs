"use client"

// This is a component (not a route)
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/landing-splash.jpg"
        alt="Rentiful Rental platform hero section"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-white">
            Start your journey to finding the perfect place to call home
          </h1>
          <p className="text-xl text-white mb-8">
            Explore wide range of rental properties tailored to fit your lifestyle and needs
          </p>

          <div className="flex justify-center">
            <Input 
                type="text"
                value="search query"
                onChange={() => {}}
                placeholder="Search by city, neighborhood or address"
                className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            ></Input>
            <Button
                onClick={()=>{}}
                className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-blue-900 h-12"
            >Search</Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
