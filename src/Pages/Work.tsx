import ProCards from "../components/ProCards"
import card1 from '../assets/Images/work/card1.png'
import card2 from '../assets/Images/work/card2.png'
import card3 from '../assets/Images/work/card3.png'


const Work = () => {
  return (
    <div>
      <div id="work" className="">
      <div className="pl-28 pr-40 pb-6 lg:pl-0 lg:pr-0 xs:pl-6 xs:pr-6 2xs:pl-4 2xs:pr-3" >
      <h1 className="pt-28 mb-4 text-4xl font-bold">My portfolio includes these <span className="font-extrabold text-5xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Projects:</span>
      </h1>
      <p className="text-lg font-semibold ">
        My goal is to leverage my skills and experience to create engaging, high-performance web applications that provide an exceptional user experience. I am excited to work with forward-thinking companies where I can contribute to innovative projects and grow as a developer.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
      <ProCards 
        title="ApexBot"
        text="This AI chatbot website delivers real-time responses with a sleek design, built using React, Tailwind CSS, Appwrite, and APIs."
        image={card2}
        link="https://github.com/Arshanashraf/AI-powered-Apexbot"
        footer="#react #redux #appwrite #tailwind  #react-router-dom #react-hook-form #huggingface/inference-api"/>
      <ProCards 
        title="Mega Blog"
        text="It is a simple, user-friendly platform for creating and publishing blogs with ease"
        image={card1}
        link="https://github.com/Arshanashraf/megaBlog-react-appwrite"
        footer="#react #redux #appwrite #tailwind #tinymce #react-router-dom #react-hook-form"/>
        
        
        <ProCards 
        title="Ecommerce Website"
        text="As a Front-End developer intern at DevelopersHub.co, I've developed a fully functional e-commerce website "
        image={card3}
        link="https://github.com/Arshanashraf/Ecommerce-webDesign"
        footer="#react #redux #tailwindcss #figma #react-router-dom"/>
        
      </div>
    </div>
    </div>
  )
}

export default Work
