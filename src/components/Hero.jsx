import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useEffect, useState } from "react";
import Shrikant from '../assets/img/Shrikant.jpg';

const Hero = () => {
  const roles = ["MERN Stack Developer", "Front-End Developer", "Back-End Developer"];
  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleCharIndex, setRoleCharIndex] = useState(0);
  useEffect(() => {
    let timeout;
    if (roleCharIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setRole((prev) => prev + roles[roleIndex][roleCharIndex]);
        setRoleCharIndex((prev) => prev + 1);
      }, 100)
    }
    else {
    timeout =  setTimeout(() => {
        setRole("");
        setRoleCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length)
      }, 2500)
    }
  return () => clearTimeout(timeout);
}, [roleIndex, roleCharIndex]);
return (
  <section className='relative w-full h-screen mx-auto'>
    <div className={` absolute inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto  flex flex-row items-start gap-5`} >
      <div className='flex flex-col justify-center items-center mt-6'>
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Shrikant</span></h1>
        <h2 className='text-[#915eff] text-[45px] font-bold min-h-[45px]'>{role}<span className="animate-pulse">|</span></h2>
        <p className={`text-[26px] mt-2 text-white-100`}>Passionate about designing and<br className='sm:block hidden' />building intuitive web interfaces.<br className='sm:block hidden' />I focus on writing clean code,<br className='sm:block hidden' /> optimizing performance, and<br className='sm:block hidden' /> building real-world applications.</p>
        <div className="flex justify-start gap-10 mt-5">
          <button className="p-4 bg-[#915eff] hover: hover:bg-blue-700 text-white text-[25px] font-medium px-10" onClick={() => window.open("https://drive.google.com/file/d/19cz9v7um8q5mw9POqkDXJz8Pd7k8Jcaj/view?usp=drive_link", "_blank")}>My Resume</button>
          <a href="#contact"><button className="p-4 bg-white text-[#915eff] hover: hover:bg-gray-700 text-[25px] font-medium" >Contact Me</button></a>
        </div>
      </div>
      <motion.div 
       animate={{ y:[0, 25, 0]}}
       transition={{duration: 3.5,
         repeat:Infinity, 
         repeatType:"loop",
          ease: "easeInOut" }}
      className='rounded-full border ml-10' style={{width: '26%'}}>
          <img src={Shrikant} alt='profile' className='rounded-full object-cover' />
      </motion.div>
    </div>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
)
}

export default Hero;