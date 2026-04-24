import './App.css';
import { useEffect, useState, useMemo } from 'react';


function App() {
  const [nomes,setNomes]= useState([
    'William Campos',
    'William Seila',
    'William Marques',
    'Willaim Nascimento'
  ]);

  const [input, setInput] = useState('');

  const totalAgenda = useMemo(() => nomes.length, [nomes]);

  useEffect( () => {
    localStorage.setItem('agenda', JSON.stringify(nomes))
  }, [nomes])
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
          <h4>Total Agenda: {totalAgenda} nomes</h4>
        </div>
      </section>
    </>
  )
}; 

export default App;
