import Navbar from "./components/Navbar"
import TechStack from "./components/TechStack"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"
//import DownloadCV  from "./components/DownloadCV"
export default function App(){

return(

<div className="gradient-bg min-h-screen text-white">

<Navbar/>


<About />
<TechStack/>

<Timeline/>

<Projects/>

<Contact/>

</div>

)

}