import React from 'react';
import './QuienesSomos.scss';
import ludoteca from '../../assets/img/ludoteca1.jpg';
import ludoteca2 from '../../assets/img/ludoteca2.jpg';
import ludoteca3 from '../../assets/img/ludoteca3.jpg';
import ludoteca4 from '../../assets/img/ludoteca4.jpg';


const QuienesSomos = () => {
    return ( 
        
        <div className="homeContainer">
            <div className="quienesSomos">
            <div className="texto">
            <h1 className="tituloQuienesSomos"><i>Quienes somos</i></h1>
            <p className="parrafo1"><strong>Las ludotecas son espacios ocupados por niños y niñas, sus familias y los y las monitoras, pensados y diseñados para el juego y para favorecer el desarrollo de todas las capacidades de los más pequeños, contribuyendo de esta manera a su desarrollo integral.</strong></p>
            <p className="parrafo2"><strong>Y ¿por qué es tan importante el juego?</strong></p>
            <p className="parrafo3">Diversión, enriquecimiento, imaginación, juegos , cooperación, socialización, juguetes, placer, satisfacción, sorpresa, disfraces, amigos y amigas, empatía, libertad, talleres tolerancia, ilusión, aprendizaje....</p>
            
                <p>Es la actividad natural de los niños y niñas.</p>
                <p>Es su medio para aprender.</p>
               
 
            </div>
        </div>
        <div className="imagenes">
        <img src={ludoteca} alt="imagen" /> 
        <img src={ludoteca2} alt="imagen"/>
        <img src={ludoteca3} alt="imagen"/>
        <img src={ludoteca4} alt="imagen"/>
        </div>
        </div>
      
        
     


  
    


     );
}
 
export default QuienesSomos;