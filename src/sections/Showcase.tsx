import { snippets } from '../data/snippets'
import { motion, useInView } from 'framer-motion'
import { Star, Send, Message } from '../components/icons/icons'
import { useRef } from 'react'

export default function Showcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  return (
    <section id="showcase" ref={ref} className="px-8 py-24 bg-[#f9f9f9]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <div className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-4">
            Showcase
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] leading-tight">
            Code posts from<br />the community.
          </h2>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {snippets.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-black/20 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
            >

              {/* User */}
              <div className="flex items-center gap-3 p-4 border-b border-black/[0.05]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: s.color, color: s.textColor }}
                >
                  {s.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#0a0a0a]">{s.user}</p>
                  <p className="text-[11px] text-[#999]">{s.role} · {s.time}</p>
                </div>
              </div>

              {/* Caption */}
              <p className="text-[13px] text-[#444] px-4 pt-3 pb-2">{s.caption}</p>

              {/* Code block */}
              <div className="mx-4 mb-4 bg-[#0a0a0a] rounded-xl overflow-hidden">
                {/* Lang badge */}
                <div className="flex items-center gap-1.5 px-3 pt-3 pb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: s.langColor }} />
                  <span className="text-[10px] text-[#666]">{s.lang}</span>
                </div>
                <pre className="font-mono text-[11px] text-[#e2e8f0] leading-relaxed px-3 pb-3 overflow-x-auto">
                  {s.code}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 px-4 pb-4 text-[#999]">
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 text-[12px] hover:text-[#2A53F3] transition-colors">
                  <Star className='size-4' />
                  400
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 text-[12px] hover:text-[#2A53F3] transition-colors">
                  <Message className='size-4' />
                  10
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 text-[12px] hover:text-[#2A53F3] transition-colors">
                  <Send className='size-4' />
                  10
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

