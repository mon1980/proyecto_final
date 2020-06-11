import React from 'react';
import ludoteca from '../../assets/img/dinosauriohome.jpg';
import './Inicio.scss';


const Inicio = () => {
    return ( 

        <div className="homeContainer">
            <div className="bienvenida"></div>
            <img src={ludoteca} alt="imagen" className="fondo"/> 
            <div className="texto-encima">
                <div className="tituloDinosaurios"><p>Bienvenidos a Dinosaurios</p></div>
                <p>Ludoteca orientada a niños de 0 a 10 años, en horario de 08:00 a 21:00 ininterrumpidamente, donde desarrollarán aspectos fundamentales de su crecimiento como la psicomotricidad, el juego en equipo o la creatividad...</p>
                <p>Contamos con amplia experiencia y personal especializado. Los niñ@s aprenderán en un ambiente agradable y flexible, a través del juego y talleres entretenidos. No importa la edad de los peques hasta los 6 años, seguro que encontrarás lo que buscas o necesitas en nuestro amplio y flexible horario, talleres y precios.</p>
                <p>Conozca nuestra filosofia, proyectos y a nuestro equipo. Visítenos durante nuestro horario de apertura: de 8:00 a 21:00h.</p>         
            </div>
           

        </div>


     );
}
 
export default Inicio;








