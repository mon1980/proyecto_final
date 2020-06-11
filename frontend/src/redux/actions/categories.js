import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllCategories = async() => {
    const res = await axios.get(API_URL + '/categories')
    store.dispatch({
        type: 'GET_ALL_CATEGORIES',
        payload: res.data
    });
    return res;
}