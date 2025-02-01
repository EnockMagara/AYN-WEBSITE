"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-deepblue-dark text-silver-light">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-24">
        <motion.section className="text-center" initial="initial" animate="animate" variants={fadeIn}>
          <h1 className="text-6xl font-bold mb-6 text-silver">Ayn</h1>
          <p className="text-2xl mb-4">Your Real-Time Assistant for Safe and Independent Navigation</p>
          <p className="text-xl mb-10 text-silver-dark italic">"A device you can trust"</p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/hero-image.jpg"
              alt="Ayn in action"
              width={800}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </motion.div>
        </motion.section>

        <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeIn}>
          <h2 className="text-4xl font-semibold mb-10 text-silver text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Live Video Analysis", description: "Continuous real-time processing of your surroundings" },
              { title: "Obstacle Detection", description: "Timely alerts for nearby objects and potential hazards" },
              { title: "Voice Assistance", description: "Interactive voice commands for environment description" },
              { title: "Instant View Description", description: "One-touch button for quick surroundings overview" },
              { title: "Maps Integration", description: "Enhanced navigation with Google Maps Street View" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-deepblue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-silver-light">{feature.title}</h3>
                <p className="text-silver-dark text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="text-center" initial="initial" animate="animate" variants={fadeIn}>
          <h2 className="text-4xl font-semibold mb-6 text-silver">Experience Independence</h2>
          <p className="text-xl mb-10">Join us in revolutionizing mobility for the visually impaired</p>
          <motion.button
            className="bg-silver hover:bg-silver-dark text-deepblue-dark font-bold py-4 px-8 rounded-full text-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with Ayn
          </motion.button>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

