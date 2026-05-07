import { motion, useInView } from "motion/react";
import { useRef } from "react";

import {
  TypeScript,
  JavaScript,
  Java,
  Kotlin,
  Swift,
  CPlusPlus,
  Ruby,
  Dart,
  Python,
  GoLight,
  RustLight,
  PhpLight
} from "@ridemountainpig/svgl-react"

const languages = [
  { name: 'TypeScript', icon: TypeScript },
  { name: 'Python', icon: Python },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'Go', icon: GoLight  },
  { name: 'Rust', icon: RustLight },
  { name: 'Java', icon: Java },
  { name: 'Kotlin', icon: Kotlin },
  { name: 'Swift', icon: Swift },
  { name: 'C++', icon: CPlusPlus },
  { name: 'Ruby', icon: Ruby },
  { name: 'PHP', icon: PhpLight },
  { name: 'Dart', icon: Dart,  },
]

export default function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="px-8 py-24 bg-[#f9f9f9]" ref={ref}>
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { }}
      transition={{ duration: 0.6}}
      className="max-w-5xl mx-auto text-center">

        <div className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-4">
          Any language
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] leading-tight mb-4">
          Share code in<br />any language.
        </h2>
        <p className="text-[15px] text-[#666] mb-12 max-w-sm mx-auto leading-relaxed">
          From TypeScript to Rust, share snippets in whatever language you love.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { }}
              transition={{ duration: 0.6, delay: i * 0.05}}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-black/[0.07] rounded-full text-[13px] text-[#444] font-medium hover:border-black/20 hover:shadow-sm transition-all"
            >
              <lang.icon className="w-4 h-4" />
              {lang.name}
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}