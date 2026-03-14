
import { useState } from "react"
export default function About() {
    const [open, setOpen] = useState(false)

    return (

        <section id="about" className="py-24 flex justify-center">

            <div className="glass max-w-5xl w-full p-10 rounded-2xl grid md:grid-cols-2 gap-10 items-center">

                {/* Photo */}

                <div className="flex justify-center">

                    <img
                        src="logos/me.jpg"
                        className="w-72 rounded-xl shadow-2xl"
                    />

                </div>

                {/* Text */}

                <div>

                    <h2 className="text-4xl font-bold mb-6">
                        Hi, I'm Swetha!
                    </h2>

                    <p className="text-gray-300 leading-relaxed">

                        I'm a software engineer focused on building scalable back-end
                        systems and data-driven applications.

                        My interests include machine learning, databases, and infrastructure design. 
                        I enjoy solving complex problems and creating efficient, production-ready solutions that translate into real-world impact.



                    </p>





                    {/* CONTACT BUTTON */}

                    <div className="relative mt-4">

                        <button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
                        >
                            Contact Me!
                        </button>

                        {/* ICONS */}

                        <div className={`flex gap-6 mt-4 justify-center transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>

                            <a
                                href="https://github.com/swetha7502"
                                target="_blank"
                                className="contact-icon"
                            >
                                <img src="logos/github.png" className="w-8" />
                            </a>

                            <a
                                href="https://linkedin.com/in/swetha-sriram-a75098233"
                                target="_blank"
                                className="contact-icon"
                            >
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-8" />
                            </a>

                            <a
                                href="mailto:vsswetha@gmail.com"
                                className="contact-icon"
                            >
                                <img src="logos/gmail.webp" className="w-8" />
                            </a>

                        </div>

                    </div>
                </div>

            </div>

        </section>

    )
}
