import React, { useEffect, Fragment } from 'react'
import { getAllPrecios } from '../../redux/actions/precios'
import { connect } from 'react-redux';
import './Precios.scss';
const Precios = (props) => {
    useEffect(() => {
        getAllPrecios()
        .catch(console.error)
    }, [])
    return (
        <Fragment>
        <h1 className="tituloPrecios"><i>Precios</i></h1>
        <div className="precios">
            {props.precios?.map(precio => <div className="precio" key={precio._id}>
                <p className="cuotaMensual"><strong>{precio.cuota_mensual}</strong></p>
                <p className="cuotaSemanal"><strong>{precio.cuota_semanal}</strong></p>   
            </div>)}
        </div>
        <p>Confirmar precios en establecimiento.</p>
        <p>Disponible el pago por tarjeta (T.P.V.) y domiciliación bancaria a partir de septiembre de 2018.</p>
        <p>La facturación se realiza por periodos naturales (meses, semanas y horas) no realizándose otras segmentaciones.</p>
        <p>El abono de las tarifas semanales y mensuales se realizará por adelantado al disfrute del servicio.</p> 
        <p>El cómputo de las horas sueltas se realizará al finalizar el mes natural en el que se han disfrutado, debiendo realizarse el abono en la primera semana del mes siguiente.</p>
        <p>No se realizan descuentos por grupos y/o hermanos.</p>
        </Fragment>
    )
}
const mapStateToProps = ({ precio }) => ({ precios: precio.precios });
export default connect(mapStateToProps)(Precios);