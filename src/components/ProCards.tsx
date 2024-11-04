import { Link } from "react-router-dom"
import { Card,CardImg,CardBody,CardTitle,CardText,CardFooter, } from "react-bootstrap"
interface CardProps{
    image: string;
    title: string;
    text: string;
    footer: string;
    link: string
}

function ProCards({image,title,text,footer,link}:CardProps) {
  return (
    <div>
        <Link to={link} target="_blank">
            <Card className= "bg-gray-800 text-white w-80 h-full p-2 border-cyan-500 rounded-lg text-start hover:animate-pulse shadow-xl shadow-cyan-950">
                <CardImg className="h-40 border-none" src={image}/>
                <CardBody>
                    <CardTitle className="font-bold text-2xl text-cyan-500">{title}</CardTitle>
                    <CardText>{text}</CardText>
                    <CardFooter className="text-green-500">{footer}</CardFooter>
                </CardBody>
            </Card>
      </Link>
    </div>
  )
}

export default ProCards


