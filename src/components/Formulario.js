import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear State de Cita
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        descripcion: '',
    })

    //Crear State de Error
    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que alguien escribe en un input
    const actualizarState = e => {
        actualizarCita(
            {
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    //extraer los valores
    const {mascota, propietario, fecha, hora, descripcion} = cita

    //Cuando el usuario hace el submit
    const submitCitas = e => {
        e.preventDefault()

        //Validacion de datos
        if (mascota.trim() === '' || propietario.trim() === '' ||
            fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '') {
            actualizarError(true)
            return
        }

        //Eliminar el mensaje previo
        actualizarError(false)
        //Asignar un ID
        cita.id = uuidv4()
        //Crear la cita
        crearCita(cita)
        //Reiniciar el Form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            descripcion: '',
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            <form 
            action=""
            onSubmit={submitCitas}>
                <label htmlFor="mascota">Nombre Mascota</label>
                <input 
                type="text" 
                name="mascota" 
                id="mascota"
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={actualizarState}
                value={mascota} />

                <label htmlFor="propietario">Nombre Propietario</label>
                <input 
                type="text" 
                name="propietario" 
                id="propietario"
                className='u-full-width'
                placeholder='Nombre Dueño'
                onChange={actualizarState}
                value={propietario} />

                <label htmlFor="fecha">Fecha</label>
                <input 
                type="date" 
                name="fecha" 
                id="fecha"
                className='u-full-width'
                onChange={actualizarState}
                value={fecha} />

                <label htmlFor="hora">Hora</label>
                <input 
                type="time" 
                name="hora" 
                id="hora"
                className='u-full-width'
                onChange={actualizarState}
                value={hora} />

                <label htmlFor="descripcion">Sintomas</label>
                <textarea 
                name="descripcion" 
                id="descripcion" 
                className='u-full-width' 
                placeholder='Descripcion Sintomas'
                onChange={actualizarState}
                value={descripcion}
                ></textarea>

                <button 
                type="submit"
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;