'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, Github, Linkedin, Images } from 'lucide-react' 
import Image from 'next/image';
import profilePic from '/Users/aytacacar/link-in-bio/app/images/IMG_6958.jpg';

const links = [
  { title: 'My Website', url: 'https://cocoelif.de', description: 'Check out my presets and blog' },
  { title: 'Latest Project', url: 'https://project.example.com', description: 'Explore my newest creation' },
  { title: 'Book Recommendation', url: 'https://amazon.com', description: 'My favorite read this month' },
  { title: 'Free Resources', url: 'https://resources.example.com', description: 'Helpful tools and guides' },
]

const socialLinks = [
  { icon: Instagram, url: 'https://instagram.com/cocoelif' },
  { icon: Twitter, url: 'https://twitter.com/yourusername' },
  { icon: Youtube, url: 'https://youtube.com/yourchannel' },
  { icon: Github, url: 'https://github.com/yourusername' },
  { icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
]

export default function  LinkInBioComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <Image src={profilePic} alt="Profile Picture" width={96} height={96}/>
              <AvatarFallback>EA</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-2xl font-bold text-gray-800">Elif Acar</h1>
            <p className="text-gray-600 text-center mt-2">Passionate creator, tech enthusiast, and lifelong learner. Sharing my journey and insights with you!</p>
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
        </CardContent>
      </Card>
    </div>
  )
}