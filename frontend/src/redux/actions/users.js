import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const register = async(user) => {
    return axios.post(API_URL + '/users/register', user)
}

export const login = async(user) => {
    const res = await axios.post(API_URL + '/users/login', user);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.user.token);
    return res;
}


export const updateProfile = async(user) => {
    const res = await axios.put(API_URL + '/users', user, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_USER',
        payload: res.data
    });
}


export const getAllUsers = async() => {
    try {
        const res = await axios.get(API_URL + '/users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'GET_ALL_USERS',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}
export const getUserDetail = async() => {
    try {

    } catch (error) {
        console.error(error)
    }
}

export const logout = async() => {
    const res = await axios.get(API_URL + '/users/logout', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    return res;
}


export const follow = async(user_id) => {
    try {
        await axios.get(API_URL + 'users/follow/' + user_id, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'FOLLOW',
        })
        getAllUsers();
    } catch (error) {
        console.error(error)
    }
}
export const unfollow = async(user_id) => {
    try {
        await axios.get(API_URL + 'users/unfollow/' + user_id, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'UNFOLLOW',
        })
        getAllUsers();
    } catch (error) {
        console.error(error)
    }
}

export const getUserInfo = async(user) => {
    const res = await axios.get(API_URL + '/users/info', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'GET_USER_INFO',
        payload: res.data
    });

}