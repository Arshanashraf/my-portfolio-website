import ProCards from "../components/ProCards"
import card1 from '../assets/Images/work/card1.png'
import card2 from '../assets/Images/work/card2.jpg'
import card3 from '../assets/Images/work/card3.png'


const Work = () => {
  return (
    <div>
      <div id="work" className="">
      <div className="pl-28 pr-40 pb-6 lg:pl-0 lg:pr-0">
      <h1 className="pt-28 mb-4 text-4xl font-bold">My portfolio includes these <span className="font-extrabold text-5xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Projects:</span>
      </h1>
      <p className="text-lg font-semibold ">
        My goal is to leverage my skills and experience to create engaging, high-performance web applications that provide an exceptional user experience. I am excited to work with forward-thinking companies where I can contribute to innovative projects and grow as a developer.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
      <ProCards 
        title="Mega Blog"
        text="It is a simple, user-friendly platform for creating and publishing blogs with ease"
        image={card1}
        link="https://github.com/Arshanashraf/megaBlog-react-appwrite"
        footer="#react #redux #appwrite #tailwind #tinymce #react-router-dom #react-hook-form"/>
        
        <ProCards 
        title="Texts Web Clone"
        text="This web application clone is entirely based on parallax effects and animations."
        image={card2}
        link="https://github.com/Arshanashraf/Texts-App-Clone"
        footer="#react #parallax #animation #Bootstrap #htmlcss"/>
        <ProCards 
        title="Car Store"
        text="In this web-based project, I utilized animations, a slider, and Bootstrap cards."
        image={card3}
        link="https://github.com/Arshanashraf/Car-Store-Vite-React"
        footer="#react #Bootstrap #animation #htmlcss"/>
        
      </div>
    </div>
    </div>
  )
}

export default Work
