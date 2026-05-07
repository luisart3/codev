import CodevLogo from '../assets/Codev.svg';
import { Github, Twitter, DiscordAlt, Linkedin, Instagram } from '@boxicons/react';
import { motion } from 'motion/react';

const socials = [
  { icon: <Twitter />, href: '#', label: 'Twitter' },
  { icon: <Github />, href: '#', label: 'GitHub' },
  { icon: <DiscordAlt />, href: '#', label: 'Discord' },
  { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram />, href: '#', label: 'Instagram' },
]
export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          <div className="flex items-center gap-2">
            <img src={CodevLogo} alt="Codev" className="w-6 h-6" />
            <span className="text-[#2A53F3] font-medium text-[16px] tracking-tight">Co<span className="text-[#0a0a0a]">dev</span></span>
          </div>

          <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{
            opacity: 1, y: 0
          }}
          transition={{delay: 0.3}}
          className="flex items-center gap-2">
            {
              socials.map((s, i) => {
                return (
                  <motion.a 
                  whileHover={{scale: 1.1}}
                  key={i} href={s.href} aria-label={s.label} className="w-9 h-9 flex items-center justify-center rounded-[10px] border border-black/[0.07] hover:border-black/20 hover:bg-black/[0.03] transition-all">
                    {s.icon}
                  </motion.a>
                )
              })
            }
          </motion.div>

          <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{
            opacity: 1, y: 0
          }}
          transition={{delay: 0.4}}
          className="flex md:flex-row flex-col md:items-center items-start gap-6 text-[12px] text-[#999]">
            <a href="#features" className="hover:text-[#0a0a0a] transition-colors">Features</a>
            <a href="#showcase" className="hover:text-[#0a0a0a] transition-colors">Showcase</a>
            <a href="#app" className="hover:text-[#0a0a0a] transition-colors">App</a>
            <a href="#languages" className="hover:text-[#0a0a0a] transition-colors">Languages</a>
            <a href="#community" className="hover:text-[#0a0a0a] transition-colors">Community</a>
          </motion.div>

        </div>

        <div className="border-t border-black/[0.05] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[12px] text-[#bbb]">© 2025 Codev. All rights reserved.</span>
          <span className="text-[12px] text-[#bbb]">Designed with ❤️ for developers.</span>
        </div>

      </div>
    </footer>
  )
}