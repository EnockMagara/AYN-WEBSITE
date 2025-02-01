"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Mic, Bell, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <header className="container mx-auto px-4 py-8 fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-md">
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VisionAssist
          </motion.h1>
          <div className="space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-32">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 VisionAssist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-purple-400 transition-colors duration-300">
      {children}
    </Link>
  )
}

function HeroSection() {
  return (
    <section className="text-center mb-32 relative">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          See the World in a New Way
        </h2>
        <p className="text-2xl mb-12 text-gray-300">
          An AI-powered web app for real-time object detection and scene description.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-xl py-6 px-8">
          Get Started
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </motion.div>
      <div className="mt-16">
        <motion.img
          src="/placeholder.svg?height=400&width=600"
          alt="VisionAssist Demo"
          className="rounded-lg shadow-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="mb-32">
      <h3 className="text-4xl font-semibold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureCard
          icon={<Eye className="h-12 w-12 mb-4 text-blue-400" />}
          title="Object Detection"
          description="Real-time identification of objects in your environment using state-of-the-art AI algorithms."
        />
        <FeatureCard
          icon={<Mic className="h-12 w-12 mb-4 text-purple-400" />}
          title="Voice Commands"
          description="Control the app hands-free with natural language voice instructions for a seamless experience."
        />
        <FeatureCard
          icon={<Bell className="h-12 w-12 mb-4 text-green-400" />}
          title="Smart Alerts"
          description="Receive timely, context-aware notifications about potential obstacles or important changes in your surroundings."
        />
        <FeatureCard
          icon={<Zap className="h-12 w-12 mb-4 text-yellow-400" />}
          title="Fast Processing"
          description="Utilizes advanced AI and edge computing for quick, accurate results with minimal latency."
        />
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-blur-md border border-gray-700"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
      <h4 className="text-2xl font-semibold mb-4">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="text-center mb-32">
      <h3 className="text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        About VisionAssist
      </h3>
      <motion.p
        className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        VisionAssist is an innovative web application designed to enhance visual perception through cutting-edge AI
        technology. Our mission is to provide real-time assistance and improve the quality of life for individuals with
        visual impairments, empowering them to navigate the world with confidence and independence.
      </motion.p>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="text-center mb-32">
      <h3 className="text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Get in Touch
      </h3>
      <p className="mb-8 text-xl text-gray-300">Have questions or want to learn more? We'd love to hear from you!</p>
      <Button
        variant="outline"
        size="lg"
        className="text-xl py-6 px-8 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
      >
        Contact Us
      </Button>
    </section>
  )
}

