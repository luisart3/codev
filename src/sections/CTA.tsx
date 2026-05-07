import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";


export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleJoin() {
    if (!email) return;
    setJoined(true);
    setEmail("");
  }
  
  return (
    <section id="community"  className="px-8 py-24" ref={ref}>
      <motion.div 
      initial={ {opacity: 0, y: 24} }
      animate={ isInView ? {opacity: 1, y: 0} : {} }
      transition={ {duration: 0.6} }
      className="max-w-2xl mx-auto text-center">

        <div className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-6">
          Early access
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] leading-tight mb-4">
          Be the first to<br />
          <span className="text-[#2A53F3]">join Codev.</span>
        </h2>

        <p className="text-[15px] text-[#666] leading-relaxed mb-10">
          We're building something special for the dev community.<br />
          Leave your email and we'll let you know when we launch.
        </p>

        {/* Input + Button */}
        {!joined ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row  items-center gap-2 max-w-sm mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
              placeholder="your@email.com"
              className="flex-1 text-[13px] px-4 py-2.5 rounded-[10px] border border-black/10 outline-none focus:border-[#2A53F3] transition-colors bg-white text-[#0a0a0a] placeholder:text-[#bbb]"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleJoin}
              className="bg-[#2A53F3] hover:bg-[#1a43e3] text-white text-[13px] font-medium px-5 py-2.5 rounded-[10px] transition-colors whitespace-nowrap"
            >
              Join waitlist
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-[14px] text-[#2A53F3] font-medium"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            You're on the list! We'll be in touch soon.
          </motion.div>
        )}

        {/* Social proof */}
        {!joined && (
          <p className="text-[12px] text-[#bbb] mt-4">
            Join 200+ developers already on the waitlist.
          </p>
        )}

      </motion.div>
    </section>
  )
}