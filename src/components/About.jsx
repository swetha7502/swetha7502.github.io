import { useState, useEffect } from "react"

const lines = [
  { prefix: "const", name: " roles",   value: ' = "Software Engineer"' },
  { prefix: "const", name: " focus",  value: ' = ["AI", "Backend", "FullStack","Systems"]' },
  { prefix: "const", name: " university", value: ' = "Penn State University"' },
  { prefix: "const", name: " status", value: ' = "Open to opportunities ✦"' },
]

const heroLines = [
  "Swetha Sriram.",
  "systems that scale. bugs that don't.",
]

export default function About() {
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState(0)

  // Hero typewriter state
  const [heroLineIndex, setHeroLineIndex] = useState(0)
  const [heroCharIndex, setHeroCharIndex] = useState(0)
  const [heroDisplayed, setHeroDisplayed] = useState([])
  const [heroDone, setHeroDone] = useState(false)

  // Terminal lines typewriter
  useEffect(() => {
    if (typed < lines.length) {
      const t = setTimeout(() => setTyped(typed + 1), 220)
      return () => clearTimeout(t)
    }
  }, [typed])

  // Hero typewriter — types each line char by char, then moves to next
  useEffect(() => {
    if (heroDone) return

    const currentLine = heroLines[heroLineIndex]

    if (heroCharIndex < currentLine.length) {
      const t = setTimeout(() => {
        setHeroDisplayed(prev => {
          const updated = [...prev]
          updated[heroLineIndex] = (updated[heroLineIndex] || "") + currentLine[heroCharIndex]
          return updated
        })
        setHeroCharIndex(heroCharIndex + 1)
      }, 55)
      return () => clearTimeout(t)
    } else {
      // Line finished — move to next after a short pause
      if (heroLineIndex < heroLines.length - 1) {
        const t = setTimeout(() => {
          setHeroLineIndex(heroLineIndex + 1)
          setHeroCharIndex(0)
        }, 320)
        return () => clearTimeout(t)
      } else {
        setHeroDone(true)
      }
    }
  }, [heroLineIndex, heroCharIndex, heroDone])

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col items-center justify-center gap-10">

      {/* ── Hero typing text ── */}
      <div className="text-center font-mono space-y-1">
        {heroDisplayed.map((line, i) => (
          <p
            key={i}
            className={`leading-snug ${
              i === 0
                ? "text-3xl md:text-5xl font-bold text-white"
                : i === 1
                ? "text-lg md:text-2xl text-cyan-400"
                : "text-sm md:text-base text-white/40"
            }`}
          >
            {line}
          </p>
        ))}

      </div>

      {/* ── Card ── */}
      <div className="max-w-5xl w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur overflow-hidden grid md:grid-cols-[280px_1fr]">

        {/* ── LEFT panel ── */}
        <div className="flex flex-col items-center justify-center gap-5 p-8 border-r border-white/10">
          <img
            src="logos/mee.jpg"
            className="w-40 h-40 rounded-xl object-cover object-top"
          />

          <div className="text-center">
            <p className="font-bold text-base tracking-tight text-white">Swetha Sriram</p>
            <p className="text-xs text-white/30 font-mono mt-0.5">swetha7502</p>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="w-full text-xs font-mono px-4 py-2 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            {open ? "$ close --contacts" : "$ show --contacts"}
          </button>

          <div className={`flex gap-5 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none h-0 overflow-hidden"}`}>
            <a href="https://github.com/swetha7502" target="_blank" className="hover:opacity-70 transition">
              <img src="logos/github.png" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://linkedin.com/in/swetha-sriram-a75098233" target="_blank" className="hover:opacity-70 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-6 h-6" />
            </a>
            <a href="mailto:vsswetha@gmail.com" className="hover:opacity-70 transition">
              <img src="logos/gmail.webp" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

        {/* ── RIGHT panel: terminal ── */}
        <div className="flex flex-col font-mono text-sm">

          {/* title bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-white/25">~/swetha/about.js</span>
          </div>

          {/* code body */}
          <div className="p-6 flex-1 space-y-2">
            {lines.slice(0, typed).map((l, i) => (
              <div key={i} className="flex gap-1.5 leading-relaxed">
                <span className="text-purple-400">{l.prefix}</span>
                <span className="text-cyan-300">{l.name}</span>
                <span className="text-white/30">=</span>
                <span className="text-emerald-300">{l.value}</span>
                {i === typed - 1 && typed < lines.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-cyan-400 animate-pulse ml-0.5 translate-y-[3px]" />
                )}
              </div>
            ))}
            {typed === lines.length && (
              <span className="inline-block w-[2px] h-[1em] bg-cyan-400 animate-pulse translate-y-[3px]" />
            )}
          </div>

          {/* about me footer */}
          <div className="px-6 pb-6 pt-4 border-t border-white/10">
            <p className="text-xs text-white/25 mb-2 font-mono">// about me</p>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              I build scalable back-end systems and data-driven applications.
              Deeply interested in machine learning, databases, and infrastructure by
              turning complex problems into production-ready solutions with real-world impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}