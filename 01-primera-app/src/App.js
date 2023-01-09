import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';



function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
    
  }, [contar]);
  


  const startStop = () =>{
    setStateCar(!stateCar);
    setContar(contar+1);
    
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche está : {stateCar ? "Arrancado" : "Parado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={startStop}> Arrancar / Parar</button>
      </header>
    </div>
  );
}

export default App;
