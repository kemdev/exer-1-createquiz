import React, { useEffect, useState } from "react";
import questionJs from "./api/questions";
import Status from "./StatusBar";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { AiFillCheckCircle as CheckIcon } from 'react-icons/ai'
import {MdOutlineNavigateNext as NextIcon} from 'react-icons/md'

const result = Object.keys(questionJs).map((key) => questionJs[key]);

export default function Question() {
console.log('result is:',result)
  // change the counter when on click
  const [counter, setCounter] = useState(0);


  // set the question according to the current counter.
  const [question, setQuestion] = useState([...result][counter]);
  const [answer, setAnswer] = useState([...result][counter]);

  // store default solutions as an array of true and false according to the index of the solution. 
  const [correctAnswers, setCorrectAnswers] = useState(
    new Array(question.answers.length).fill(false)
  );

  //NOTE here is where we store the user chekbox selection
  const [checkedBox, setCheckedBox] = useState(
    new Array(question.answers.length).fill(false)
  )

  // Green or Red
  const [isCorrect, setIsCorrect] = useState([])

  const [toDisable, setToDisable] = useState()


  useEffect(() => {
    const solutionArray = question.solutions;
    const oldAnswerArray = [...correctAnswers];
    question.answers.map((item, index) => {
      const solutionIndex = solutionArray[index]
      // oldAnswerArray[solutionIndex] = true
      if (solutionIndex) oldAnswerArray.splice(solutionIndex, 1, true)
    });

    
    setCorrectAnswers([...oldAnswerArray]);
    console.log('Correct answer solution array', solutionArray);
    setQuestion([...result][counter])
    

  } , []);

  // to handle selected checkbox from the user
  const handleOnChange = (idx) => {
    const oldarray = [...checkedBox];
    oldarray[idx] = !oldarray[idx];

    setCheckedBox([...oldarray]);
    // const oldCorrect = [...isCorrect]
    // setIsCorrect([...oldCorrect, true])
  };

  console.log('----------------------------------------');
  console.log('correct Answer solution', correctAnswers);

  function compareAnswers(solutions, userAnswers) {
    const temp = []

    for (let i = 0; i < solutions.length; i++) {
      solutions[i] === userAnswers[i] ? temp.push(true) : temp.push(null)
    }


    // console.log('user Selected answer', temp);
    setIsCorrect(temp)
    setToDisable(true)
  }
  console.log('user Checkedbox ', checkedBox);

  const submitHandler = () => {

  }

  return (
    <>
      <Container fluid="md" className="px-5">
        <Status counter={counter + 1} questionLength={result.length} />

        <h2 className="mt-5">{question.question}</h2>

        <Form className="mt-4">
          {question.answers.map((item, index) => (
            <div key={index} className="mb-3">
              <pre className="w-100">
                <Form.Check
                  className="mt-3"
                  label={item.text}
                  type="checkbox"
                  disabled={toDisable}
                  // disabled={isDisabled}
                  // setIsChecked(!isChecked)
                  // checked={!!checkedState[idx2]}
                  // isValid={isCorrect[idx2]}
                  isValid={!!isCorrect[index]}
                  isInvalid={isCorrect.length > 1 ? !isCorrect[index] : false}
                  onChange={() => {
                    handleOnChange(index);
                  }}
                />
              </pre>
            </div>
          ))}
        </Form>
        <Button
          onClick={() => {
           
            !checkedBox.includes(true) ? alert('select at least one answer') : compareAnswers(correctAnswers, checkedBox)
           // compareAnswers(correctAnswers, checkedBox)
          
          }

          }
        > < CheckIcon className="icon" /> Submit</Button>
        <Button
        className="mx-2 text-white"
          onClick={() => {
            setCounter(counter + 1)
           
              

          }
        }
        > Next Question< NextIcon className="icon"/> </Button>
      </Container>
    </>
  );
}
