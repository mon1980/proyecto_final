import React, {useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import {notification} from 'antd';
import './Header.scss';
import { logout, getUserInfo } from '../../redux/actions/users';

const Header = ({user}) => {
    

const history = useHistory()
     useEffect(()=>{
         getUserInfo()
         .catch(console.error)
     }, []) 

    const handleLogout = ()=>{
    
        logout(user)
        .then(res => {
            notification.success({ message: 'Logout', description: 'Ha cerrado la sesión correctamente'})
            setTimeout(() => {
           history.push('/inicio')
           
            //this.router.navigate(['/'])
            }, 1000);
        })
        .catch(()=>{
            notification.error({ message: 'Logout', description: 'Hubo un problema al intentar salir de la sesión'})
        })

    }

    
    return <header className="header">

    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/11726/triceratops-dinosaur-clipart-md.png" alt="" className="logo"/>
  
    <NavLink to='/inicio' exact>Inicio</NavLink>
    <NavLink to='/quienessomos' exact>Quienes somos</NavLink>
    <NavLink to='/talleres' exact>Talleres</NavLink>
    <NavLink to='/libros' exact>Libros</NavLink>
    <NavLink to='/materias' exact>Materias</NavLink>
    <NavLink to='/precios' exact>Precios</NavLink>
    <NavLink to='/dondeestamos' exact>Donde estamos</NavLink>



        {!user ?

            <div className="guestZone">
            <NavLink to='/login' exact>Conectar</NavLink>
            <NavLink to='/register' exact>Registro</NavLink>
            </div> : user.role === "admin" ? <div className="userAdmin">
            <NavLink to='/users' exact>Usuarios</NavLink>
            <NavLink to='/profile' exact>{user.name}</NavLink>
            <button className="logout" onClick={handleLogout}>Desconectar</button>
            </div> : <div className="userZone">
            <NavLink to='/profile' exact>{user.name}</NavLink>
            <button className="logout" onClick={handleLogout}>Desconectar</button>

            </div>}

         
   
               
    </header>



}

const mapStateToProps = ({user}) => ({ user: user.user });
export default connect(mapStateToProps)(Header);



