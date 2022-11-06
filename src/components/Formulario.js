import React, {Fragment, useState} from 'react'

const Formulario = () => {

    //Crear State de Cita
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        descripcion: '',
    })

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

    console.log(mascota)

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form action="">
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