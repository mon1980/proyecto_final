import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllPrecios = async() => {
    const res = await axios.get(API_URL + '/precios')
    store.dispatch({
        type: 'GET_ALL_PRECIOS',
        payload: res.data
    });
    return res;
}