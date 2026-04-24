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
  function adicionar() {
    setNomes([...nomes, input]);
    setInput("");
  }

  const [contato, setContatos] = useState([])
  useEffect(() =>{
    const dados = localStorage.getItem("agenda");

    if (dados) {
      setContatos(JSON.parse(dados));
    }
  }, [nomes])

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
            <button type = 'button' onClick={adicionar}>
              Adicionar
            </button>
          </p>
          <h4>Total Agenda: {totalAgenda} nomes</h4>
        </div>
        <div>
          <h4>Minha Agenda do Local Storage</h4>
          <ul className="lista">
            {contato.map((contato, indice) => (
              <li key={indice}>{indice}. {contato}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}; 

export default App;
