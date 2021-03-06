import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
import { login } from '../../../redux/actions/users';
import { notification } from 'antd';
const Login = props => {
    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(user)
        .then(res => {
            notification.success({ message: 'Login', description: 'Ha iniciado sesión correctamente'})
            setTimeout(() => {
                props.history.push('/inicio')
            }, 1000);
        })
        .catch(()=>{
            notification.error({ message: 'Login', description: 'Hubo un problema al intentar iniciar sesión'})
        })

    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <TextField type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <TextField type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login


