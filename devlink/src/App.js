import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
     <h2>devlink</h2>
     <Bemvindo />
    </div>
  );
}

function Bemvindo(){
  //const nome = prompt('qual o seu nome?');
  const [nome, setNome] = useState(prompt('seu nome'));
  if(nome != ''){
    setNome('');
  }
  

  return (
    document.write(`Bem-vinda ${nome}`)
  )
}

export default App;
