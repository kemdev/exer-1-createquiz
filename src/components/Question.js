import React, { useEffect, useState } from "react";
import questionJs from "./api/questions";
import Status from "./StatusBar";
import Form from 'react-bootstrap/Form'


export default function Question() {
    const dataFromFile = {...questionJs}

    const [questionData, setQuestion] = useState({});

    const [counter, setCounter] = useState(0)

    // const [isChecked, setIsChecked] = useState(false);
    // new Array(currentAnswer?.length).fill(false)
    const [checkedState, setCheckedState] = useState([])

    // const [current, setCurrentAnswer] = useState()
    // const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [currentAnswer, setCurrentAnswer] = useState()


    useEffect(() => {
       
            const test = async () => { 
                try{
            //'await' has no effect on the type of this expression.ts(80007)
                setQuestion({ ...dataFromFile});

                setCheckedState(Array.from(Object.entries(questionData[0][1].answers), item => false))
     
                // if (Object.entries(questionData)[0] !== undefined) {
                //     setCurrentQuestion(Object.entries(questionData)[0][1].question)
                //     setCurrentAnswer(Object.entries(questionData)[0][1].answers)
                // }
             
            }catch (e) {
                console.log('Error loadong the file,', e.message);
            }
        }
        test()
    }, []);



    // if (Object.entries(questionData)[counter - 1] !== undefined) {
    //     // Only for testing
    //     currentQuestion = Object.entries(questionData)[0][1].question
    //     currentAnswer = Object.entries(questionData)[0][1].answers

    //     // console.log(currentAnswer)
    // }

    console.log('IsChecked now is:', checkedState)

    console.log('Before calling setCheckedState: ', checkedState);
    const handleOnChange = (idx1) => {
        /*  const updatedCheckedState = checkedState?.map((item, index) => index === idx1 ? !item : item); */
        const oldarray = [...checkedState]
        oldarray[idx1] = !oldarray[idx1]

        setCheckedState([...oldarray]);

        console.log('After calling setCheckedState: ', checkedState);

    }


    console.log('B4 render questiondata:', questionData)
    
    return (
        <div className="mx-5">
            <Status />
            <h2 className="mx-5">Which ones are valid HTML document type definitions?</h2>
            <Form className="mx-5">
                { //Object.entries(questionData)[counter][1].answer
                    questionData && Object.keys(questionData).length ?
                        Object.entries(questionData)[counter][1].answers.map((item, idx2) => (
                        <div key={idx2} className="mb-3">
                            <Form.Check
                                label={item.text}
                                type="checkbox"
                                // isValid= {true}
                                // setIsChecked(!isChecked)
                                // currentAnswer[index] Simona code

                                checked={checkedState[idx2]}
                                onChange={() => handleOnChange(idx2)}


                            />
                        
                        </div>
                ))
            : null
            }
            </Form>
        </div>
    );
}
