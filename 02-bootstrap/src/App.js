import logo from './logo.svg';
import { Button, Accordion, Card } from "react-bootstrap";
import { ReactComponent as ReactIcon} from "./assets/react.svg"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Contacto from './pages/Contacto';
import { QuienSoy } from './pages/QuienSoy';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Router >
        <div>
          <Link to="/contacto">
          <button>Contacto</button>
          </Link>

          <Link to="/quien-soy">
          <button>Contacto</button>
          </Link>

        </div>

      <Switch>
        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/quien-soy">
          <QuienSoy />
        </Route>

      </Switch>





      </Router>
      
      <ReactIcon />


    </div>
  );
}

export default App;
