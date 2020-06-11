import React, { useEffect, Fragment } from 'react'
import { getAllActivities } from '../../redux/actions/activities'
import { connect } from 'react-redux';
import './Talleres.scss';
const Talleres = (props) => {
    useEffect(() => {
        getAllActivities()
        .catch(console.error)
    }, [])
    return (
        <Fragment>
        <h1 className="tituloTalleres"><i>Talleres</i></h1>
        <div className="activities">
            {props.activities?.map(activity => <div className="activity" key={activity._id}>
                <p className="titulo"><strong>{activity.name}</strong></p>
                <img src={activity.image_path} alt="" />
                <p className="descripcion">{activity.description} €</p>
            </div>)}
        </div>
        </Fragment>
    )
}
const mapStateToProps = ({ activity }) => ({ activities: activity.activities });
export default connect(mapStateToProps)(Talleres);