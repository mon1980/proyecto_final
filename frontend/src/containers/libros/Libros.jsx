
import React, { useEffect, Fragment } from 'react'
import { getAllProducts } from '../../redux/actions/products'
import { connect } from 'react-redux';
import './Libros.scss';
const Libros = (props) => {
    useEffect(() => {
        getAllProducts()
        .catch(console.error)
    }, [])
    return (
        <Fragment>
            <h1 className="libros"><i>Libros</i></h1>
        <div className="products">
            {props.products?.map(product => <div className="product" key={product._id}>
                <p className="nombre"><strong>{product.name}</strong></p>
                <img src={product.image_path} alt="" />
                <p className="descripcion">{product.description}</p>
                <p className="categorias"><strong>Categorias:</strong> {product.categories?.map(category=>category.name).join(', ')}</p>
            
            </div>)}
        </div>
        </Fragment>
    )
}
const mapStateToProps = ({ product }) => ({ products: product.products });
export default connect(mapStateToProps)(Libros);


