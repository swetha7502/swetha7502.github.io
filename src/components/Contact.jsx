export default function Contact(){

return(

<section id="contact" className="py-24 text-center">

<h2 className="text-4xl font-bold mb-6">
Contact
</h2>

<div className="relative mt-4">


                        <div className={`flex gap-6 mt-4 justify-center transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>

                            <a
                                href="https://github.com/swetha7502"
                                target="_blank"
                                className="contact-icon"
                            >
                                <img src="logos/github.png" className="w-8" />
                            </a>

                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                className="contact-icon"
                            >
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-8" />
                            </a>

                            <a
                                href="mailto:youremail@gmail.com"
                                className="contact-icon"
                            >
                                <img src="logos/gmail.webp" className="w-8" />
                            </a>

                        </div>

                    </div>

</section>

)

}