import { useState } from 'react';
import {v4 as uuid } from 'uuid'
import './App.css';
// Importando header
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer  from './components/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false); 

  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff',
    },
    {
      id: uuid(),
      titulo:  'Data Science',
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e2',
    },
    {
      id: uuid(),
      titulo:'Dev Ops',
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7e8',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#db6ebf',
      colorSecundario: '#fae9f5',
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#ffba05',
      colorSecundario: '#fff5d9',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#ff8a29',
      colorSecundario: '#ffeedf',
    },  
  ])
  console.log(equipos);
  // Ternario --> condicion ? seMuestra : noSeMuestra

  //Otra forma de reemplazar ternario: 
  //condicion && seMuestra

  const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario)
  };

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo Colaborador', colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador: 
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    console.log(nuevosColaboradores);
  }


  //Actualizar color de equipo 
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
        if (equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
    });

    actualizarEquipos(equiposActualizados)
  }




  return (
    <div>
      {/* Creando el componente header, una recomendacion es crear los componentes con letra mayuscula al inicio */}
      <Header />
      {/* Ternario: {mostrarFormulario ?  <Formulario /> : <></>} */}
      {mostrarFormulario &&  <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador= {registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { 
      equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />
      ) 
      }

      <Footer/>

    </div>
  );
}

export default App;
