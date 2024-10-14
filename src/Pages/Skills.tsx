import Plx from "react-plx"
import Planet from "../assets/Images/parallax/planet.png"
import Satellite from "../assets/Images/parallax/satellite.png"
import Astronaut from "../assets/Images/parallax/astronaut.png"
function Skills() {
  return (
    <div className=" h-screen bg-cover bg-center bg-[url('src/assets/Images/parallax/parallax-bg.png')]">
        <div>
            <Plx 
            parallaxData = {[
                {
                    start: 400,
                    end: 1200,
                    properties:[{
                        startValue: 400,
                        endValue: 0,
                        property: "translateY"
                    }]
                }
            ]} 
            ><img className="h-96 relative ml-96 pl-28 top-48 floating xs:ml-0 xs:pl-24 xs:h-72 sm:ml-0 md:ml-10 md:pl-60 md:h-80 lg:ml-48 xl:pl-0 xl:ml-80" src={Planet} alt="" /></Plx>
        </div>
        <div>
            <Plx 
            parallaxData = {[
                {
                    start: 400,
                    end: 1200,
                    properties:[{
                        startValue: 700,
                        endValue: 0,
                        property: "translateX"
                    },
                    {
                        startValue: 0,
                        endValue: -250,
                        property:"translateY"
                    }]
                }
            ]} 
            ><img className="h-32 absolute left-52 floating xs:left-10 xs:h-16 xs:top-24 sm:left-20 sm:h-28 md:left-32 md:top-24 md:h-28 lg:left-28 " src={Satellite} alt="" /></Plx>
        </div>
        <div>
            <Plx 
            parallaxData = {[
                {
                    start: 400,
                    end: 1200,
                    properties:[{
                        startValue: 0,
                        endValue: 750,
                        property: "translateX"
                    },
                    {
                        startValue: 0,
                        endValue: -100,
                        property:"translateY"
                    },{
                        startValue:50,
                        endValue:0,
                        property:"rotate",
                    }]
                }
            ]} 
            ><img className="h-32 absolute left-52 floating xs:h-14 xs:-left-80 xs:top-28 sm:h-28 sm:-left-56 md:h-24 md:-left-40 md:top-24 lg:-left-28 xl:-left-6" src={Astronaut} alt=""  /></Plx>
        </div>
    </div>
  )
}

export default Skills
