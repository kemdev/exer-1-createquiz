import Header from "./components/header"


// import styling 
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// import React comonents
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Question from "./components/Question";
import Unknown from "./components/Eror404";



//test to import the answers from here
import questionJs from "./components/api/questions";


function App() {







  return (
    <>
      <Header />
      <BrowserRouter>

        <Switch>
          {/* <Route exact path='/' render={() => <Home  toLoadQuestions={loadQuestions}/>}  />

          <Route exact path='/question' render={()=> 
          <Question  questions={questions} />
          }/> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/question' component={Question} />

          <Route exact component={Unknown} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;


