import Img1 from '../assets/Images/skills/htmllogo.png'
import Img2 from '../assets/Images/skills/csslogo.png'
import Img3 from '../assets/Images/skills/java.png'
import Img4 from '../assets/Images/skills/reactlogo.png'
import Img5 from '../assets/Images/skills/tailwindlogo.png'
import Img6 from '../assets/Images/skills/typescript.png'
import Img7 from '../assets/Images/skills/node.png'
import Img8 from '../assets/Images/skills/mongodblogo.png'
import Img9 from '../assets/Images/skills/gitlogo.png'
import Img10 from '../assets/Images/skills/npm logo.webp'
function SkillLogos() {
  return (
    <div className="text-center ">
      <h1 className="mt-16 text-4xl font-bold">Offering insights from <span className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Experience</span></h1>
      <p className="mt-6 text-lg font-bold pl-96 pr-96 xs:pl-0 xs:pr-0 sm:pl-10 sm:pr-0 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 xl:pl-40 xl:pr-40 ">Passionate about design and innovation, always looking for ways to improve and create better user experiences.</p>

      <div className='flex flex-wrap  pl-60 pr-60 gap-10 ml-16 mt-10 xs:pl-10 xs:pr-10 xs:mr-5 xs:ml-16 sm:pl-28 sm:pr-16  md:pl-24 md:pr-36 lg:pl-0 lg:pr-0 xl:pl-16 xl:pr-16'>
        <img src={Img1} className='w-32  xs:w-16 sm:w-20 md:w-20'  alt="" />
        <img src={Img2} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img3} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img4} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img5} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img6} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img7} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img8} className='w-32 xs:w-16 sm:w-20  md:w-20'  alt="" />
        <img src={Img9} className='w-32 xs:w-16 sm:w-20  md:w-20 '  alt="" />
        <img src={Img10} className=' w-32 xs:w-16 sm:w-20  md:w-20  '  alt="" />
      </div>
    </div>
  )
}

export default SkillLogos
