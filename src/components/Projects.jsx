import { useState } from "react"

const categories = [
  {
    label: "AI / ML",
    projects: [
      {
        name: "ConflictMind",
        stack: ["Google ADK", "Gemini", "Vertex AI", "MongoDB Atlas", "Flask", "Python"],
        github: "https://github.com/nitin-s17/conflictmind-memory",
        image: "/logos/conflictmind.jpeg",
        inProgress: false,
        summary: "An AI agent with persistent memory that detects contradictory facts about a user across conversations and resolves them through a structured 3-step adversarial Gemini debate — two memories argue their case, a judge synthesizes a unified truth, and the full debate history is stored in MongoDB Atlas."
      },
      {
        name: "Medical Research Multi-Agent System",
        stack: ["LangChain", "LangGraph", "ChromaDB", "Next.js", "TypeScript","FastAPI"],
        github: "https://github.com/swetha7502/Text-Based-Image-Modification-for-Content-Creation",
        demo: "https://medical-research-agent-swart.vercel.app/",
        image: "/logos/medi.png",
        inProgress: false,
        summary: "A text-guided image editing system that lets users modify photos using plain English prompts. Built a full pipeline combining Grounded-DINO, SAM, and LaMa inpainting for object detection, segmentation, and removal — running entirely on CPU without cloud dependencies."
      },
      {
        name: "Text Based Image Modification for Content Creation",
        stack: ["Python", "Claude API", "Grounded-DINO", "SAM", "LaMa"],
        github: "https://github.com/swetha7502/Text-Based-Image-Modification-for-Content-Creation",
        image: "/logos/cv.jpg",
        inProgress: false,
        summary: "A text-guided image editing system that lets users modify photos using plain English prompts. Built a full pipeline combining Grounded-DINO, SAM, and LaMa inpainting for object detection, segmentation, and removal — running entirely on CPU without cloud dependencies."
      },
      {
        name: "Music Genre Classification",
        stack: ["Python", "Streamlit"],
        github: "https://github.com/swetha7502/music-genre-classification",
        image: "/logos/genre.png",
        summary: "Simple machine learning model that classifies songs into genres based on audio features."
      },
      {
        name: "Left Ventricular Ejection Fraction Estimation using CNN",
        stack: ["Python", "CNN", "Keras", "OpenCV", "TensorFlow"],
        github: "https://ieeexplore.ieee.org/document/10395284",
        image: "/logos/EF.webp",
        summary: "Using deep learning to estimate heart ejection fraction from medical imaging for cardiac analysis."
      },
      {
        name: "DeepFake Video Detection using E2TC-Net",
        stack: ["Python", "TensorFlow", "Transformers", "CNN"],
        github: "#",
        image: "/logos/deepfake.jpg",
        summary: "Implementing a deep learning model to detect manipulated or deepfake videos."
      },
      
    ]
  },
  {
    label: "Web Development",
    projects: [
      {
        name: "BlogLite",
        stack: ["Python", "Flask", "Redis", "SQLite", "Vue.js"],
        github: "https://github.com/swetha7502/BlogLite",
        image: "/logos/blog.png",
        summary: "A lightweight blogging platform for creating, managing, and publishing posts."
      },
      {
        name: "Quantified-Self",
        stack: ["Python", "JavaScript", "Flask", "SQLite"],
        github: "https://github.com/swetha7502/Quantified-Self-App",
        image: "/logos/qs.png",
        summary: "A personal tracking application that helps users monitor habits, activities, and productivity."
      },
      {
        name: "MedHelp",
        stack: ["Java", "JSP", "JavaScript"],
        github: "https://github.com/swetha7502/MedHelp",
        image: "/logos/medhelp.png",
        summary: "A web-based platform that allows users to easily browse, order, and manage medications online."
      },
    ]
  },
  {
    label: "Systems",
    projects: [
      {
        name: "Fuse Write-Back Cache",
        stack: ["C", "Docker", "Python", "Streamlit", "Linux", "Makefile"],
        github: "https://github.com/swetha7502/fuse-writeback-cache",
        image: "/logos/flood.png",
        inProgress: false,
        summary: "Built a user-space file system in C using FUSE with a configurable LRU write-back cache, achieving 4–6x faster write throughput compared to write-through, benchmarked with fio inside Docker."
      },
      {
        name: "Self-Tuning Database Parameter Optimisation using Machine Learning",
        stack: ["Python", "Streamlit", "PostgreSQL"],
        github: "https://github.com/swetha7502/Self-Tuning-Database-Optimization",
        image: "/logos/dbms.jpg",
        summary: "A machine learning system that automatically tunes database configuration parameters to improve performance and efficiency."
      },
    ]
  },
  {
    label: "Research Work",
    projects: [
      {
        name: "Amphibious Housing for Flood Resilience",
        stack: [],
        github: "#",
        image: "/logos/flood.png",
        inProgress: true,
        summary: "Designing adaptive housing structures that float during floods to improve disaster resilience and safety, enhanced with smart devices."
      },
      {
        name: "Water-Atom Behavior Predictions",
        stack: ["C#", "MatLab"],
        github: "#",
        image: "/logos/atom.jpg",
        inProgress: true,
        summary: "Modeling and predicting the behavior of water molecules with proteins using molecular dynamics simulations and numerical analysis."
      },
    ]
  },
]

