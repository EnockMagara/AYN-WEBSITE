"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="bg-deepblue text-silver-light py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-silver">
          Ayn
        </Link>
        <ul className="flex space-x-8">
          {["Features", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="text-lg hover:text-silver-dark transition duration-300">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

