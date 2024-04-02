import { useState } from 'react'
import Formulario from './components/Formulario'
import './App.css'

const data = {
  cuenta: Number(1),
  propina: Number(1),
  dividir: Number(1),
}

function App() {
  const [dinero, setDinero] = useState(data)

  return (
    <main className='container'>
      <header>
        <h2>Calculadora de Propinas</h2>
      </header>
      <Formulario propData={{ dinero, setDinero }} />
      <footer id='footer'>
        <p>
        Codified by <a href='https://github.com/moisesrmx' target='_blank'>Moises Roberto</a>
        </p>
      </footer>
    </main>
  )
}

export default App
