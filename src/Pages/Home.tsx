import { Row,Col,} from "react-bootstrap"
import Button from "../components/Button"
import ThreeDModel from "../components/ThreeDModel"
function Home() {
  return (
    <div className=" text-start">
        <Row>
            <Col className="mt-44" lg="6" md="6" sm="12">
            <h1>Greetings, I'm  <span className='name'>M.Arshan Ashraf</span></h1>
                <p>"Architects of the digital realm, shaping dreams into reality, one keystroke at a time."</p>
            <Button className="bg-cyan-500">Download Resume</Button>
            </Col>
            <Col className="top-40 " lg="6">
            {/* <h1>this is 3d image</h1> */}
            <ThreeDModel /></Col>
            
        </Row>
    
    </div>
  )
}

export default Home
