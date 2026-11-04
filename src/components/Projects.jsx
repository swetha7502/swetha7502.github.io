import { useState } from "react"

const categories = [
  {
    label: "Backend & Infrastructure",
    projects: [
      {
        name: "Codebase Intel",
        stack: ["FastAPI", "React", "pgvector", "Celery", "tree-sitter", "OpenAI", "GCP Cloud Run"],
        github: "https://github.com/swetha7502/codebase-intel",
        demo: "https://codebase-intel-frontend-kteuihegea-uc.a.run.app",
        image: "/logos/codebase.png",
        inProgress: false,
        summary: "An AI-powered code exploration tool that indexes any public GitHub repository and enables dependency graph visualization, semantic symbol search, and natural language Q&A over the codebase — powered by OpenAI embeddings stored in pgvector and a multi-language parser pipeline built with Python AST and tree-sitter."
      },
      {
        name: "Rollback-Safety Prover",
        stack: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Docker", "GitLab CI/CD"],
        github: "https://gitlab.com/gitlab-ai-hackathon/transcend-october-2026/43302269/rollback-safety-agent",
        image: "/logos/rollback.jpg",
        inProgress: false,
        summary: "A CI system that proves every release can be safely rolled back. It runs the previous app version from a git worktree against data written by the new version on a disposable Postgres DB, blocks unsafe merges, and auto-rolls back deploys that fail health checks."
      },
      {
        name: "FUSE Write-Back Cache",
        stack: ["C", "Docker", "Python", "Streamlit", "Linux", "Makefile"],
        github: "https://github.com/swetha7502/fuse-writeback-cache",
        image: "/logos/fuse.jpg",
        inProgress: false,
        summary: "Built a user-space file system in C using FUSE with a configurable LRU write-back cache, achieving 4–6x faster write throughput compared to write-through, benchmarked with fio inside Docker."
      },
      {
        name: "Self-Tuning Database Optimization",
        stack: ["Python", "Streamlit", "PostgreSQL"],
        github: "https://github.com/swetha7502/Self-Tuning-Database-Optimization",
        image: "/logos/dbms.jpg",
        summary: "A machine learning system that automatically tunes database configuration parameters to improve performance and efficiency."
      },
    ]
  },
  {
    label: "AI Agents",
    projects: [
      {
        name: "Escrow",
        stack: ["Python", "NVIDIA NemoClaw", "Nemotron", "React", "WebSockets"],
        github: "https://github.com/swetha7502/escrow", 
        demo: "https://escrow-ui-phi.vercel.app/#/",
        image: "/logos/escrow.jpg", 
        inProgress: false,
        summary: "A transactional safety layer for an always-on AI agent that handles student records. Every tool call is intercepted, side effects are staged until FERPA-aligned policy checks pass, and session-level detection catches multi-step paraphrased data leaks."
      },
      {
        name: "ConflictMind",
        stack: ["Google ADK", "Gemini", "Vertex AI", "MongoDB Atlas", "Flask", "Python"],
        github: "https://github.com/nitin-s17/conflictmind-memory",
        demo: "https://conflictmind-674810100969.us-central1.run.app",
        image: "/logos/conflictmind.jpeg",
        inProgress: false,
        summary: "An AI agent with persistent memory that detects contradictory facts about a user across conversations and resolves them through a structured 3-step adversarial Gemini debate — two memories argue their case, a judge synthesizes a unified truth."
      },
      {
        name: "Medical Research Multi-Agent System",
        stack: ["LangChain", "LangGraph", "ChromaDB", "Next.js", "TypeScript", "FastAPI"],
        github: "https://github.com/swetha7502/medical-research-agent", 
        demo: "https://medical-research-agent-swart.vercel.app/",
        image: "/logos/medi.png",
        inProgress: false,
        summary: "AI-powered clinical research assistant that uses a LangGraph pipeline of three specialized agents (Retriever, Fact-Checker, Synthesizer) to search PubMed and arXiv in real time, evaluate evidence quality, and return cited, confidence-graded answers to medical questions."
      },
    ]
  },
  {
    label: "Full Stack",
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
    label: "Machine Learning & Computer Vision",
    projects: [
      {
        name: "Text-Based Image Modification",
        stack: ["Python", "Claude API", "Grounded-DINO", "SAM", "LaMa"],
        github: "https://github.com/swetha7502/Text-Based-Image-Modification-for-Content-Creation",
        image: "/logos/cv.jpg",
        inProgress: false,
        summary: "A text-guided image editing system that lets users modify photos using plain English prompts. Built a full pipeline combining Grounded-DINO, SAM, and LaMa inpainting for object detection, segmentation, and removal — running entirely on CPU without cloud dependencies."
      },
      {
        name: "Ejection Fraction Estimation using CNN",
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
  {
    name: "Escrow - A safety layer for always-on AI agents",
    hackathon: "Nebius x NVIDIA Global AI Hackathon 2026",
    description: "A privacy-preserving safety layer for a TA assistant agent. It intercepts every tool call, stages side effects in a shadow filesystem and outbox until FERPA-aligned checks pass, locks sandbox egress to the inference endpoint, and detects multi-step paraphrased leaks using three Nemotron models.",
    link: "https://devpost.com/software/escrow-leak-proof-safety-layer-for-ai-agents?ref_content=user-portfolio&ref_feature=in_progress",
    stack: ["python", "nemoclaw", "nemotron", "nebius", "react", "websockets"],
  },
  {
    name: "Rollback-Safety Prover - Every release, provably reversible",
    hackathon: "GitLab Duo Agent Platform Hackathon",
    description: "An agentic CI system that tests whether the previous app version still works on data written by the new one — a failure schema-only tools miss. A supervised GitLab Duo agent flow rewrites unsafe migrations into expand/contract releases, re-runs the proof, and gates merges and deploys on the result.",
    link: "https://devpost.com/software/rollback-safety-agent?ref_content=user-portfolio&ref_feature=in_progress",
    stack: ["python", "fastapi", "postgresql", "alembic", "gitlab-ci", "docker"],
  },
  {
    name: "ConflictMind - AI agent that debates its own memories",
    hackathon: "Google Rapid Agent Hackathon 2026",
    description: "An AI agent with persistent memory that detects contradictions across conversations and resolves them through a structured 3-step adversarial Gemini debate — transparent, auditable memory reconciliation stored in MongoDB Atlas.",
    link: "https://devpost.com/software/conflictmind",
    stack: ["googleADK", "gemini", "vertexAI", "mongodb", "flask", "python"],
  },
  {
    name: "Out of Office Negotiation Agent",
    hackathon: "Slack Agent Builder Hackathon 2026",
    description: "Slack bot where every person has an agent that negotiates task reassignment when they go OOO — deterministic rules, human-confirmed, with live workspace search via Slack's Real-Time Search API.",
    link: "https://devpost.com/software/ooo-negotiation-agent",
    stack: ["groq", "javascript", "slack-api", "slack-bolt", "node.js", "rts-api", "llama-3.3"],
  },
  {
    name: "SideQuest - Turning wait time into time well spent",
    hackathon: "MeDo Hackathon 2026",
    description: "SideQuest is a full-stack web app built for the MeDo Hackathon that transforms dead waiting room time into engaging micro-experiences. Patients scan a QR code, join a live queue, and choose from AI-powered mini-games and content — while businesses manage their waiting room through a real-time dashboard.",
    link: "https://devpost.com/software/sidequest-turning-wait-time-into-time-well-spent",
    stack: ["cerebras", "googleAIStudio", "groq", "react", "supabase", "vite"],
  },
]

const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Jun 2026",
    link: "#",
    image: "/logos/aws.svg"
  },
  {
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    issuer: "Udemy",
    date: "Jun 2026",
    link: "#",
    image: "/logos/react.webp"
  },
  {
    name: "Learning JavaScript Debugging",
    issuer: "LinkedIn Learning",
    date: "Jun 2025",
    link: "#",
    image: "/logos/javascript_debugging.webp"
  },
  {
    name: "Oracle Apex Foundations",
    issuer: "Oracle MyLearning",
    date: "Jun 2025",
    link: "#",
    image: "/logos/oracle_apex.png" 
  }
]

const publications = [
  {
    title: "Left Ventricular Ejection Fraction Estimation for Pediatric Patients using Convolutional Neural Network Model",
    venue: "IEEE Access",
    date: "June 2023",
    link: "https://ieeexplore.ieee.org/document/10395284",
    authors: "",
    summary: "Converted 1,000+ echocardiogram videos to annotated images and developed a segmentation pipeline using the Stanford dataset to accurately delineate the left ventricle with ~95% IoU, improving automated EF estimation.",
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

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-20">Certifications</h2>

        {certifications.length === 0 ? (
          <p className="text-center text-white/30 text-sm">Coming soon.</p>
        ) : (
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {certifications.map((c, i) => (
              <CertificationCard key={i} cert={c} />
            ))}
          </div>
        )}
      </section>

      {/* ── PUBLICATIONS ── */}
      <section id="publications" className="py-24 px-6">
        <h2 className="text-4xl text-center font-bold mb-20">Publications</h2>

        {publications.length === 0 ? (
          <p className="text-center text-white/30 text-sm">Coming soon.</p>
        ) : (
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {publications.map((p, i) => (
              <PublicationCard key={i} pub={p} />
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
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" className="text-blue-400 hover:underline">
                    GitHub
                  </a>
                )}
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

function CertificationCard({ cert }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 flex items-center gap-4 hover:border-white/20 transition">
      {cert.image && (
        <img
          src={cert.image}
          className="w-12 h-12 object-contain rounded bg-white/10 p-1 flex-shrink-0"
        />
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold leading-snug">{cert.name}</h3>
        <p className="text-xs text-white/50">{cert.issuer} · {cert.date}</p>
        {cert.link && cert.link !== "#" && (
          <a
            href={cert.link}
            target="_blank"
            className="text-blue-400 text-sm hover:underline w-fit"
          >
            View Credential →
          </a>
        )}
      </div>
    </div>
  )
}

function PublicationCard({ pub }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col gap-3 hover:border-white/20 transition">
      <h3 className="text-base font-bold leading-snug">{pub.title}</h3>
      <p className="text-xs text-white/50">
        {pub.venue} · {pub.date}
        {pub.authors && ` · ${pub.authors}`}
      </p>
      {pub.summary && <p className="text-sm text-gray-300">{pub.summary}</p>}
      {pub.link && pub.link !== "#" && (
        <a
          href={pub.link}
          target="_blank"
          className="text-blue-400 text-sm hover:underline mt-auto"
        >
          View Paper →
        </a>
      )}
    </div>
  )
}