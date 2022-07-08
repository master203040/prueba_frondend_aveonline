import React, { Fragment,useState,useEffect } from 'react';
import vivos from '../components/img/Icono de vivo.png'
import muertos from '../components/img/Icono de muerto.png'
import buscar from '../components/img/Icono de busqueda.png'
import imagen from '../components/img/Icono imagen.png'

const Personajes = () => {

    const [personaje,setPersonaje]= useState([])
    const [info,setInfo]= useState({})
    
    

    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data.results)
            setPersonaje(data.results)
            setInfo(data.info)
        })
        .catch(error =>{console.log('Error:',error)})
        
    }, []);

    return (


        <Fragment>
            <div className='Estado-lista'>
                <div className='Estado-total'>
                    <p>Total de personajes</p>
                </div>
                <div className='Estado-vivos'>
                    <img className='Icono-vivo'src={vivos} alt='icono-1'/>
                    <p>Personajes vivos</p>
                    <p>|</p>
                    <img  className='Icono-muertos' src={muertos} alt='icono-1'/>
                    <p>Personajes Muertos</p> 
                </div>
                <div className='Busqueda'>
                    <img  className='Icono-busqueda' src={buscar} alt='busqueda'/>
                    <input type="search" placeholder='Buscar' />
                </div>
            </div>
            <div className='Body-contenedor'>
                    <table className='contenedor-table'>
                        <thead>
                            <th>Nombre</th>
                            <th>Vivo</th>
                            <th>Especie</th>
                            <th>Genero</th>
                            <th>Origen</th>
                            <th>Locacion</th>
                            <th>Capitulo</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                        {personaje.map((personaje,index)=>(           
                            <tr key={index}>
                                <td>{personaje.name}</td>
                                <td>
                                    <img className='Icono-vivo1'src={vivos} alt='icono-1'/>
                                    {personaje.status}           
                                </td>
                                <td>{personaje.species}</td>
                                <td>{personaje.gender}</td>
                                <td>{personaje.origin.name}</td>
                                <td>{personaje.location.name}</td>
                                <td>{personaje.episode.name}</td>
                                <td>{personaje.created}</td>
                                <td>
                                    <img src={imagen}alt='img'/>
                                    <a href={personaje.image}>Acciones</a>
                                </td>
                                
                            </tr>  

                        ))}
                            
                        </tbody>
                    </table>
                </div>
        </Fragment>
        
    );
};

export default Personajes