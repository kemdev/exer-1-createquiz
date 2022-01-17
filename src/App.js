import Header from "./components/header"


// import styling 
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import Unknown from "./components/Eror404";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/question' component={Question} />
          <Route exact component={Unknown} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;


