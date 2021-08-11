import {
  CHANGE_DEGREE, GET_WEATHER_INFO_FAILURE, GET_WEATHER_INFO_START,
  GET_WEATHER_INFO_SUCCESS
} from '../constants/ActionTypes';
import { constructDataFromRaw, groupArrayOfObjects } from '../helper/utils';

const initialState = {
    loading:false,
    list: [],
    error: false,
    degree: 'fahrenheit'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WEATHER_INFO_START:
        return {
            ...state,
            loading: true
        }
      case GET_WEATHER_INFO_SUCCESS:
        const dt = action.list.list.map(function(p) {
          p.dt_txt = p.dt_txt.split(" ")[0]
           return p;
        })
        var groupedByDate = groupArrayOfObjects(dt,"dt_txt");
        const finalData = constructDataFromRaw(groupedByDate)
        return {
            ...state,
            loading: false,
            list: finalData
        }
      case GET_WEATHER_INFO_FAILURE:
        return {
            ...state,
            loading: false,
            error: true
        }
      case CHANGE_DEGREE:
        return {
          ...state,
          degree: action.value
        }
      default:
        return state
    }
  }
  
  export default reducer;