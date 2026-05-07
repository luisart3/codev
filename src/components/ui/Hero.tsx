import { motion } from "motion/react";
import { useEffect, useState } from "react";



const CODE_LINES = [
  { tokens: [{ text: '// hello world in TypeScript', color: '#666' }] },
  {
    tokens: [
      { text: 'const ', color: '#60a5fa' },
      { text: 'greet ', color: '#f1f5f9' },
      { text: '= (', color: '#666' },
      { text: 'name', color: '#c084fc' },
      { text: ': ', color: '#666' },
      { text: 'string', color: '#60a5fa' },
      { text: ') => {', color: '#666' },
    ],
  },
  {
    tokens: [
      { text: '  console', color: '#f1f5f9' },
      { text: '.', color: '#666' },
      { text: 'log', color: '#4ade80' },
      { text: '(`Hello, ', color: '#666' },
      { text: '${name}', color: '#60a5fa' },
      { text: '`)', color: '#666' },
    ],
  },
  { tokens: [{ text: '}', color: '#666' }] },
  {
    tokens: [
      { text: 'greet', color: '#4ade80' },
      { text: '(', color: '#666' },
      { text: "'Codev'", color: '#4ade80' },
      { text: ')', color: '#666' },
    ],
  },
]


function TypingCode () {
    const  [visibleLines, setVisibleLines] = useState(0)

    useEffect(() => {
        if (visibleLines >= CODE_LINES.length) return
        const timeout = setTimeout(() => {
            setVisibleLines((v) => v + 1)
        }, 400)
        return () => clearTimeout(timeout)
        
    }, [visibleLines])

    // restart loop for typing code
    useEffect(() => {
        if (visibleLines < CODE_LINES.length) return
        const timeout = setTimeout(() => setVisibleLines(0), 3000)
        return () => clearTimeout(timeout)
    }, [visibleLines])

    return (
        <pre 
         className="font-mono text-[11px] leading-[1.8] min-h-[110px]">
            {CODE_LINES.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, x: -8}}
                    animate={ i < visibleLines ? {opacity: 1, x: 0} : {opacity: 0, x: -8}}
                    transition={{ duration: 0.2, }}
                >
                   {line.tokens.map((token,j) => (
                        <span key={j} style={{color: token.color}}>{token.text}</span>
                   ))}
                </motion.div>
            ))}
            {/* cursor blinking */}
            { visibleLines < CODE_LINES.length && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[6px] h-[13px] rounded-sm bg-[#60a5fa] ml-0.5 align-middle"
                />
            )}
        </pre>
    )
    
}



export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-24 pb-16 text-center overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
                    backgroundSize: '48px 48px',
                    opacity: 0.6
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative  inline-flex items-center gap-2 text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#2A53F3] border border-[#C7D2FE] mb-6">
                The social network for developers
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative text-5xl font-semibold tracking-tight leading-[1.1] text-[#0A0A0A] mb-5">
                Share code. <br />
                <span className="text-[#2A53F3]">Connect</span> whit devs.
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative text-[15px] text-[#666] max-w-sm leading-relaxed mb-8">
                Connect with developers from around the world. Share snippets, collaborate on projects and grow together.
            </motion.p>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" relative flex items-center gap-3 mb-12">
                <button className="bg-[#2A53F3] hover:bg-[#1a43e3] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-colors">
                    Join waitlist
                </button>
                <button className="bg-white text-[#0a0a0a] text-[13px] px-5 py-2.5 rounded-full border border-black/10 hover:border-black/20 transition-colors">
                    See examples
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" relative bg-[#0a0a0a] rounded-2xl p-5 text-left w-[300px]">
                <div className="flex gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>

                <TypingCode />
            </motion.div>
        </section>
    );
}