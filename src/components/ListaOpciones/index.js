import './opciones.css'

const Opciones = (props) => {

    // En react para recorrer un arreglo es conveniente usar el metodo map
    //Map solo sirve para arreglos.
    const manejarCambio = (e) => {
        console.log('cambio', e.target.value);
        props.actualizarEquipo(e.target.value)
    };

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
};

export default Opciones