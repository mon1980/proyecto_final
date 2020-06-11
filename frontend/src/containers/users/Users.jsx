import React, { useEffect, Fragment } from 'react'
import { getAllUsers } from '../../redux/actions/users'
import { connect } from 'react-redux';
import './Users.scss';
const Users = (props) => {
    useEffect(() => {
        getAllUsers()
        .catch(console.error)
    }, [])
    return (
        <Fragment>
        <h1 className="tituloUsers"><i>Usuarios</i></h1>
        <div className="users">
            {props.users?.map(user => <div className="user" key={user._id}>
                <p><strong>{user.name}</strong></p>
                <p><strong>{user.email}</strong></p>
                <p><strong>{user.password}</strong></p>
                <p><strong>{user.role}</strong></p>
            </div>)}
        </div>
        </Fragment>
    )
}
const mapStateToProps = ({ user }) => ({ users: user.users });
export default connect(mapStateToProps)(Users);