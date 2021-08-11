import { getProducts } from '../api/weather';
import * as types from '../constants/ActionTypes';

const URL = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

const successList = list => ({
  type: types.GET_WEATHER_INFO_SUCCESS,
  list
})

const startList = () => ({
    type: types.GET_WEATHER_INFO_START
})

const failList = () => ({
    type: types.GET_WEATHER_INFO_FAILURE
})

export const fetchList = () => {
    return async (dispatch) => {
        dispatch(startList());
        const response = await getProducts(URL)
        if(response && response.list) {
            dispatch(successList(response))
        } else {
            dispatch(failList(response))
        }
    }
}

export const changeDegree = (value) => ({
    type: types.CHANGE_DEGREE,
    value
})