'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram , HomeIcon, Mail } from 'lucide-react'

const links = [
  { title: 'My Website', url: 'https://cocoelif.de', description: 'Check out my presets and blog' },
  { title: 'My Interior Account', url: 'https://instagram.com/cocoelifhome', description: 'Explore my home interior' },
  { title: 'My Trendyol Closet', url: 'https://ty.gl/no3n86uigv', description: 'Find my trendyol favorites' },
  { title: 'My TikTok', url: 'https://www.tiktok.com/@cocoeliff', description: 'More Vids on TikTok' },
]

const socialLinks = [
  { icon: Instagram, url: 'https://instagram.com/cocoelif' },
  { icon: Mail, url: 'mailto:hello@cocoelif.de' },
  { icon: HomeIcon, url: 'https://cocoelif.de' },
]

export default function LinkInBioComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg relative">
              <Image
                src="/image/IMG_6958.jpg"
                alt="Profile Picture"
                fill
                style={{ objectFit: 'cover' }}
              />
              <AvatarFallback>EA</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-2xl font-bold text-gray-800">Elif Acar</h1>
            <p className="text-gray-600 text-center mt-2">Fashion & beauty addicted mom of two girls 🫶🏼</p>
          </div>
          
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="block"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card className="transition-shadow duration-300 hover:shadow-md">
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{link.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                    {hoveredIndex === index && (
                      <motion.div
                        className="w-full h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 mt-2"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* New Attribution Link */}
          <div className="mt-6 text-center">
            <a 
              href="https://instagram.com/heyaytac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
            Bio Links powered by heyaytac
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}