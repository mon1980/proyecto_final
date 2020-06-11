import React from 'react';
import './DondeEstamos.scss';
import entrada from '../../assets/img/fotoEntrada1.jpg';
import entrada2 from '../../assets/img/fotoEntrada2.jpg';


const DondeEstamos = () => {
    return ( 

        <div className="contenedorDondeEstamos">
            <div className="textoDondeEstamos">

            <h1><i>Donde Estamos</i></h1>
            <p>Contamos con un gran espacio de diversión y entretenimiento en la <strong>Avd. Constitución, numero 376. Madrid</strong></p>

            <p>Un gran local en el cual se encontrarán las aulas de estudio y las de manualidades, la cocina, el merendero y una enorme explanada para realizar las actividades,  a parte  un patio con parque para los más pequeños y para realizar juegos, actividades y acampadas con los más mayores.</p>
            </div>
            <div className="homeContainer">
            <img src={entrada} alt="imagen" /> 
            <img src={entrada2} alt="imagen"/>

        </div>
        </div>

     );
}
 
export default DondeEstamos;