import { useState } from 'react'
import FormularioCita from './components/FormularioCita'
import ListaCitas from './components/ListaCitas'

const App = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita])
  }

  console.log(citas);

  return (
    <div>
      <h1>Agendar citas</h1>
      <FormularioCita agregarCita={agregarCita}/>
      <ListaCitas citas={citas}/>
    </div>
  )

}

export default App
