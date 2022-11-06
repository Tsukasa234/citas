import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = []
  }

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])


  //Funcion que tome las citas actuales y agregue las nuevas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //Funcion para eliminar la citas
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id )
    guardarCitas(nuevasCitas)
    // console.log(id)
  }

  //Revisar si existen citas
  const mensajeCitas = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administracion de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
             />
          </div>
          
          <div className="one-half column">
            <h2>{mensajeCitas}</h2>
            {citas.map(cita => (
              <Cita 
              key = {cita.id}
              cita = {cita}
              eliminarCita = {eliminarCita}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
