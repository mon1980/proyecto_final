import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Profile.scss'
import { updateProfile } from '../../redux/actions/users';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
const Profile = (props) => {
    const history = useHistory();
    const onFinish = user => {
        updateProfile(user).then(() => {
            notification.success({ message: 'Usuario actualizado', description: 'Usuario actualizado con éxito' })
            history.push('/')
        })
         .catch(error => {
                console.error(error)
                notification.error({ message: 'Error en registro', description: 'Error al tratar de registrar al usuario' })
         })
    };

    return (
        <div className="formContainer">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Nombre"
                    name="name"
                    initialValue={props.user?.name}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    initialValue={props.user?.email}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Actualizar Perfil
        </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
const mapStateToProps =({user})=>({user:user.user});
export default connect(mapStateToProps)(Profile) ;