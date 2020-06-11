
import React, { useEffect, Fragment } from 'react'
import { getAllCategories } from '../../redux/actions/categories'
import { connect } from 'react-redux';

import './Materias.scss';
const Materias = (props) => {
    useEffect(() => {
        getAllCategories()
        .catch(console.error)
    }, [])
    return (
        <Fragment>
            <h1 className="materias"><i>Materias</i></h1>
        <div className="categories">
            {props.categories?.map(category => <div className="category" key={category._id}>
                <p className="nombre"><strong>{category.name}</strong></p>
                <img src={category.image_path} alt="" />
                <p className="libros"><strong>Podremos disfrutar de los siguientes libros relacionados con esta materia:</strong></p>
                <p>{category.products?.map(product=>product.name).join(' y ' )}</p>
                <button><a href="http://localhost:3000/libros">Ver detalle libros</a></button>
                
               
            </div>)}
        </div>
        </Fragment>
    )
}
const mapStateToProps = ({ category }) => ({ categories: category.categories });
export default connect(mapStateToProps)(Materias);
