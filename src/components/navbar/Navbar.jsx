import "./navbar.scss"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Rani</motion.span>
        <div className="social">
          <a href="https://github.com/Rani704"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/rani-a69b90230/"><FaLinkedin /></a>
          <a href="mailto:rani7042003@gmail.com"><MdEmail /></a>
          <a href="tel:8076083343"><FaPhone /></a>
          <a href="Resume_Rani(7).pdf" download="Resume_Rani(7).pdf"><FaFileDownload /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar