import React, { Fragment } from 'react';
import logo from '../components/img/logo-RandM.png'
import home from '../components/img/Home.png'
import campana from '../components/img/Icono de campana.png'
import camara from '../components/img/Copia de camera-movie.png'

const Navbar = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='Logo'>
                    <img className='Logo-RandM' 
                        src={logo}alt='logo1'
                    />
                    <img className='Campana' 
                        src={campana} alt='campana'
                    />
                    <img className='Home' 
                        src={home} alt='home'
                    />
                </div>
            </div>
            <div className='Camara-movie'>
                <img className='Camera-movie' 
                    src={camara} alt='camara-movie'
                />
                <h2 className='Titulo-personajes'>Personajes</h2>
            </div>
        </Fragment>
        
    );
};
export default Navbar;