import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Video, Profile2, Star, Code,Global, Send } from "../components/icons/icons";

import dev01 from '../assets/people/dev01.png';
import dev02 from '../assets/people/dev02.png';
import dev03 from '../assets/people/dev03.png';
import dev04 from '../assets/people/dev04.png';
import dev05 from '../assets/people/dev05.png';
import dev06 from '../assets/people/dev06.png';
import type { JSX } from "react";

export const avatars = [
  dev01, dev02, dev03,
  dev04, dev05, dev06,
]

import type { Features } from '../data/features';

const features:Features[] = [
  {
    tag: 'Connect',
    title: 'Meet developers\nlike you.',
    description: 'Meet developers with the same interests and goals as you. Build your network with global talent.',
    content: 'connect',
  },
  {
    tag: 'Collaborate',
    title: 'Share knowledge,\nbuild together.',
    description: 'Contribute your knowledge and build projects together. Share snippets in any language.',
    content: 'collaborate',
  },
  {
    tag: 'Dev Live',
    title: 'Connect with\nyour community.',
    description: 'Connect with the developer world and your community in real time. Stream, watch and learn live.',
    content: 'devlive',
  },
]

export function Connect() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.6,
        }}
      />
      <div className="relative grid grid-cols-3 gap-3">
        {avatars.map((avatar, i) => (
          <div key={i} className="relative">
            <motion.img
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1
               }}
              src={avatar}
              alt={`dev${i + 1}`}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              style={{ opacity: i === 4 ? 1 : 0.85 }}
            />
            {i === 1 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#2A53F3] rounded-full border-2 border-white" />
            )}
          </div>
        ))}
      </div>
    </div>

  );
}

function CollaborateVisual() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2
    }}
    className=" w-full h-48 flex flex-wrap justify-center items-center gap-4">
        <Video />
        <Code />
        <Send />
        <Star />
        <Profile2 />
    </motion.div>
  )
}

function DevLiveVisual() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center gap-6">
      <motion.div 
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ duration: 0.4,
      }}
      className="text-[#0a0a0a] opacity-40">
        <Profile2 />
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4
      }}
       className="text-[#2A53F3]">
      <Video  className="size-10"/>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 0.4,
      }}
      className="text-[#0a0a0a] opacity-40">
        <Global />
      </motion.div>
      
    </div>
  )
}

const visuals: Record<string, JSX.Element> = {
  connect: <Connect />,
  collaborate: <CollaborateVisual />,
  devlive: <DevLiveVisual />,
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section ref={ref} id="features" className="px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{  opacity:0, y: 20}}
          animate={isInView ? { opacity:1, y:0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16">
          <div className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-4">
            Everything you need
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] leading-tight">
            Built for developers,<br />by developers.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)'}}
              key={i}
              className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-black/20 cursor-default"
            >
              <div className="bg-[#f9f9f9] border-b border-black/[0.05]">
                {visuals[f.content]}
              </div>

              <div className="p-5">
                <div className="inline-flex text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-3">
                  {f.tag}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2 whitespace-pre-line leading-snug">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
