import { Link } from "react-scroll"

export default function Navbar(){
  return(

    <nav className="fixed w-full bg-black/30 backdrop-blur-lg z-50">

  <div className="flex items-center p-4 text-white">

    <div className="flex gap-8 ml-auto">
            <a
href="/Swetha_Resume.pdf"
download
className="fixed top-3 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition"
>

Download CV

</a>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">About</Link>
          <Link to="techstack" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Skills</Link>
          <Link to="timeline" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Experience</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Contact</Link>

        </div>

      </div>

    </nav>

  )
}