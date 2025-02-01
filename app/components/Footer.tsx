"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-deepblue text-silver-light py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">&copy; 2025 Ayn. All rights reserved.</p>
        <p className="mt-4 text-lg">Empowering independence through technology</p>
        <p className="mt-4 italic text-silver-dark text-lg">"A device you can trust"</p>
      </div>
    </motion.footer>
  )
}

