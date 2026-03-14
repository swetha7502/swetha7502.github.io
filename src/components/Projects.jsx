import { useState } from "react"

const projects = [
  {
    name: "Amphibious Housing for Flood Resilience",
    stack: ["In Progress!"],
    github: "#",
    image: "/logos/flood.png",
    summary: "Designing adaptive housing structures that float during floods to improve disaster resilience and safety, enhanced with smart devices."
  },
  {
    name: "Water-Atom Behavior Predictions",
    stack: ["C#","MatLab"],
    github: "#",
    image: "/logos/atom.jpg",
    summary: "Modeling and predicting the behavior of water molecules with proteins using molecular dynamics simulations and numerical analysis."
    
  },
  {
    name: "Music Genre Classification",
    stack: ["Python","Streamlit"],
    github: "https://github.com/swetha7502/music-genre-classification",
    image: "/logos/genre.png",
    summary: "Simple machine learning model that classifies songs into genres based on audio features."
  },
  {
    name: "Self-Tuning Database Paramter Optimisation using Machine Learning",
    stack: ["Python", "Streamlit","PostgreSQL"],
    github: "https://github.com/swetha7502/Self-Tuning-Database-Optimization",
    image: "/logos/dbms.jpg",
    summary: "A machine learning system that automatically tunes database configuration parameters to improve performance and efficiency."
  },
  {
    name: "Left Ventricular Ejection Fraction Estimation using CNN",
    stack: ["Python", "Flask", "JS"],
    github: "#",
    image: "/logos/EF.webp",
    summary: "Using deep learning to estimate heart ejection fraction from medical imaging for cardiac analysis."
  },
  {
    name: "DeepFake Video Detection using E2TC-Net",
    stack: ["Python", "Flask", "JS"],
    github: "#",
    image: "/logos/deepfake.jpg",
    summary: "Implementing a deep learning model to detect manipulated or deepfake videos."
  },
  {
    name: "BlogLite",
    stack: ["Python", "Flask", "JS"],
    github: "https://github.com/swetha7502/BlogLite",
    image: "/logos/blog.png",
    summary: "A lightweight blogging platform for creating, managing, and publishing posts."
  },
  {
    name: "Quantified-Self",
    stack: ["Python", "Flask", "JS"],
    github: "https://github.com/swetha7502/Quantified-Self-App",
    image: "/logos/qs.png",
    summary: "A personal tracking application that helps users monitor habits, activities, and productivity."
  },
  {
    name: "MedHelp",
    stack: ["Java", "JSP", "JS"],
    github: "https://github.com/swetha7502/MedHelp",
    image: "/logos/medhelp.png",
    summary: "A web-based platform that allows users to easily browse, order, and manage medications online."
  }
]

export default function Projects() {

  return (

    <section id="projects" className="py-24">

      <h2 className="text-4xl text-center font-bold mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">

        {projects.map((p, i) => (

          <FlipCard key={i} project={p} />

        ))}

      </div>

    </section>

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

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative h-full flex flex-col justify-center items-center text-center p-6">

            <h3 className="text-lg font-bold mb-3">
              {project.name}
            </h3>

            {/* STACK */}

            <div className="flex flex-wrap justify-center gap-2 mb-4">

              {project.stack.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-white/10 rounded backdrop-blur"
                >
                  {s}
                </span>
              ))}

            </div>

            {/* LINKS */}

            <div className="flex gap-4 text-sm">

              <a
                href={project.github} target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>


            </div>

          </div>

        </div>

        {/* BACK */}

        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-6 bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-center">

          <p className="text-gray-200 text-sm">
            {project.summary}
          </p>

        </div>

      </div>

    </div>

  )

}