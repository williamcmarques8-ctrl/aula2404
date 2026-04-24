import './App.css';
import { useState } from 'react';


function App() {
  const [nomes,setNomes]= useState([
    'William Campos',
    'William Seila',
    'William Marques',
    'Willaim Nascimento'
  ]);

  const [input, setInput] = useState('');

  function adcionar() {
    setNomes([...nomes, input]);
    setInput("");
  }

  return (
    <>
      <section id='center'>
        
        <div>
          <ul>{ 
            nomes.map( nome =>(
              <li key={nome}>{nome}</li>
            ))
            }
          </ul>
        </div>
        <div>
          <p>
            <input type='text' value = {input}
            onChange={e => setInput(e.target.value)}
            />
            <button type = 'button' onClick={adcionar}>
              Adcionar
            </button>
          </p>
        </div>
      </section>
    </>
  )
}; 

export default App;
