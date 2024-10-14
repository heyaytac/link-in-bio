'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, HomeIcon, Mail } from 'lucide-react'

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

const AnimatedBackground = () => (
  <div className="animated-background">
    <style jsx>{`
      .animated-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          #ff9a9e,
          #fad0c4,
          #ffecd2,
          #e0c3fc,
          #8ec5fc
        );
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>
  </div>
)

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function LinkInBioComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(getGreeting())
    const intervalId = setInterval(() => {
      setGreeting(getGreeting())
    }, 60000) // Update every minute

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <AnimatedBackground />
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden relative z-10">
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
            <motion.div
              key={greeting}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 mb-2 text-lg font-medium text-gray-600 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
            >
              {greeting}!
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-800">Elif Acar</h1>
            <p className="text-gray-600 text-center mt-2">
              Fashion & beauty addicted mom of two girls 🫶🏼
            </p>
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

          <div className="mt-6 text-center">
            <a 
              href="https://instagram.com/heyaytac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
            > Bio links powered by heyaytac
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}