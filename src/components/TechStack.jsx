import { techStack } from "./techData"

export default function TechStack() {

    return (

        <section id = "techstack" className="py-28">

            <h2 className="text-4xl font-bold text-center mb-20">
                Tech Stack
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {techStack.map((group, i) => (

                    <div
                        key={i}
                        className="
relative
p-8
rounded-2xl
glass-card
border border-white/10
shadow-xl
hover:border-cyan-400/40
transition
duration-500
group
overflow-hidden
"
                    >

                        {/* shiny gradient overlay */}

                        <div className="
absolute inset-0
bg-gradient-to-br
from-white/10
to-transparent
opacity-0
group-hover:opacity-100
transition
"></div>

                        <h3 className="text-xl font-bold mb-6 text-cyan-400">
                            {group.category}
                        </h3>

                        <div className="grid grid-cols-3 gap-6">

                            {group.items.map((tech, j) => (

                                <div
                                    key={j}
                                    className="
flex
flex-col
items-center
justify-center
gap-2
p-3
rounded-lg
transition
duration-300
hover:scale-110
hover:bg-white/10
"
                                >

                                    <img
                                        src={tech.logo}
                                        className="w-10 h-10 object-contain"
                                    />

                                    <p className="text-sm text-center">
                                        {tech.name}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}