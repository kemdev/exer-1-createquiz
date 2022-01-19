import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'


export default function Status(props) {

    const [question, setQuestion] = useState([])



    return (
        <>
            <Container className='d-flex justify-content-between mt-5 '>
                <div >
                    Question {props.counter}/{props.questionLength}
                </div>
                <div >
                    Score: 0
                </div>
            </Container>
            {/* Fix it later to be bolder and a little bit smaller. */}
            <hr className=' '/>
        </>
    )
}
