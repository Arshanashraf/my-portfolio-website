import { Row,Col,} from "react-bootstrap"
import Button from "../components/Button"
import ThreeDModel from "../components/ThreeDModel"
import Triandle from '../assets/Images/3dShapes/triangle.png'
import '../components/floatingImage.css'
function Home() {
  return (
    <div id="home" className=" text-start ">
        <Row>
            <Col className="mt-44 pl-11" lg="6" md="12" sm="12">
            <img className="h-20 absolute left-56 delay-1000 floating delay2 rotate1" src={Triandle} alt="" />
            <h1 className="flex flex-wrap text-4xl font-bold relative z-10 pl-12">Greetings, I'm <span className="ml-1 relative z-50 font-extrabold text-5xl 2xl:text-6xl  md:-mt-3 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">M.Arshan Ashraf</span></h1>
                <p className="flex flex-wrap text-lg font-semibold md:pl-20 pr-20  z-10 relative pl-14 pt-4">"Architects of the digital realm, shaping dreams into reality, one keystroke at a time."</p>
                
            <Button className="bg-cyan-500 mt-5 ml-14 font-bold hover:bg-transparent hover:border-2 hover: border-cyan-500 animate-pulse">Download Resume</Button>
            <img className="h-48 absolute floating  left-72" src={Triandle} alt="" />
            </Col>
            <Col className="top-40 overflow-visible" lg="6">
            <img className="h-36 floating delay2 rotate2 absolute right-36 top-36 " src={Triandle} alt="" />
            {/* <h1>this is 3d image</h1> */}
            <div className="relative z-20 lg:top-0 md:-top-48 sm:-top-56  xs:-top-52">
            <ThreeDModel />
            </div>
            <img className="h-32 floating delay1 absolute bottom-52 " src={Triandle} alt="" /></Col>
            
        </Row>
    
    </div>
  )
}

export default Home
