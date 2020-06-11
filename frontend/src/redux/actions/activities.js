import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllActivities = async() => {
    const res = await axios.get(API_URL + '/activities')
    store.dispatch({
        type: 'GET_ALL_ACTIVITIES',
        payload: res.data
    });
    return res;
}