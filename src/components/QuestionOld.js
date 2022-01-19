// import React, { useEffect, useState } from "react";
// import questionJs from "./api/questions";
// import Status from "./StatusBar";
// import Form from "react-bootstrap/Form";
// import { Button, Container } from "react-bootstrap";

// export default function Question() {
//   const dataFromFile = { ...questionJs };

//   const [questionData, setQuestion] = useState({});

//   const [counter, setCounter] = useState(0);

//   const [isDisabled, setIsDisabled] = useState(false);

//   // const [isChecked, setIsChecked] = useState(false);

//   // here is the check box
//   const [checkedState, setCheckedState] = useState(
//     // Array.from(Object.entries(dataFromFile)[0][1].answers), (item) => false
//     new Array(Object.entries(dataFromFile)[counter][1].answers.length).fill(
//       false
//     )
//   );

//   // Use state to store the correct answer
//   const [isCorrect, setIsCorrect] = useState(
//     new Array(Object.entries(dataFromFile)[counter][1].answers.length).fill(
//       undefined
//     )
//   );

//   // const [current, setCurrentAnswer] = useState()
//   // const [currentQuestion, setCurrentQuestion] = useState(0)
//   // const [currentAnswer, setCurrentAnswer] = useState()

//   useEffect(() => {
//     const test = async () => {
//       try {
//         //'await' has no effect on the type of this expression.ts(80007)
//         setQuestion({ ...dataFromFile });

//         if (questionData[counter])
//           setCheckedState(
//             Array.from(
//               Object.entries(questionData[counter][1].answers),
//               () => false
//             )
//           );

      
//       } catch (e) {
//         console.log("Error loadong the file,", e.message);
//       }
//     };
//     test();
//   }, []);

//   console.log("This is Correct", isCorrect);

//   const handleOnChange = (idx1) => {
//     const oldarray = [...checkedState];
//     oldarray[idx1] = !oldarray[idx1];

//     setCheckedState([...oldarray]);
//     // const oldCorrect = [...isCorrect]
//     // setIsCorrect([...oldCorrect, true])
//   };

//   /* -------------------------------------------------------------------------- */
//   /*                   Function to handle the correct answers                   */
//   /* -------------------------------------------------------------------------- */
//   // [false, false, false]
//   function correctAnswerHandler() {
//     const solutions = Object.entries(dataFromFile)[counter][1].solutions;
//     console.log("solutions is:", solutions);

//     const oldArray = [...isCorrect];
//     solutions.map((index) => (oldArray[index] = true));
//     setIsCorrect([...oldArray]);
//   }

//   // checkedState initial
//   const testArray = [false, false, false, false, false];
//   // solutions
//   const sol = [2, 3]; //  [false, false, true, true, false]
//   // checkedState updated by user
//   const updatedTestArray = [false, false, true, true, false];

//   const compareAnswer = [];

//   // // if testArray[sol[0]] && testArray[sol[1]] === true
//   // console.log('testing array is ', updatedTestArray.map((item, index) => updatedTestArray[index] )) // this is a correct anaswer

//   for (let i = 0; i < updatedTestArray.length; i++) {
//     // compareAnswer.push(updatedTestArray[(sol[i])]
//     // compareAnswer.push(updatedTestArray.indexOf(true))
//     if (updatedTestArray[i] === true) compareAnswer.push(i);
//   }

//   // if compareAnswer.lenght === sol.length
//   function arrayEquals(a, b) {
//     return JSON.stringify(a) === JSON.stringify(b);
//   }

//   // console.log('-----------------------------------')
//   // console.log('Test check arrays if true?', compareAnswer === sol)
//   // console.log('-----------------------------------')
//   // console.log('This is CompareAnswer', compareAnswer);
//   // console.log('Test check arrays if true?', arrayEquals(compareAnswer, sol))
//   // console.log('-----------------------------------')
//   // console.log(    );

//   function validatingAnswers() {
//     //    if (Object.entries(dataFromFile)[counter][1].solutions === compareAnswer)
//   }

//   // ======================== END of the function to handle the correct answers===================
//   /* -------------------------------------------------------------------------- */
//   /*                      // Start the retur of the content                     */
//   /* -------------------------------------------------------------------------- */
//   return (
//     <div className="mx-5">
//       <Status />
//       <h2 className="mx-5">
//         {questionData && Object.keys(questionData).length
//           ? Object.entries(questionData)[counter][1].question
//           : null}
//       </h2>
//       <Form className="mx-5">
//         {
//           //Object.entries(questionData)[counter][1].answer
//           questionData && Object.keys(questionData).length
//             ? Object.entries(questionData)[counter][1].answers.map(
//                 (item, idx2) => (
            //       <div key={idx2} className="mb-3">
            //         <pre className="w-100">
            //           <Form.Check
            //             label={item.text}
            //             type="checkbox"
            //             disabled={isDisabled}
            //             // isValid= {true}
            //             // setIsChecked(!isChecked)
            //             checked={!!checkedState[idx2]}
            //             isValid={isCorrect[idx2]}
            //             isInvalid={isCorrect[idx2]}
            //             onChange={() => {
            //               handleOnChange(idx2);
            //             }}
            //           />
            //         </pre>
            //       </div>
            //     )
            //   )
//             : null
//         }
//       </Form>
//       <Button
//         className="mx-5"
//         onClick={() => {
//           // setCounter(counter + 1)
//           // setCheckedState([])
//           const oldArray = [...isCorrect];
//           oldArray.map(
//             (item, index) => (oldArray[index] = checkedState[index])
//           );
//           setIsCorrect([...oldArray]);
//           setIsDisabled(true);
    
//         }}
//       >
//         Submit
//       </Button>
//     </div>
//   );
// }
