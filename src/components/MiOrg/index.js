import { useState } from 'react';
import './org.css'

const MiOrg = (props) => {

    //Estado - hooks
    //useState 
    // const [mostrar, actualizarMostrar] = useState(true)

    // //El valor inicial que tendra el estado 
    // //Sintaxis
    // //const [nombreVariable, funcionAActualizar]
    // const manejarClick = () => {
    //     console.log('Mostrar/Ocultar elemento', !mostrar)
    //     actualizarMostrar(!mostrar);
    // };

    return <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt='add' onClick={props.cambiarMostrar} />
    </section>
};  

export default MiOrg