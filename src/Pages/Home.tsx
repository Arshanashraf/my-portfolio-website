import { Row,Col,} from "react-bootstrap"
import Button from "../components/Button"
import ThreeDModel from "../components/ThreeDModel"
import Triandle from '../assets/Images/3dShapes/triangle.png'
import '../components/floatingImage.css'
function Home() {
  return (
    <div className=" text-start">
        <Row>
            <Col className="mt-44 pl-11" lg="6" md="12" sm="12">
            <img className="h-20 absolute left-56 delay-1000 floating" src={Triandle} alt="" />
            <h1 className="flex flex-wrap text-5xl font-bold relative z-auto">Greetings, I'm <span className="ml-1 relative z-50 font-extrabold pt-1 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">M.Arshan Ashraf</span></h1>
                <p className="flex flex-wrap text-lg font-semibold p-3 z-50 relative">"Architects of the digital realm, shaping dreams into reality, one keystroke at a time."</p>
                
            <Button className="bg-cyan-500 mt-5 font-bold hover:bg-transparent hover:border-2 hover: border-cyan-500 animate-pulse">Download Resume</Button>
            <img className="h-48 absolute floating  left-72" src={Triandle} alt="" />
            </Col>
            <Col className="top-40 overflow-visible" lg="6">
            <img className="h-36 floating delay-1000 absolute right-36 top-36" src={Triandle} alt="" />
            {/* <h1>this is 3d image</h1> */}
            <div className="relative z-50">
            <ThreeDModel />
            </div>
            <img className="h-32 floating absolute bottom-52 -rotate-90" src={Triandle} alt="" /></Col>
            
        </Row>
    
    </div>
  )
}

export default Home
