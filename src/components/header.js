import { Container } from "react-bootstrap";
export default function Header() {
    
    return (
      <Container className="px-5 pt-5">
        <h1 className="  display-2" >My little Quiz</h1>
          <h4 className="text-secondary">Check your knowledge!</h4>
       
      </Container>
    );
  }