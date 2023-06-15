import { useState } from 'react'
import './formulario.css'  
// Se importa la funcion de index.js
// Ya que al llamar asi a nuestro archivo automaticamente al importar
//lo hara por defecto el archivo index.js y nos era necesario darle el nombre completo del archivo
import CampoTexto from '../textos'
import Opciones from '../ListaOpciones'
import Boton from '../Boton'


const Formulario = (props) =>{
    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('Dev Ops');

    const { registrarColaborador } = props

    const manejarEnvio = (evento) =>{
        console.log('Manejar el envio');
        evento.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosEnviar);
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h1>Rellena el formulario:</h1>
            <CampoTexto 
            titulo='Nombre' 
            placeholder='Ingresa tu nombre' 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo='Puesto' 
            placeholder='Ingresar puesto' 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto titulo='Foto' placeholder='Subir una foto' 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <Opciones 
            valor={equipo}  
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

// Se usa esto para poder importar este archivo o componente
export default Formulario