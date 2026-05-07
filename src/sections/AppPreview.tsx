import { motion, useInView } from 'motion/react'
import { useRef } from 'react'


import homeScreen from '../assets/mobile/home.png'
import profileScreen from '../assets/mobile/profile.png'
import onboarding1 from '../assets/mobile/Connect.png'
import onboarding2 from '../assets/mobile/Collaborate.png'
import onboarding3 from '../assets/mobile/dev live.png'


const phones = [
  {
    src: onboarding1,
    alt: 'Connect',
    style: { left: '2%' },
    initial: { opacity: 0, x: -60, rotate: -12 },
    animate: { opacity: 1, x: 0, rotate: -12, y: 40 },
    width: 'w-28',
    radius: 'rounded-lg',
    delay: 0.1,
    z: 'z-10',
  },
  {
    src: onboarding2,
    alt: 'Collaborate',
    style: { left: '14%' },
    initial: { opacity: 0, x: -40, rotate: -5 },
    animate: { opacity: 1, x: 0, rotate: -5, y: 16 },
    width: 'w-32',
    radius: 'rounded-lg',
    delay: 0.2,
    z: 'z-10',
  },
  {
    src: homeScreen,
    alt: 'Codev Home',
    style: { left: '50%', transform: 'translateX(-50%)' },
    initial: { opacity: 0, y: 40, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    width: 'w-52',
    radius: 'rounded-lg',
    delay: 0,
    z: 'z-30',
  },
  {
    src: onboarding3,
    alt: 'Dev Live',
    style: { right: '14%' },
    initial: { opacity: 0, x: 40, rotate: 5 },
    animate: { opacity: 1, x: 0, rotate: 5, y: 16 },
    width: 'w-32',
    radius: 'rounded-lg',
    delay: 0.2,
    z: 'z-10',
  },
  {
    src: profileScreen,
    alt: 'Profile',
    style: { right: '2%' },
    initial: { opacity: 0, x: 60, rotate: 12 },
    animate: { opacity: 1, x: 0, rotate: 12, y: 40 },
    width: 'w-28',
    radius: 'rounded-lg',
    delay: 0.1,
    z: 'z-10',
  },
]
export default function AppPreview() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"})

  return (
    <section id="app" className="px-8 py-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={isInView ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.6}}
         className="text-center mb-16">
          <div className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#c7d2fe] mb-4">
            The app
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] leading-tight mb-4">
            A new way to<br />
            <span className="text-[#2A53F3]">experience</span> code sharing.
          </h2>
          <p className="text-[15px] text-[#666] max-w-sm mx-auto leading-relaxed">
            Designed for developers who love clean interfaces and powerful tools.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center h-[560px]">

          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(42,83,243,0.06) 0%, transparent 70%)',
            }}
          />

         {phones.map((phone, i) => (
            <motion.div
              key={i}
              initial={phone.initial}
              animate={isInView ? phone.animate : phone.initial}
              transition={{ duration: 0.7, delay: phone.delay, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute ${phone.z}`}
              style={{
                ...phone.style,
                filter: i === 2
                  ? 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))'
                  : 'drop-shadow(0 16px 40px rgba(0,0,0,0.09))',
              }}
            >
              <div className={`${phone.width} ${phone.radius} overflow-hidden border border-black/10`}>
                <img src={phone.src} alt={phone.alt} className="w-full object-cover" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}