const hackathons = [
  // Add your hackathon projects here! Example format:
  {
    name: "SideQuest - Turning wait time into time well spent",
    hackathon: "MeDo Hackathon 2026",
    description: "SideQuest is a full-stack web app built for the MeDo Hackathon that transforms dead waiting room time into engaging micro-experiences. Patients scan a QR code, join a live queue, and choose from AI-powered mini-games and content — while businesses manage their waiting room through a real-time dashboard.",
    link: "https://devpost.com/software/sidequest-turning-wait-time-into-time-well-spent",
    stack: ["cerebras", "googleAIStudio","groq","react","supabase","vite"],
    //award: "Best Use of AI", // optional
  },
  {
  name: "ConflictMind - AI agent that debates its own memories",
  hackathon: "Google Rapid Agent Hackathon 2026",
  description: "An AI agent with persistent memory that detects contradictions across conversations and resolves them through a structured 3-step adversarial Gemini debate — transparent, auditable memory reconciliation stored in MongoDB Atlas.",
  link: "https://devpost.com/software/conflictmind", // update with your actual devpost URL
  stack: ["googleADK", "gemini", "vertexAI", "mongodb", "flask", "python"],
  //award: "Best Use of MongoDB", // remove if no award
},
]

export default function Projects() {
  return (
    <>
      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-20">Projects</h2>

        <div className="max-w-7xl mx-auto space-y-20">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-semibold text-white/60 whitespace-nowrap">
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Project cards */}
              <div className="grid md:grid-cols-4 gap-8">
                {cat.projects.map((p, i) => (
                  <FlipCard key={i} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HACKATHON PROJECTS ── */}
      <section id="hackathons" className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-20">Hackathon Projects</h2>

        {hackathons.length === 0 ? (
          <p className="text-center text-white/30 text-sm">Coming soon.</p>
        ) : (
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {hackathons.map((h, i) => (
              <HackathonCard key={i} hackathon={h} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

function FlipCard({ project }) {
  const [flip, setFlip] = useState(false)

  return (
    <div
      className="w-full h-72 perspective group cursor-pointer"
      onClick={() => setFlip(!flip)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style ${flip ? "rotate-y-180" : ""}`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
          <img
            src={project.image}
            className="absolute w-full h-full object-cover opacity-50 group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-lg font-bold mb-3">{project.name}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.stack.map((s, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded backdrop-blur">
                  {s}
                </span>
              ))}
            </div>
            {project.inProgress ? (
              <div className="flex items-center gap-2 text-yellow-300 text-xs">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                In Progress
              </div>
            ) : (
              <div className="flex gap-4 text-sm">
                <a href={project.github} target="_blank" className="text-blue-400 hover:underline">
                  GitHub
                </a>
                {project.demo && (
  <a href={project.demo} target="_blank" className="text-blue-400 hover:underline">
    Demo
  </a>
)}
              </div>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-6 bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-center">
          <p className="text-gray-200 text-sm">{project.summary}</p>
        </div>
      </div>
    </div>
  )
}

function HackathonCard({ hackathon }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col gap-3 hover:border-white/20 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-bold leading-snug">{hackathon.name}</h3>
        {hackathon.award && (
          <span className="text-xs px-2 py-1 bg-yellow-400/10 text-yellow-300 rounded whitespace-nowrap">
            🏆 {hackathon.award}
          </span>
        )}
      </div>

      <p className="text-xs text-white/50">{hackathon.hackathon}</p>
      <p className="text-sm text-gray-300">{hackathon.description}</p>

      <div className="flex flex-wrap gap-2 mt-1">
        {hackathon.stack?.map((s, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded">
            {s}
          </span>
        ))}
      </div>

      {hackathon.link && hackathon.link !== "#" && (
        <a
          href={hackathon.link}
          target="_blank"
          className="text-blue-400 text-sm hover:underline mt-auto"
        >
          View Project →
        </a>
      )}
    </div>
  )
}