import logo from './logo.svg';
import './App.css';
import './components/Saludar'
import { Saludar } from './components/Saludar';

function App() {

  const user = {
    nombre: "Unidata SL",
    edad:20,
    color:"Rojo",
  };

  const saludarFn = (nombre, edad) => {
    // console.log('hola ' + nombre+ 'tiene ' + edad + ' años.');
    console.log(`Hola ${nombre}, tiene ${edad} años`)
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar  userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
