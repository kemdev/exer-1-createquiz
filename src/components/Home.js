import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Question from "./Question";


export default function Home() {
    return (
        <Container fluid='md' className="pt-5  px-5" >
            <p>This is a quiz about HTML, CSS and JavaScript, that can be used to repeat all the basics that are needed in every's life of a web developer. </p>
            <p>Find out if you know all the details!</p>
           <Link to="/question" > <Button>Let's have some fun</Button> </Link>
        </Container>
    )
}
